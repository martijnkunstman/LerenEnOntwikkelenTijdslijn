# Tijdlijn leren en ontwikkelen

Een interactieve visualisatie van de tijdlijn van leren en ontwikkelen: de begrippen, de personen erachter en de verbanden tussen de begrippen. De gegevens zijn een transcriptie van de tijdlijn uit het boek, zonder portretten. Daarnaast zijn er 22 begrippen en 29 personen toegevoegd die niet in het boek staan. Die zie je alleen als de schakelaar **Extra** aan staat.

Gemaakt met gewone HTML, CSS en JavaScript, zonder build-stap. Alleen de weergave Woordweb gebruikt een bibliotheek: [D3](https://d3js.org). Die staat in de map `lib`, zodat alles ook zonder internet werkt.

## Wat je ziet

- **Tijdlijn**: alle begrippen hangen aan één verticale lijn met jaartallen, gegroepeerd per decennium.
  - Begrippen uit hetzelfde jaar hangen samen aan één horizontale lijn naar dat jaartal.
  - **Duo's**, twee personen bij één begrip, hebben een eigen label. Met Extra aan zijn er ook **trio's**, drie personen bij één begrip.
- **Liniaal**: een balk bovenaan die blijft staan tijdens het scrollen. Hij toont alle begrippen op schaal en laat zien waar je bent. Klik op een stip om naar dat begrip te gaan.
- **Detailpaneel**: klik op een begrip voor:
  - een korte omschrijving en wat het begrip betekent voor leren en ontwikkelen;
  - de personen met levensjaren, functie en leeftijd in dat jaar;
  - de andere begrippen uit hetzelfde jaar;
  - andere begrippen van dezelfde persoon;
  - de inhoudelijke verbanden met andere begrippen, met toelichting;
  - een knop naar het vorige en volgende begrip.
- **Personen**: alle personen onder elkaar op de tijdlijn, met portretfoto en levensjaren, zonder begrippen. Klik op een persoon voor het begrip.
- **Levenslijnen**: de levensloop van elke persoon, met een stip op het jaar van het begrip. Je kunt sorteren op jaar van het begrip, geboortejaar of achternaam.
- **Begrippen A–Z**: alle begrippen onder elkaar in alfabetische volgorde, per beginletter, met vertaling, omschrijving en personen, zonder jaartallen. Met de letterknoppen spring je naar een beginletter.
- **Diagram**: de inhoudelijke verbanden tussen de begrippen, met pijlen, in vijf kolommen per thema. Wijs een begrip aan om zijn verbanden te zien, of klik voor het detailpaneel. Wijs een lijn aan voor de toelichting. Met de knoppen boven het diagram zet je soorten verbanden aan of uit.
- **Woordweb**: de begrippen als woorden in een netwerk dat zichzelf ordent, gemaakt met D3. Hoe groter het woord, hoe meer verbanden. Begrippen uit hetzelfde thema liggen bij elkaar op een eiland. Met de schakelaar "Thema's groeperen" zet je dat uit; dan bepalen alleen de verbanden hoe de begrippen liggen. Wijs een woord aan om de verbanden te zien of klik voor details. Je kunt woorden verslepen, het web verschuiven en zoomen met de knoppen, met Ctrl en het scrollwiel, of met twee vingers.
- **Zoeken**: zoek op begrip, naam, functie of jaar.
- **Extra**: met de schakelaar rechtsboven toon of verberg je de aanvullingen die niet uit het boek komen: 22 begrippen, 29 personen en hun verbanden. De schakelaar staat standaard uit en werkt in alle weergaven. Aanvullingen hebben het label Extra en een gestippelde rand; in de liniaal zijn het open rondjes en in het woordweb schuine woorden. Je keuze wordt in je browser bewaard.
- **Licht en donker**: met de knop rechtsboven wissel je tussen een lichte en een donkere weergave. Je keuze wordt in je browser bewaard; zonder keuze volgt de pagina de instelling van je computer.

De pagina werkt op desktop en mobiel, en in licht en donker thema.

## Openen

**Direct vanaf schijf**: dubbelklik op `index.html`. De gegevens komen dan uit `data.js`.

**Via een lokale webserver**: de gegevens komen dan rechtstreeks uit `tijdlijn.json`. Start de server bijvoorbeeld met een van deze commando's:

```sh
npx serve .
# of
python -m http.server
```

Open daarna het adres dat de server toont, bijvoorbeeld `http://localhost:3000` of `http://localhost:8000`.

## Bestanden

| Bestand | Inhoud |
| --- | --- |
| `index.html` | Opbouw van de pagina |
| `style.css` | Vormgeving, met kleuren voor licht en donker thema |
| `script.js` | Leest de gegevens en tekent de tijdlijn, liniaal, levenslijnen en het detailpaneel |
| `tijdlijn.json` | De gegevens: personen, tijdlijn-items en relaties |
| `data.js` | Kopie van `tijdlijn.json`, zodat de pagina ook werkt zonder webserver |
| `lib/d3.min.js` | De bibliotheek D3 (versie 7.9.0) voor het woordweb, met licentie in `lib/LICENSE-d3.txt` |

## Gegevens aanpassen

Alle gegevens staan in `tijdlijn.json`, in drie lijsten:

- **`personen`**: unieke personen met `id`, `naam`, `achternaam`, `geboortejaar`, `overlijdensjaar`, `functie` en `foto`. Onbekende jaren zijn `null`.
- **`items`**: één blok op de tijdlijn met `id`, `jaar`, `begrip`, `begrip_vertaling` en een lijst `personen` met persoon-id's. Een item met twee persoon-id's is een duo. Daarnaast heeft elk item:
  - `omschrijving`: wat het begrip inhoudt;
  - `uitleg`: wat het begrip betekent voor leren en ontwikkelen.

  Beide teksten staan in het detailpaneel.
- **`relaties`**: koppelingen tussen items via `van` en `naar` (item-id's). Alle relaties hebben het type `gedeelde_lijn`: beide items hangen aan dezelfde lijn naar hetzelfde jaartal. `van` en `naar` zijn uitwisselbaar.

Personen, items en relaties die niet uit het boek komen, hebben het veld `"extra": true`. De pagina toont ze alleen als de schakelaar Extra aan staat. Een relatie met `extra` hoort bij minstens één extra item. Zie ook `meta.aanvullingen`.

Voorbeeld:

```json
{
  "id": "t-1983-schon", "jaar": 1983, "begrip": "Reflective practitioner",
  "begrip_vertaling": "Reflectieve beroepsbeoefenaar", "personen": ["p-schon"],
  "omschrijving": "Een professional die reflecteert tijdens het handelen (reflection-in-action) en achteraf op het handelen (reflection-on-action).",
  "uitleg": "Professionele kennis zit niet alleen in theorie, maar ontstaat in het omgaan met unieke, onzekere praktijksituaties. Opleiden betekent daarom ook leren reflecteren in de praktijk."
}
```

Pas je `tijdlijn.json` aan, zet de wijziging dan ook in `data.js`. Anders ziet de pagina de wijziging niet als je hem direct vanaf schijf opent. `data.js` bevat dezelfde JSON, na `window.TIJDLIJN = `. Via een webserver is dit niet nodig.

Zoeken, groeperen, duo's, trio's, personen die vaker voorkomen en de volgorde worden allemaal automatisch uit de gegevens afgeleid.

## Begripsanalyse

Onderaan `tijdlijn.json` staat het blok `begripsanalyse`. Daarin staan de inhoudelijke verbanden tussen de begrippen, als basis voor een diagram met pijlen. Het is een interpretatie op basis van de literatuur, niet overgenomen uit het boek.

- **`relatietypes`**: de soorten verbanden.
  - `basis_voor`: het ene begrip bouwt voort op het andere. De pijl wijst van de basis naar het begrip dat erop voortbouwt.
  - `voorwaarde_voor`: het ene begrip is nodig om het andere te laten werken.
  - `versterkt`: het ene begrip bevordert het andere.
  - `belemmert`: het ene begrip kan het andere in de weg staan.
  - `sluit_aan_bij`: de begrippen zijn verwant of vullen elkaar aan. Deze relatie werkt twee kanten op.
- **`themas`**: vijf inhoudelijke groepen waarin elk begrip precies één keer voorkomt. Die helpen om een diagram overzichtelijk in te delen.
- **`relaties`**: de verbanden zelf, met `van`, `naar`, `type`, `richting` en een korte `toelichting`. Verbanden met een extra begrip hebben ook `"extra": true`, en de extra begrippen staan ook in de lijsten van de `themas`.

Voorbeeld:

```json
{ "id": "b-01", "type": "basis_voor", "richting": "eenweg", "van": "t-1933-dewey", "naar": "t-1983-schon",
  "toelichting": "Schön bouwde zijn reflectieve professional voort op Deweys idee van reflectief denken." }
```

De weergaven Diagram en Woordweb en het detailpaneel gebruiken dit blok.

## Portretfoto's

De foto's komen van [Wikimedia Commons](https://commons.wikimedia.org) en hebben allemaal een vrije licentie of vallen in het publieke domein. De pagina laadt ze rechtstreeks van Wikimedia, dus je hebt internet nodig om ze te zien. Zonder foto, of zonder verbinding, toont de pagina de initialen.

Het veld `foto` bij een persoon ziet er zo uit:

```json
"foto": {
  "url": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ralph_Stacey.jpg",
  "breedte": 237, "hoogte": 234,
  "focus": [50, 35], "zoom": 1.2,
  "bron": "https://commons.wikimedia.org/wiki/File:Ralph_Stacey.jpg",
  "maker": "Dr. Eric Wenzel",
  "licentie": "CC BY-SA 3.0",
  "licentie_url": "https://creativecommons.org/licenses/by-sa/3.0"
}
```

- `breedte` en `hoogte` zijn de afmetingen van het origineel. De pagina heeft ze nodig om de uitsnede te berekenen.
- `focus` is het midden van het gezicht, in procenten van links en van boven.
- `zoom` bepaalt hoe ver er wordt ingezoomd: 1 betekent dat de korte zijde van de foto precies in de cirkel past.
- `bron`, `maker` en `licentie` zijn nodig voor de naamsvermelding. Die staat onder de weergave Personen, bij "Fotoverantwoording".

Van de 56 personen uit het boek hebben er 27 een foto, van de 29 extra personen 14. Voor de andere personen is geen foto met een vrije licentie gevonden; daar staat `"foto": null`. Vind je een foto met een vrije licentie, vul dan het veld in en werk ook `data.js` bij.

## Deep links

- `index.html#t-1974-schon-argyris` opent de pagina met het detailpaneel van dat begrip. Bij een extra begrip, zoals `index.html#t-1934-vygotsky`, gaat Extra dan vanzelf aan.
- `index.html#portretten` opent de pagina in de weergave Personen.
- `index.html#personen` opent de pagina in de weergave Levenslijnen.
- `index.html#begrippen` opent de pagina in de weergave Begrippen A–Z.
- `index.html#diagram` opent de pagina in de weergave Diagram.
- `index.html#woordweb` opent de pagina in de weergave Woordweb.
