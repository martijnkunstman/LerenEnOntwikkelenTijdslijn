/* Tijdlijn leren en ontwikkelen
   Leest tijdlijn.json (personen, items, relaties) en tekent:
   - een verticale tijdlijn met jaarknopen, groepen begrippen per verbindingslijn en kaarten
   - een proportionele liniaal met alle jaartallen
   - levenslijnen per denker
   - een detailpaneel per begrip */
(function () {
  'use strict';

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const NU = new Date().getFullYear();
  const minderBeweging = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  let M = null;
  const staat = { weergave: 'tijdlijn', zoek: '', sorteer: 'begrip', open: null, terugFocus: null };

  /* ---------- Data ---------- */
  async function laadData() {
    if (window.TIJDLIJN_BRON === 'ingebed' && window.TIJDLIJN) return window.TIJDLIJN;
    if (location.protocol.indexOf('http') === 0) {
      try {
        const r = await fetch('tijdlijn.json', { cache: 'no-store' });
        if (r.ok) return await r.json();
      } catch (e) { /* val terug op data.js */ }
    }
    if (window.TIJDLIJN) return window.TIJDLIJN;
    throw new Error('De gegevens konden niet worden geladen. Zet data.js (of tijdlijn.json via een webserver) naast index.html.');
  }

  function bouwModel(data) {
    const personen = new Map((data.personen || []).map((p) => [p.id, p]));
    const items = (data.items || []).map((it, i) => ({
      ...it,
      index: i,
      personen: it.personen || [],
      personenObj: (it.personen || []).map((id) => personen.get(id)).filter(Boolean),
    }));
    items.sort((a, b) => a.jaar - b.jaar || a.index - b.index);
    items.forEach((it, i) => {
      it.volg = i;
      it.zoektekst = norm([it.jaar, it.begrip, it.begrip_vertaling, ...it.personenObj.flatMap((p) => [p.naam, p.functie])].join(' '));
    });
    const itemMap = new Map(items.map((it) => [it.id, it]));
    const relaties = (data.relaties || []).filter((r) => itemMap.has(r.van) && itemMap.has(r.naar));

    const buren = new Map(items.map((it) => [it.id, []]));
    relaties.forEach((r) => {
      buren.get(r.van).push({ rel: r, ander: r.naar, rol: 'van' });
      buren.get(r.naar).push({ rel: r, ander: r.van, rol: 'naar' });
    });

    // Groepen: items die via relaties verbonden zijn, hangen aan één verbindingslijn
    const ouder = new Map(items.map((it) => [it.id, it.id]));
    const vind = (id) => { while (ouder.get(id) !== id) { ouder.set(id, ouder.get(ouder.get(id))); id = ouder.get(id); } return id; };
    relaties.forEach((r) => { const a = vind(r.van), b = vind(r.naar); if (a !== b) ouder.set(a, b); });
    const groepMap = new Map();
    items.forEach((it) => {
      const k = vind(it.id);
      if (!groepMap.has(k)) groepMap.set(k, { items: [], relaties: [] });
      groepMap.get(k).items.push(it);
    });
    relaties.forEach((r) => groepMap.get(vind(r.van)).relaties.push(r));
    const groepen = [...groepMap.values()].map((g) => {
      g.type = g.items.length === 1 ? 'los' : 'gedeeld';
      g.jaar = Math.min(...g.items.map((i) => i.jaar));
      g.eerste = Math.min(...g.items.map((i) => i.volg));
      return g;
    }).sort((a, b) => a.jaar - b.jaar || a.eerste - b.eerste);

    const perPersoon = new Map();
    items.forEach((it) => it.personen.forEach((pid) => {
      if (!personen.has(pid)) return;
      if (!perPersoon.has(pid)) perPersoon.set(pid, []);
      perPersoon.get(pid).push(it);
    }));

    // Inhoudelijke verbanden tussen begrippen (optioneel blok 'begripsanalyse')
    const BA = data.begripsanalyse || null;
    let analyse = null;
    const analyseBuren = new Map();
    if (BA) {
      const ar = (BA.relaties || []).filter((r) => itemMap.has(r.van) && itemMap.has(r.naar));
      analyse = { types: BA.relatietypes || {}, themas: BA.themas || [], relaties: ar };
      ar.forEach((r) => {
        [[r.van, r.naar, true], [r.naar, r.van, false]].forEach(([a, b, uit]) => {
          if (!analyseBuren.has(a)) analyseBuren.set(a, []);
          analyseBuren.get(a).push({ r, ander: itemMap.get(b), uit });
        });
      });
    }

    return { meta: data.meta || {}, personen, items, itemMap, relaties, buren, groepen, perPersoon, analyse, analyseBuren };
  }

  /* ---------- Hulpjes ---------- */
  const isDuo = (it) => it.personen.length > 1;
  const decLabel = (d) => (d >= 2000 ? `jaren ${d}` : `jaren '${String(d).slice(2)}`);
  function levensjaren(p) {
    if (p.geboortejaar && p.overlijdensjaar) return `${p.geboortejaar}–${p.overlijdensjaar}`;
    if (p.geboortejaar) return `geb. ${p.geboortejaar}`;
    return '';
  }
  function levensTekst(p) {
    if (p.geboortejaar && p.overlijdensjaar) return `${p.geboortejaar}–${p.overlijdensjaar}`;
    if (p.geboortejaar) return `geboren ${p.geboortejaar}`;
    return 'levensjaren onbekend';
  }
  const itemLink = (o) =>
    `<button type="button" class="item-link" data-open="${esc(o.id)}"><span class="il-jaar">${o.jaar}</span><span class="il-begrip">${esc(o.begrip)}</span></button>`;

  /* ---------- Portretfoto's ---------- */
  function initialen(p) {
    const delen = String(p.naam || '').split(/\s+/).filter(Boolean);
    const voor = delen[0] ? delen[0][0] : '';
    const achter = (p.achternaam || delen[delen.length - 1] || '')[0] || '';
    return esc((voor + achter).toUpperCase());
  }
  // Toont de foto als ronde uitsnede rond het gezicht (focus in procenten, zoom t.o.v. de korte zijde).
  // Zonder foto, of als de foto niet laadt, blijven de initialen zichtbaar.
  function avatar(p, klasse = '') {
    const f = p.foto;
    let img = '';
    if (f && f.url && f.breedte && f.hoogte) {
      const a = f.breedte / f.hoogte;
      const z = f.zoom || 1;
      const W = a >= 1 ? z * a : z;
      const H = a >= 1 ? z : z / a;
      const fx = ((f.focus && f.focus[0]) ?? 50) / 100;
      const fy = ((f.focus && f.focus[1]) ?? 35) / 100;
      const L = Math.min(0, Math.max(1 - W, 0.5 - fx * W));
      const T = Math.min(0, Math.max(1 - H, 0.5 - fy * H));
      img = `<img src="${esc(f.url)}" alt="" loading="lazy" decoding="async"
        style="width:${(W * 100).toFixed(2)}%;height:${(H * 100).toFixed(2)}%;left:${(L * 100).toFixed(2)}%;top:${(T * 100).toFixed(2)}%">`;
    }
    return `<span class="avatar ${klasse}" aria-hidden="true"><span class="avatar-ini">${initialen(p)}</span>${img}</span>`;
  }

  /* ---------- Tijdlijn ---------- */
  function kaartHTML(it) {
    const ook = [];
    it.personen.forEach((pid) => {
      const p = M.personen.get(pid);
      (M.perPersoon.get(pid) || []).forEach((o) => { if (o.id !== it.id) ook.push({ p, o }); });
    });
    const toonVertaling = it.begrip_vertaling && norm(it.begrip_vertaling) !== norm(it.begrip);
    return `<article class="kaart${isDuo(it) ? ' is-duo' : ''}" id="${esc(it.id)}" data-id="${esc(it.id)}">
      ${isDuo(it) ? '<div class="kaart-kop"><span class="label label-duo">Duo</span></div>' : ''}
      <h3 class="begrip"><button type="button" class="kaart-open" data-open="${esc(it.id)}">${esc(it.begrip)}</button></h3>
      ${toonVertaling ? `<p class="vertaling">${esc(it.begrip_vertaling)}</p>` : ''}
      <ul class="namen">${it.personenObj.map((p) => `<li><span class="naam">${esc(p.naam)}</span><span class="leven">${levensjaren(p)}</span></li>`).join('')}</ul>
      ${ook.length ? `<p class="ook">${ook.map((x) => `${esc(x.p.achternaam || x.p.naam)} ook in <button type="button" class="ook-link" data-open="${esc(x.o.id)}">${x.o.jaar}</button>`).join(' · ')}</p>` : ''}
    </article>`;
  }

  function renderTijdlijn() {
    let html = '';
    let decennium = null;
    M.groepen.forEach((g, gi) => {
      const dec = Math.floor(g.jaar / 10) * 10;
      if (dec !== decennium) {
        decennium = dec;
        html += `<div class="decennium" aria-hidden="true"><span>${decLabel(dec)}</span></div>`;
      }
      const kant = gi % 2 === 0 ? 'links' : 'rechts';
      html += `<section class="jaarblok" data-kant="${kant}" data-jaar="${g.jaar}" aria-label="${g.jaar}">
        <div class="jaarknoop"><span>${g.jaar}</span></div>
        <div class="groep groep-${g.type}">
          <div class="groep-kaarten">${g.items.map(kaartHTML).join('')}</div>
        </div>
      </section>`;
    });
    $('#tijdlijn').innerHTML = html;
  }

  /* ---------- Liniaal ---------- */
  let liniaalPct = null;
  function renderLiniaal() {
    const jaren = M.items.map((i) => i.jaar);
    const min = Math.floor(Math.min(...jaren) / 10) * 10;
    const max = Math.ceil((Math.max(...jaren) + 1) / 10) * 10;
    const pct = (j) => ((j - min) / (max - min)) * 100;
    liniaalPct = pct;
    let html = '<div class="liniaal-as"></div>';
    for (let d = min, i = 0; d <= max; d += 10, i++) {
      html += `<span class="tick${i % 2 ? ' oneven' : ''}" style="left:${pct(d)}%"><span>${d}</span></span>`;
    }
    const perJaar = new Map();
    M.items.forEach((it) => {
      const n = perJaar.get(it.jaar) || 0;
      perJaar.set(it.jaar, n + 1);
      html += `<button type="button" class="stip${isDuo(it) ? ' is-duo' : ''}" data-ga="${esc(it.id)}" data-jaar="${it.jaar}"
        style="left:${pct(it.jaar + 0.5)}%;--n:${n}" title="${it.jaar} · ${esc(it.begrip)}" aria-label="${it.jaar}: ${esc(it.begrip)}"></button>`;
    });
    html += '<div class="liniaal-cursor" id="liniaal-cursor" hidden></div>';
    $('#liniaal').innerHTML = html;
  }

  function volgHuidigJaar() {
    if (!('IntersectionObserver' in window)) return;
    const cursor = $('#liniaal-cursor');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const jaar = Number(e.target.dataset.jaar);
        $$('.jaarblok.is-huidig').forEach((b) => b.classList.remove('is-huidig'));
        e.target.classList.add('is-huidig');
        $$('.stip').forEach((s) => s.classList.toggle('is-huidig', Number(s.dataset.jaar) === jaar));
        cursor.hidden = false;
        cursor.style.left = `${liniaalPct(jaar + 0.5)}%`;
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('.jaarblok').forEach((b) => io.observe(b));
  }

  /* ---------- Levenslijnen ---------- */
  function renderPersonen() {
    const lijst = [...M.perPersoon.keys()].map((id) => M.personen.get(id));
    const eerste = (p) => Math.min(...M.perPersoon.get(p.id).map((i) => i.jaar));
    const achternaam = (p) => p.achternaam || p.naam;
    const sorteer = {
      begrip: (a, b) => eerste(a) - eerste(b) || (a.geboortejaar || 9999) - (b.geboortejaar || 9999),
      geboorte: (a, b) => (a.geboortejaar || 9999) - (b.geboortejaar || 9999) || eerste(a) - eerste(b),
      naam: (a, b) => achternaam(a).localeCompare(achternaam(b), 'nl') || a.naam.localeCompare(b.naam, 'nl'),
    }[staat.sorteer];
    lijst.sort(sorteer);

    const geboortes = lijst.map((p) => p.geboortejaar).filter(Boolean);
    const min = Math.floor((Math.min(...geboortes, ...M.items.map((i) => i.jaar)) - 5) / 10) * 10;
    const max = Math.ceil((NU + 1) / 10) * 10;
    const pct = (j) => ((j - min) / (max - min)) * 100;

    let raster = '';
    let as = '';
    for (let j = min; j <= max; j += 10) {
      const sterk = j % 50 === 0;
      raster += `<span class="raster-lijn${sterk ? ' sterk' : ''}" style="left:${pct(j)}%"></span>`;
      if (j % 20 === 0) as += `<span class="as-label" style="left:${pct(j)}%">${j}</span>`;
    }
    raster += `<span class="raster-nu" style="left:${pct(NU)}%"></span>`;
    as += `<span class="as-label nu" style="left:${pct(NU)}%">nu</span>`;
    const asRij = `<div class="levens-as" aria-hidden="true"><span></span><div class="as-spoor">${as}</div></div>`;

    const rijen = lijst.map((p) => {
      const items = M.perPersoon.get(p.id);
      let spoor = '';
      if (p.geboortejaar) {
        const eind = p.overlijdensjaar || NU;
        spoor += `<span class="leven-jaar begin" style="right:${100 - pct(p.geboortejaar)}%">${p.geboortejaar}</span>`;
        spoor += `<span class="leven-balk${p.overlijdensjaar ? '' : ' leeft'}" style="left:${pct(p.geboortejaar)}%;width:${pct(eind) - pct(p.geboortejaar)}%"></span>`;
        if (p.overlijdensjaar) spoor += `<span class="leven-jaar eind" style="left:${pct(eind)}%">${p.overlijdensjaar}</span>`;
      } else {
        spoor += `<span class="leven-onbekend" style="right:${100 - pct(Math.min(...items.map((i) => i.jaar)))}%">levensjaren onbekend</span>`;
      }
      spoor += items.map((i) => `<button type="button" class="leven-stip${isDuo(i) ? ' is-duo' : ''}" data-open="${esc(i.id)}" style="left:${pct(i.jaar)}%"
        title="${i.jaar} · ${esc(i.begrip)}" aria-label="${esc(p.naam)}, ${i.jaar}: ${esc(i.begrip)}"></button>`).join('');
      return `<div class="leven-rij" data-p="${esc(p.id)}">
        <div class="leven-naam">${avatar(p, 'avatar-klein')}<div class="leven-naam-tekst"><span class="naam">${esc(p.naam)}</span>
          <span class="leven-begrippen">${items.map((i) => `<button type="button" class="begrip-link" data-open="${esc(i.id)}">${esc(i.begrip)}</button>`).join(', ')}</span></div></div>
        <div class="leven-spoor">${spoor}</div>
      </div>`;
    }).join('');

    $('#levens').innerHTML = `<div class="levens-raster" aria-hidden="true">${raster}</div>${asRij}${rijen}${asRij}`;
    pasFilterToe();
    markeerActief();
  }

  /* ---------- Portretten ---------- */
  function renderPortretten() {
    let html = '';
    let decennium = null;
    let vorigJaar = null;
    let rij = [];
    const sluitJaar = () => {
      if (vorigJaar === null) return;
      html += `<section class="portret-jaar" data-jaar="${vorigJaar}" aria-label="${vorigJaar}">
        <div class="jaarknoop"><span>${vorigJaar}</span></div>
        <div class="portret-rij">${rij.join('')}</div>
      </section>`;
      rij = [];
    };
    M.items.forEach((it) => {
      if (it.jaar !== vorigJaar) {
        sluitJaar();
        const dec = Math.floor(it.jaar / 10) * 10;
        if (dec !== decennium) {
          decennium = dec;
          html += `<div class="decennium" aria-hidden="true"><span>${decLabel(dec)}</span></div>`;
        }
        vorigJaar = it.jaar;
      }
      it.personenObj.forEach((p) => {
        rij.push(`<button type="button" class="portret" data-open="${esc(it.id)}" data-p="${esc(p.id)}" data-item="${esc(it.id)}"
          aria-label="${esc(p.naam)}, ${esc(levensTekst(p))}">
          ${avatar(p, 'avatar-groot')}
          <span class="portret-tekst"><span class="portret-naam">${esc(p.naam)}</span><span class="portret-jaren">${esc(levensTekst(p))}</span></span>
        </button>`);
      });
    });
    sluitJaar();
    $('#portretten-lijst').innerHTML = html;
    renderCredits();
    pasFilterToe();
    markeerActief();
  }

  function renderCredits() {
    const metFoto = [...M.personen.values()].filter((p) => p.foto && p.foto.url && M.perPersoon.has(p.id))
      .sort((a, b) => (a.achternaam || a.naam).localeCompare(b.achternaam || b.naam, 'nl'));
    const zonder = M.perPersoon.size - metFoto.length;
    const regels = metFoto.map((p) => {
      const f = p.foto;
      const lic = f.licentie_url ? `<a href="${esc(f.licentie_url)}" target="_blank" rel="noopener">${esc(f.licentie)}</a>` : esc(f.licentie || '');
      return `<li><b>${esc(p.naam)}</b>: foto ${esc(f.maker || 'onbekend')}, ${lic}, via <a href="${esc(f.bron)}" target="_blank" rel="noopener">Wikimedia Commons</a></li>`;
    }).join('');
    $('#credits').innerHTML = `<summary>Fotoverantwoording (${metFoto.length} foto's)</summary>
      <p>Alle foto's komen van Wikimedia Commons en vallen onder een vrije licentie of het publieke domein. Voor ${zonder} personen is geen foto met een vrije licentie gevonden; zij staan met initialen.</p>
      <ul>${regels}</ul>`;
  }

  /* ---------- Begrippen A–Z ---------- */
  function renderBegrippen() {
    const lijst = [...M.items].sort((a, b) => a.begrip.localeCompare(b.begrip, 'nl', { sensitivity: 'base' }));
    const perLetter = new Map();
    lijst.forEach((it) => {
      const eerste = norm(it.begrip).charAt(0).toUpperCase();
      const letter = /[A-Z]/.test(eerste) ? eerste : '#';
      if (!perLetter.has(letter)) perLetter.set(letter, []);
      perLetter.get(letter).push(it);
    });
    $('#az-index').innerHTML = [...perLetter.keys()]
      .map((l) => `<button type="button" class="az-letter-knop" data-letter="${l}" aria-label="Naar ${l}">${l}</button>`).join('');
    $('#az-lijst').innerHTML = [...perLetter].map(([l, items]) => `<section class="az-groep" id="az-${l}" data-letter="${l}" aria-labelledby="az-kop-${l}">
        <h2 class="az-kop" id="az-kop-${l}">${l}</h2>
        <ul class="az-items">${items.map((it) => {
          const toonVertaling = it.begrip_vertaling && norm(it.begrip_vertaling) !== norm(it.begrip);
          return `<li><button type="button" class="az-item" data-open="${esc(it.id)}" data-id="${esc(it.id)}">
            <span class="az-begrip">${esc(it.begrip)}</span>
            ${toonVertaling ? `<span class="az-vertaling">${esc(it.begrip_vertaling)}</span>` : ''}
            ${it.omschrijving ? `<span class="az-omschrijving">${esc(it.omschrijving)}</span>` : ''}
            <span class="az-namen">${it.personenObj.map((p) => esc(p.naam)).join(' &amp; ')}</span>
          </button></li>`;
        }).join('')}</ul>
      </section>`).join('');
    pasFilterToe();
    markeerActief();
  }

  /* ---------- Diagram ---------- */
  // Teksten voor het detailpaneel: [vanuit dit begrip, naar dit begrip toe]
  const VERBAND_TEKST = {
    basis_voor: ['Is basis voor', 'Bouwt voort op'],
    voorwaarde_voor: ['Is voorwaarde voor', 'Heeft als voorwaarde'],
    versterkt: ['Versterkt', 'Wordt versterkt door'],
    belemmert: ['Belemmert', 'Wordt belemmerd door'],
    sluit_aan_bij: ['Sluit aan bij', 'Sluit aan bij'],
  };
  const VERBAND_VOLGORDE = ['basis_voor:in', 'voorwaarde_voor:in', 'versterkt:in', 'belemmert:in',
    'basis_voor:uit', 'voorwaarde_voor:uit', 'versterkt:uit', 'belemmert:uit', 'sluit_aan_bij:uit', 'sluit_aan_bij:in'];
  const NS = 'http://www.w3.org/2000/svg';
  const diagram = { klaar: false, kolomVan: new Map(), hover: null, verborgen: new Set() };

  // Kies de volgorde van de thema-kolommen zo dat verbonden thema's zo dicht mogelijk bij elkaar staan.
  function themaVolgorde(n, relaties, themaIndex) {
    const w = Array.from({ length: n }, () => Array(n).fill(0));
    relaties.forEach((r) => {
      const a = themaIndex.get(r.van);
      const b = themaIndex.get(r.naar);
      if (a !== undefined && b !== undefined && a !== b) { w[a][b]++; w[b][a]++; }
    });
    const start = [...Array(n).keys()];
    if (n > 7) return start;
    let beste = start.slice();
    let besteKost = Infinity;
    const kost = (volgorde) => {
      const pos = [];
      volgorde.forEach((t, i) => { pos[t] = i; });
      let k = 0;
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) k += w[i][j] * Math.abs(pos[i] - pos[j]);
      return k;
    };
    const permuteer = (arr, l) => {
      if (l === arr.length) { const k = kost(arr); if (k < besteKost) { besteKost = k; beste = arr.slice(); } return; }
      for (let i = l; i < arr.length; i++) {
        [arr[l], arr[i]] = [arr[i], arr[l]];
        permuteer(arr, l + 1);
        [arr[l], arr[i]] = [arr[i], arr[l]];
      }
    };
    permuteer(start, 0);
    return beste;
  }

  function renderDiagram() {
    const A = M.analyse;
    if (!A || !A.relaties.length) {
      $('#diagram-vlak').innerHTML = '<p class="melding">Deze gegevens bevatten nog geen begripsanalyse.</p>';
      return;
    }
    // Kolommen: één per thema, begrippen daarbinnen in volgorde van de tijdlijn
    const themas = A.themas.map((t) => ({ ...t, items: t.items.filter((id) => M.itemMap.has(id)) }));
    const ingedeeld = new Set(themas.flatMap((t) => t.items));
    const overig = M.items.filter((it) => !ingedeeld.has(it.id)).map((it) => it.id);
    if (overig.length) themas.push({ id: 'thema-overig', naam: 'Overig', items: overig });
    const themaIndex = new Map();
    themas.forEach((t, i) => t.items.forEach((id) => themaIndex.set(id, i)));
    const volgorde = themaVolgorde(themas.length, A.relaties, themaIndex);

    diagram.kolomVan = new Map();
    const kolommen = volgorde.map((ti, kolom) => {
      const t = themas[ti];
      const items = t.items.map((id) => M.itemMap.get(id)).sort((a, b) => a.volg - b.volg);
      items.forEach((it) => diagram.kolomVan.set(it.id, kolom));
      return `<section class="diagram-kolom" aria-label="${esc(t.naam)}">
        <h3 class="diagram-thema">${esc(t.naam)}</h3>
        <div class="diagram-knopen">${items.map((it) => `<button type="button" class="dnode" data-id="${esc(it.id)}" data-open="${esc(it.id)}">${esc(it.begrip)}</button>`).join('')}</div>
      </section>`;
    }).join('');
    $('#diagram-vlak').style.setProperty('--kolommen', volgorde.length);
    $('#diagram-vlak').innerHTML = `<svg class="diagram-lijnen" id="diagram-lijnen" aria-hidden="true"></svg><div class="diagram-kolommen">${kolommen}</div>`;

    // Legenda met aan/uit-knoppen per soort verband
    const telling = new Map();
    A.relaties.forEach((r) => telling.set(r.type, (telling.get(r.type) || 0) + 1));
    $('#diagram-legenda').innerHTML = Object.entries(A.types).filter(([type]) => telling.has(type)).map(([type, t]) => `
      <button type="button" class="d-soort type-${esc(type)}" data-soort="${esc(type)}" aria-pressed="${!diagram.verborgen.has(type)}">
        <svg viewBox="0 0 40 12" width="40" height="12" aria-hidden="true"><line x1="2" y1="6" x2="${t.richting === 'tweeweg' ? 38 : 32}" y2="6" class="rand-lijn"/>
          ${type === 'belemmert' ? '<line x1="35" y1="1" x2="35" y2="11" class="rem-streep"/>' : t.richting === 'tweeweg' ? '' : '<path d="M31,1.5 L39,6 L31,10.5 z" class="pijlkop"/>'}</svg>
        <span>${esc(t.label)}</span><span class="d-aantal">${telling.get(type)}</span>
      </button>`).join('');

    diagram.klaar = true;
    pasFilterToe();
    markeerActief();
  }

  function tekenLijnen() {
    if (!diagram.klaar || staat.weergave !== 'diagram') return;
    const vlak = $('#diagram-vlak');
    const svg = $('#diagram-lijnen');
    const basis = vlak.getBoundingClientRect();
    const rects = new Map();
    $$('.dnode', vlak).forEach((n) => {
      const r = n.getBoundingClientRect();
      rects.set(n.dataset.id, { x: r.left - basis.left, y: r.top - basis.top, w: r.width, h: r.height });
    });
    svg.setAttribute('width', vlak.scrollWidth);
    svg.setAttribute('height', vlak.scrollHeight);
    svg.setAttribute('viewBox', `0 0 ${vlak.scrollWidth} ${vlak.scrollHeight}`);

    // Welke kant van elk blok gebruikt een lijn, en in welke volgorde (tegen kruisingen)
    const randen = M.analyse.relaties.filter((r) => rects.has(r.van) && rects.has(r.naar)).map((r) => {
      const kv = diagram.kolomVan.get(r.van);
      const kn = diagram.kolomVan.get(r.naar);
      const zijdeVan = kv === kn ? 'r' : kv < kn ? 'r' : 'l';
      const zijdeNaar = kv === kn ? 'r' : kv < kn ? 'l' : 'r';
      return { r, zijdeVan, zijdeNaar, zelfdeKolom: kv === kn };
    });
    const poorten = new Map();
    const voegToe = (id, zijde, rand, eind, anderId) => {
      const k = `${id}|${zijde}`;
      if (!poorten.has(k)) poorten.set(k, []);
      const ander = rects.get(anderId);
      poorten.get(k).push({ rand, eind, sort: ander.y + ander.h / 2 });
    };
    randen.forEach((e) => { voegToe(e.r.van, e.zijdeVan, e, 'van', e.r.naar); voegToe(e.r.naar, e.zijdeNaar, e, 'naar', e.r.van); });
    poorten.forEach((lijst, k) => {
      const [id, zijde] = k.split('|');
      const b = rects.get(id);
      lijst.sort((a, c) => a.sort - c.sort);
      lijst.forEach((p, i) => {
        const y = b.y + b.h * (i + 1) / (lijst.length + 1);
        const x = zijde === 'r' ? b.x + b.w : b.x;
        p.rand[p.eind] = { x, y };
      });
    });

    const defs = `<defs>
      ${['basis_voor', 'voorwaarde_voor', 'versterkt'].map((t) => `<marker id="kop-${t}" viewBox="0 0 10 10" refX="9.5" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0.5 L10,5 L0,9.5 z" class="pijlkop pijlkop-${t}"/></marker>`).join('')}
      <marker id="kop-belemmert" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><line x1="8" y1="0" x2="8" y2="10" class="rem-streep"/></marker>
    </defs>`;
    const paden = randen.map((e) => {
      const { r } = e;
      const a = e.van;
      const b = e.naar;
      let d;
      if (e.zelfdeKolom) {
        const uit = 18 + Math.min(34, Math.abs(b.y - a.y) * 0.12);
        d = `M${a.x},${a.y} C${a.x + uit},${a.y} ${b.x + uit},${b.y} ${b.x},${b.y}`;
      } else {
        const dx = (b.x - a.x) * 0.5;
        d = `M${a.x},${a.y} C${a.x + dx},${a.y} ${b.x - dx},${b.y} ${b.x},${b.y}`;
      }
      const t = M.analyse.types[r.type] || {};
      const kop = t.richting === 'tweeweg' ? '' : ` marker-end="url(#kop-${esc(r.type)})"`;
      const vanNaam = M.itemMap.get(r.van).begrip;
      const naarNaam = M.itemMap.get(r.naar).begrip;
      const titel = `${vanNaam} ${t.label || r.type} ${naarNaam}${r.toelichting ? `: ${r.toelichting}` : ''}`;
      return `<g class="rand type-${esc(r.type)}" data-type="${esc(r.type)}" data-van="${esc(r.van)}" data-naar="${esc(r.naar)}"><title>${esc(titel)}</title>
        <path class="rand-raak" d="${d}"/><path class="rand-lijn" d="${d}"${kop}/></g>`;
    }).join('');
    svg.innerHTML = defs + paden;
    pasSoortenToe();
    zetDiagramFocus();
  }

  // Markeer de verbanden van het begrip onder de muis, of anders van het geselecteerde begrip
  function zetDiagramFocus() {
    if (!diagram.klaar) return;
    const vlak = $('#diagram-vlak');
    const id = diagram.hover || (staat.open && M.itemMap.has(staat.open) ? staat.open : null);
    $$('.dnode.is-focus, .dnode.is-buur', vlak).forEach((n) => n.classList.remove('is-focus', 'is-buur'));
    $$('.rand.is-aan', vlak).forEach((g) => g.classList.remove('is-aan'));
    vlak.classList.toggle('heeft-focus', Boolean(id));
    if (!id) return;
    const node = $(`.dnode[data-id="${CSS.escape(id)}"]`, vlak);
    if (node) node.classList.add('is-focus');
    $$('.rand', vlak).forEach((g) => {
      if (diagram.verborgen.has(g.dataset.type)) return;
      const ander = g.dataset.van === id ? g.dataset.naar : g.dataset.naar === id ? g.dataset.van : null;
      if (!ander) return;
      g.classList.add('is-aan');
      const n = $(`.dnode[data-id="${CSS.escape(ander)}"]`, vlak);
      if (n) n.classList.add('is-buur');
    });
  }

  function pasSoortenToe() {
    $$('#diagram-lijnen .rand').forEach((g) => { g.style.display = diagram.verborgen.has(g.dataset.type) ? 'none' : ''; });
    $$('.d-soort').forEach((b) => b.setAttribute('aria-pressed', String(!diagram.verborgen.has(b.dataset.soort))));
  }

  function verbandenHTML(it) {
    const lijst = (M.analyseBuren && M.analyseBuren.get(it.id)) || [];
    if (!lijst.length) return '';
    const groepen = new Map();
    lijst.forEach((v) => {
      const k = `${v.r.type}:${v.uit ? 'uit' : 'in'}`;
      if (!groepen.has(k)) groepen.set(k, []);
      groepen.get(k).push(v);
    });
    const sleutels = [...groepen.keys()].sort((a, b) => {
      const ia = VERBAND_VOLGORDE.indexOf(a);
      const ib = VERBAND_VOLGORDE.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    // "Sluit aan bij" in één groep, ongeacht de richting
    const samen = new Map();
    sleutels.forEach((k) => {
      const [type, kant] = k.split(':');
      const tekst = VERBAND_TEKST[type] ? VERBAND_TEKST[type][kant === 'uit' ? 0 : 1] : type;
      if (!samen.has(tekst)) samen.set(tekst, []);
      samen.get(tekst).push(...groepen.get(k));
    });
    return `<section><h3 class="p-sectie">Verbanden</h3>
      ${[...samen].map(([tekst, vs]) => `<div class="v-blok"><p class="v-kop">${esc(tekst)}</p>
        <ul class="v-lijst">${vs.sort((a, b) => a.ander.volg - b.ander.volg).map((v) => `<li>${itemLink(v.ander)}${v.r.toelichting ? `<p class="v-toelichting">${esc(v.r.toelichting)}</p>` : ''}</li>`).join('')}</ul>
      </div>`).join('')}
    </section>`;
  }

  /* ---------- Zoeken ---------- */
  function zoekOK(tekst) {
    if (!staat.zoek) return true;
    return norm(staat.zoek).split(/\s+/).filter(Boolean).every((w) => tekst.includes(w));
  }
  function pasFilterToe() {
    let n = 0;
    M.items.forEach((it) => {
      const ok = zoekOK(it.zoektekst);
      if (ok) n++;
      const kaart = document.getElementById(it.id);
      if (kaart) kaart.classList.toggle('is-gedimd', !ok);
      const stip = $(`.stip[data-ga="${CSS.escape(it.id)}"]`);
      if (stip) stip.classList.toggle('is-gedimd', !ok);
      const az = $(`.az-item[data-id="${CSS.escape(it.id)}"]`);
      if (az) az.classList.toggle('is-gedimd', !ok);
      const dn = $(`.dnode[data-id="${CSS.escape(it.id)}"]`);
      if (dn) dn.classList.toggle('is-gedimd', !ok);
    });
    $$('.jaarblok').forEach((b) => b.classList.toggle('is-gedimd', $$('.kaart', b).every((k) => k.classList.contains('is-gedimd'))));
    $$('.az-groep').forEach((g) => {
      const leeg = $$('.az-item', g).every((k) => k.classList.contains('is-gedimd'));
      g.classList.toggle('is-gedimd', leeg);
      const knop = $(`.az-letter-knop[data-letter="${g.dataset.letter}"]`);
      if (knop) knop.classList.toggle('is-gedimd', leeg);
    });

    const persoonOK = new Map();
    M.perPersoon.forEach((items, pid) => {
      const p = M.personen.get(pid);
      const tekst = norm([p.naam, p.functie, p.geboortejaar, p.overlijdensjaar, ...items.map((i) => `${i.jaar} ${i.begrip} ${i.begrip_vertaling}`)].join(' '));
      persoonOK.set(pid, zoekOK(tekst));
    });
    const np = [...persoonOK.values()].filter(Boolean).length;
    $$('.leven-rij, .portret').forEach((r) => r.classList.toggle('is-gedimd', !persoonOK.get(r.dataset.p)));
    $$('.portret-jaar').forEach((b) => b.classList.toggle('is-gedimd', $$('.portret', b).every((k) => k.classList.contains('is-gedimd'))));

    const actief = Boolean(staat.zoek);
    const overBegrippen = ['tijdlijn', 'begrippen', 'diagram'].includes(staat.weergave);
    const totaal = overBegrippen ? M.items.length : M.perPersoon.size;
    const aantal = overBegrippen ? n : np;
    const woord = overBegrippen ? 'begrippen' : 'personen';
    let tekst = actief ? `${aantal} van ${totaal} ${woord}` : `${totaal} ${woord}`;
    if (actief && aantal === 0) tekst = `Niets gevonden voor “${staat.zoek}”`;
    $('#telling').textContent = tekst;
  }

  /* ---------- Detailpaneel ---------- */
  function paneelHTML(it) {
    const duo = isDuo(it);
    const toonVertaling = it.begrip_vertaling && norm(it.begrip_vertaling) !== norm(it.begrip);
    const personen = it.personenObj.map((p) => {
      const leeftijd = p.geboortejaar ? it.jaar - p.geboortejaar : null;
      const andere = (M.perPersoon.get(p.id) || []).filter((o) => o.id !== it.id);
      return `<div class="p-persoon">
        ${avatar(p, 'avatar-paneel')}
        <div class="p-persoon-tekst">
          <p class="p-naam">${esc(p.naam)}</p>
          <p class="p-meta">${levensTekst(p)}${leeftijd !== null ? ` · ${leeftijd} jaar in ${it.jaar}` : ''}</p>
          ${p.functie ? `<p class="p-functie">${esc(p.functie)}</p>` : ''}
          ${andere.length ? `<p class="p-ook">Ook op de tijdlijn: ${andere.map(itemLink).join('')}</p>` : ''}
        </div>
      </div>`;
    }).join('');

    // Begrippen aan dezelfde verbindingslijn, gegroepeerd per jaartal
    const perJaar = new Map();
    M.buren.get(it.id).forEach((b) => {
      const o = M.itemMap.get(b.ander);
      if (!perJaar.has(o.jaar)) perJaar.set(o.jaar, new Map());
      perJaar.get(o.jaar).set(o.id, o);
    });
    const verbanden = [...perJaar].sort((a, b) => a[0] - b[0]).map(([jaar, lijst]) => `<section>
      <h3 class="p-sectie">Ook in ${jaar}</h3>
      <ul class="v-lijst">${[...lijst.values()].sort((a, b) => a.volg - b.volg).map((o) => `<li>${itemLink(o)}</li>`).join('')}</ul>
    </section>`).join('');

    const vorige = M.items[it.volg - 1];
    const volgende = M.items[it.volg + 1];
    return `<div class="p-kop">
        <p class="p-boven"><span class="p-jaar">${it.jaar}</span>${duo ? '<span class="label label-duo">Duo</span>' : ''}</p>
        <button type="button" class="p-sluit" aria-label="Sluiten"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg></button>
      </div>
      <div class="p-titel">
        <h2 class="p-begrip" id="p-titel" tabindex="-1">${esc(it.begrip)}</h2>
        ${toonVertaling ? `<p class="p-vertaling">${esc(it.begrip_vertaling)}</p>` : ''}
      </div>
      ${it.omschrijving ? `<p class="p-omschrijving">${esc(it.omschrijving)}</p>` : ''}
      ${it.uitleg ? `<section class="p-uitleg-blok"><h3 class="p-sectie">Voor leren en ontwikkelen</h3><p class="p-tekst">${esc(it.uitleg)}</p></section>` : ''}
      <section><h3 class="p-sectie">${duo ? 'Personen' : 'Persoon'}</h3><div class="p-personen">${personen}</div></section>
      ${verbanden}
      ${verbandenHTML(it)}
      <nav class="p-nav" aria-label="Vorig en volgend begrip">
        ${vorige ? `<button type="button" data-open="${esc(vorige.id)}"><span class="richting">← ${vorige.jaar}</span><span class="doel">${esc(vorige.begrip)}</span></button>` : ''}
        ${volgende ? `<button type="button" class="volgende" data-open="${esc(volgende.id)}"><span class="richting">${volgende.jaar} →</span><span class="doel">${esc(volgende.begrip)}</span></button>` : ''}
      </nav>`;
  }

  function markeerActief() {
    $$('.kaart.is-actief, .kaart.is-verwant').forEach((k) => k.classList.remove('is-actief', 'is-verwant'));
    $$('.leven-rij.is-actief, .portret.is-actief, .az-item.is-actief, .dnode.is-actief').forEach((r) => r.classList.remove('is-actief'));
    zetDiagramFocus();
    if (!staat.open) return;
    $$(`.dnode[data-id="${CSS.escape(staat.open)}"]`).forEach((r) => r.classList.add('is-actief'));
    $$(`.az-item[data-id="${CSS.escape(staat.open)}"]`).forEach((r) => r.classList.add('is-actief'));
    $$(`.portret[data-item="${CSS.escape(staat.open)}"]`).forEach((r) => r.classList.add('is-actief'));
    const it = M.itemMap.get(staat.open);
    const kaart = document.getElementById(it.id);
    if (kaart) kaart.classList.add('is-actief');
    // Alleen andere begrippen van dezelfde denker(s) lichten mee op, niet de begrippen uit hetzelfde jaar.
    const verwant = new Set();
    it.personen.forEach((pid) => (M.perPersoon.get(pid) || []).forEach((o) => verwant.add(o.id)));
    verwant.delete(it.id);
    verwant.forEach((id) => { const k = document.getElementById(id); if (k) k.classList.add('is-verwant'); });
    it.personen.forEach((pid) => { const r = $(`.leven-rij[data-p="${CSS.escape(pid)}"]`); if (r) r.classList.add('is-actief'); });
  }

  function openDetail(id, opties = {}) {
    const it = M.itemMap.get(id);
    if (!it) return;
    const paneel = $('#paneel');
    if (!paneel.classList.contains('is-open')) staat.terugFocus = document.activeElement;
    staat.open = id;
    $('#paneel-inhoud').innerHTML = paneelHTML(it);
    paneel.classList.add('is-open');
    paneel.removeAttribute('inert');
    paneel.setAttribute('aria-hidden', 'false');
    paneel.scrollTop = 0;
    document.body.classList.add('paneel-open');
    markeerActief();
    if (opties.focus !== false) $('#p-titel').focus({ preventScroll: true });
    if (staat.weergave === 'tijdlijn' && opties.scroll !== false) {
      const kaart = document.getElementById(id);
      if (kaart) requestAnimationFrame(() => kaart.scrollIntoView({ behavior: minderBeweging ? 'auto' : 'smooth', block: 'center' }));
    }
    try { history.replaceState(null, '', `#${id}`); } catch (e) { /* genegeerd */ }
  }

  function sluitDetail() {
    const paneel = $('#paneel');
    if (!paneel.classList.contains('is-open')) return;
    paneel.classList.remove('is-open');
    paneel.setAttribute('inert', '');
    paneel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('paneel-open');
    staat.open = null;
    markeerActief();
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* genegeerd */ }
    if (staat.terugFocus && document.contains(staat.terugFocus)) staat.terugFocus.focus({ preventScroll: true });
  }

  function gaNaar(id) {
    if (staat.weergave !== 'tijdlijn') zetWeergave('tijdlijn');
    const kaart = document.getElementById(id);
    if (!kaart) return;
    kaart.scrollIntoView({ behavior: minderBeweging ? 'auto' : 'smooth', block: 'center' });
    kaart.classList.remove('is-flits');
    void kaart.offsetWidth;
    kaart.classList.add('is-flits');
  }

  /* ---------- Weergave ---------- */
  const WEERGAVEN = ['tijdlijn', 'portretten', 'personen', 'begrippen', 'diagram'];
  function zetWeergave(w) {
    staat.weergave = w;
    WEERGAVEN.forEach((v) => {
      $(`#tab-${v}`).setAttribute('aria-selected', String(v === w));
      $(`#${v}`).hidden = v !== w;
    });
    $('#liniaal-balk').hidden = w !== 'tijdlijn';
    $('#legenda').hidden = w !== 'tijdlijn';
    if (w === 'personen' && !$('#levens').children.length) renderPersonen();
    if (w === 'portretten' && !$('#portretten-lijst').children.length) renderPortretten();
    if (w === 'begrippen' && !$('#az-lijst').children.length) renderBegrippen();
    if (w === 'diagram') {
      if (!diagram.klaar) renderDiagram();
      requestAnimationFrame(tekenLijnen);
    }
    pasFilterToe();
  }

  /* ---------- Gebeurtenissen ---------- */
  function koppel() {
    document.addEventListener('click', (e) => {
      const open = e.target.closest('[data-open]');
      if (open) { e.preventDefault(); openDetail(open.dataset.open); return; }
      const ga = e.target.closest('[data-ga]');
      if (ga) { gaNaar(ga.dataset.ga); return; }
      if (e.target.closest('.p-sluit')) { sluitDetail(); return; }
      const soort = e.target.closest('.d-soort');
      if (soort) {
        const t = soort.dataset.soort;
        if (diagram.verborgen.has(t)) diagram.verborgen.delete(t); else diagram.verborgen.add(t);
        pasSoortenToe();
        zetDiagramFocus();
        return;
      }
      const letter = e.target.closest('.az-letter-knop');
      if (letter) {
        const doel = document.getElementById(`az-${letter.dataset.letter}`);
        if (doel) doel.scrollIntoView({ behavior: minderBeweging ? 'auto' : 'smooth', block: 'start' });
      }
    });
    WEERGAVEN.forEach((v) => $(`#tab-${v}`).addEventListener('click', () => zetWeergave(v)));
    // Diagram: verbanden tonen bij aanwijzen, lijnen opnieuw tekenen als de maten veranderen
    const vlak = $('#diagram-vlak');
    const wijsAan = (e) => {
      const n = e.target.closest('.dnode');
      const id = n ? n.dataset.id : null;
      if (id !== diagram.hover) { diagram.hover = id; zetDiagramFocus(); }
    };
    vlak.addEventListener('mouseover', wijsAan);
    vlak.addEventListener('focusin', wijsAan);
    vlak.addEventListener('mouseleave', () => { diagram.hover = null; zetDiagramFocus(); });
    vlak.addEventListener('focusout', (e) => { if (!vlak.contains(e.relatedTarget)) { diagram.hover = null; zetDiagramFocus(); } });
    let hertekenen = null;
    window.addEventListener('resize', () => { clearTimeout(hertekenen); hertekenen = setTimeout(tekenLijnen, 120); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(tekenLijnen);
    $('.weergave').addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const i = WEERGAVEN.indexOf(staat.weergave) + (e.key === 'ArrowRight' ? 1 : -1);
      const volgende = WEERGAVEN[(i + WEERGAVEN.length) % WEERGAVEN.length];
      zetWeergave(volgende);
      $(`#tab-${volgende}`).focus();
    });
    // Foto die niet laadt (offline, of geblokkeerd): verwijder hem, zodat de initialen zichtbaar blijven.
    document.addEventListener('error', (e) => {
      const t = e.target;
      if (t && t.tagName === 'IMG' && t.parentElement && t.parentElement.classList.contains('avatar')) t.remove();
    }, true);
    $('#zoekveld').addEventListener('input', (e) => { staat.zoek = e.target.value.trim(); pasFilterToe(); });
    $('#sorteer').addEventListener('change', (e) => { staat.sorteer = e.target.value; renderPersonen(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') sluitDetail();
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); $('#zoekveld').focus(); }
    });
  }

  /* ---------- Start ---------- */
  async function start() {
    try {
      const data = await laadData();
      M = bouwModel(data);
    } catch (err) {
      const m = $('#melding');
      m.textContent = err.message;
      m.hidden = false;
      return;
    }
    renderTijdlijn();
    renderLiniaal();
    koppel();
    pasFilterToe();
    volgHuidigJaar();

    const hash = decodeURIComponent(location.hash.slice(1));
    if (WEERGAVEN.includes(hash) && hash !== 'tijdlijn') zetWeergave(hash);
    else if (M.itemMap.has(hash)) openDetail(hash, { focus: false });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
