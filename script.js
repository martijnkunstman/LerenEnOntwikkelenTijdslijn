/* Tijdlijn leren en ontwikkelen
   Leest tijdlijn.json (personen, items, relaties) en tekent:
   - een verticale tijdlijn met jaarknopen, groepen (keten / gedeelde lijn) en kaarten
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
  const staat = { weergave: 'tijdlijn', zoek: '', filter: 'alle', sorteer: 'begrip', open: null, terugFocus: null };

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
      const types = new Set(g.relaties.map((r) => r.type));
      g.type = g.items.length === 1 ? 'los' : (types.has('gedeelde_lijn') ? 'gedeeld' : 'keten');
      if (g.type === 'keten') g.items = ketenVolgorde(g);
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

    return { meta: data.meta || {}, personen, items, itemMap, relaties, buren, groepen, perPersoon };
  }

  function ketenVolgorde(g) {
    const keten = g.relaties.filter((r) => r.type === 'keten');
    const inkomend = new Set(keten.map((r) => r.naar));
    const volgende = new Map(keten.map((r) => [r.van, r.naar]));
    const start = g.items.find((i) => !inkomend.has(i.id)) || g.items[0];
    const map = new Map(g.items.map((i) => [i.id, i]));
    const uit = [];
    const gezien = new Set();
    let cur = start.id;
    while (cur && !gezien.has(cur) && map.has(cur)) { gezien.add(cur); uit.push(map.get(cur)); cur = volgende.get(cur); }
    g.items.forEach((i) => { if (!gezien.has(i.id)) uit.push(i); });
    return uit;
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

  /* ---------- Kop ---------- */
  function renderCijfers() {
    const jaren = M.items.map((i) => i.jaar);
    const duos = M.items.filter(isDuo).length;
    const cijfers = [
      [M.items.length, 'begrippen'],
      [M.perPersoon.size, 'denkers'],
      [duos, "duo's"],
      [`${Math.min(...jaren)}–${Math.max(...jaren)}`, 'periode'],
    ];
    $('#cijfers').innerHTML = cijfers.map(([w, l]) => `<div><dt>${l}</dt><dd>${w}</dd></div>`).join('');
    if (M.meta.beschrijving) $('#voet').innerHTML = `<p>${esc(M.meta.beschrijving)}</p>`;
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
      const label = g.type === 'keten' ? 'keten' : g.type === 'gedeeld' ? 'gedeelde lijn' : '';
      html += `<section class="jaarblok" data-kant="${kant}" data-jaar="${g.jaar}" aria-label="${g.jaar}">
        <div class="jaarknoop"><span>${g.jaar}</span></div>
        <div class="groep groep-${g.type}">
          ${g.type === 'gedeeld' ? `<span class="groep-label">${label}</span>` : ''}
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
        <div class="leven-naam"><span class="naam">${esc(p.naam)}</span>
          <span class="leven-begrippen">${items.map((i) => `<button type="button" class="begrip-link" data-open="${esc(i.id)}">${esc(i.begrip)}</button>`).join(', ')}</span></div>
        <div class="leven-spoor">${spoor}</div>
      </div>`;
    }).join('');

    $('#levens').innerHTML = `<div class="levens-raster" aria-hidden="true">${raster}</div>${asRij}${rijen}${asRij}`;
    pasFilterToe();
    markeerActief();
  }

  /* ---------- Filteren ---------- */
  function filterOK(it) {
    if (staat.filter === 'duo') return isDuo(it);
    if (staat.filter === 'meer') return it.personen.some((pid) => (M.perPersoon.get(pid) || []).length > 1);
    return true;
  }
  function zoekOK(tekst) {
    if (!staat.zoek) return true;
    return norm(staat.zoek).split(/\s+/).filter(Boolean).every((w) => tekst.includes(w));
  }
  function pasFilterToe() {
    let n = 0;
    M.items.forEach((it) => {
      const ok = filterOK(it) && zoekOK(it.zoektekst);
      if (ok) n++;
      const kaart = document.getElementById(it.id);
      if (kaart) kaart.classList.toggle('is-gedimd', !ok);
      const stip = $(`.stip[data-ga="${CSS.escape(it.id)}"]`);
      if (stip) stip.classList.toggle('is-gedimd', !ok);
    });
    $$('.jaarblok').forEach((b) => b.classList.toggle('is-gedimd', $$('.kaart', b).every((k) => k.classList.contains('is-gedimd'))));

    let np = 0;
    $$('.leven-rij').forEach((r) => {
      const p = M.personen.get(r.dataset.p);
      const items = M.perPersoon.get(p.id);
      const f = staat.filter === 'alle' || (staat.filter === 'duo' ? items.some(isDuo) : items.length > 1);
      const tekst = norm([p.naam, p.functie, p.geboortejaar, p.overlijdensjaar, ...items.map((i) => `${i.jaar} ${i.begrip} ${i.begrip_vertaling}`)].join(' '));
      const ok = f && zoekOK(tekst);
      if (ok) np++;
      r.classList.toggle('is-gedimd', !ok);
    });

    const actief = staat.zoek || staat.filter !== 'alle';
    const totaal = staat.weergave === 'tijdlijn' ? M.items.length : M.perPersoon.size;
    const aantal = staat.weergave === 'tijdlijn' ? n : np;
    const woord = staat.weergave === 'tijdlijn' ? 'begrippen' : 'denkers';
    let tekst = actief ? `${aantal} van ${totaal} ${woord}` : `${totaal} ${woord}`;
    if (actief && aantal === 0) tekst = staat.zoek ? `Niets gevonden voor “${staat.zoek}”` : 'Niets gevonden';
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
        <p class="p-naam">${esc(p.naam)}</p>
        <p class="p-meta">${levensTekst(p)}${leeftijd !== null ? ` · ${leeftijd} jaar in ${it.jaar}` : ''}</p>
        ${p.functie ? `<p class="p-functie">${esc(p.functie)}</p>` : ''}
        ${andere.length ? `<p class="p-ook">Ook op de tijdlijn: ${andere.map(itemLink).join('')}</p>` : ''}
      </div>`;
    }).join('');

    const soorten = new Map();
    M.buren.get(it.id).forEach((b) => {
      let soort;
      if (b.rel.type === 'keten') soort = b.rol === 'van' ? 'Hangt hier direct onder' : 'Hangt direct onder';
      else soort = 'Deelt de lijn met';
      if (!soorten.has(soort)) soorten.set(soort, []);
      soorten.get(soort).push(M.itemMap.get(b.ander));
    });
    const verbanden = [...soorten].map(([soort, lijst]) => `<div class="v-groep"><p class="v-soort">${soort}</p>
      <ul class="v-lijst">${lijst.sort((a, b) => a.volg - b.volg).map((o) => `<li>${itemLink(o)}</li>`).join('')}</ul></div>`).join('');

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
      <section><h3 class="p-sectie">${duo ? 'Denkers' : 'Denker'}</h3><div class="p-personen">${personen}</div></section>
      ${verbanden ? `<section><h3 class="p-sectie">Op dezelfde lijn</h3>${verbanden}</section>` : ''}
      <nav class="p-nav" aria-label="Vorig en volgend begrip">
        ${vorige ? `<button type="button" data-open="${esc(vorige.id)}"><span class="richting">← ${vorige.jaar}</span><span class="doel">${esc(vorige.begrip)}</span></button>` : ''}
        ${volgende ? `<button type="button" class="volgende" data-open="${esc(volgende.id)}"><span class="richting">${volgende.jaar} →</span><span class="doel">${esc(volgende.begrip)}</span></button>` : ''}
      </nav>`;
  }

  function markeerActief() {
    $$('.kaart.is-actief, .kaart.is-verwant').forEach((k) => k.classList.remove('is-actief', 'is-verwant'));
    $$('.leven-rij.is-actief').forEach((r) => r.classList.remove('is-actief'));
    if (!staat.open) return;
    const it = M.itemMap.get(staat.open);
    const kaart = document.getElementById(it.id);
    if (kaart) kaart.classList.add('is-actief');
    const verwant = new Set(M.buren.get(it.id).map((b) => b.ander));
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
  function zetWeergave(w) {
    staat.weergave = w;
    const tijdlijn = w === 'tijdlijn';
    $('#tab-tijdlijn').setAttribute('aria-selected', String(tijdlijn));
    $('#tab-personen').setAttribute('aria-selected', String(!tijdlijn));
    $('#tijdlijn').hidden = !tijdlijn;
    $('#personen').hidden = tijdlijn;
    $('#liniaal-balk').hidden = !tijdlijn;
    $('#legenda').hidden = !tijdlijn;
    if (!tijdlijn && !$('#levens').children.length) renderPersonen();
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
      const chip = e.target.closest('.chip');
      if (chip) {
        staat.filter = chip.dataset.filter;
        $$('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
        pasFilterToe();
      }
    });
    $('#tab-tijdlijn').addEventListener('click', () => zetWeergave('tijdlijn'));
    $('#tab-personen').addEventListener('click', () => zetWeergave('personen'));
    $('.weergave').addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const volgende = staat.weergave === 'tijdlijn' ? 'personen' : 'tijdlijn';
      zetWeergave(volgende);
      $(`#tab-${volgende}`).focus();
    });
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
    renderCijfers();
    renderTijdlijn();
    renderLiniaal();
    koppel();
    pasFilterToe();
    volgHuidigJaar();

    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash === 'personen') zetWeergave('personen');
    else if (M.itemMap.has(hash)) openDetail(hash, { focus: false });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
