# Tijdlijn leren en ontwikkelen

Een interactieve visualisatie van de tijdlijn van leren en ontwikkelen: de begrippen, de denkers erachter en de verbanden tussen de begrippen. De gegevens zijn een transcriptie van de tijdlijn uit het boek, zonder portretten.

Gemaakt met gewone HTML, CSS en JavaScript. Er zijn geen build-stap en geen afhankelijkheden nodig.

## Wat je ziet

- **Tijdlijn**: alle begrippen hangen aan één verticale lijn met jaartallen, gegroepeerd per decennium.
  - Begrippen uit hetzelfde jaar hangen samen aan één horizontale lijn naar dat jaartal.
  - **Duo's**, twee denkers bij één begrip, hebben een eigen label.
- **Liniaal**: een balk bovenaan die blijft staan tijdens het scrollen. Hij toont alle begrippen op schaal en laat zien waar je bent. Klik op een stip om naar dat begrip te gaan.
- **Detailpaneel**: klik op een begrip voor:
  - een korte omschrijving en wat het begrip betekent voor leren en ontwikkelen;
  - de denkers met levensjaren, functie en leeftijd in dat jaar;
  - de andere begrippen uit hetzelfde jaar;
  - andere begrippen van dezelfde persoon;
  - een knop naar het vorige en volgende begrip.
- **Portretten**: alle denkers onder elkaar op de tijdlijn, met portretfoto en levensjaren, zonder begrippen. Klik op een portret voor het begrip.
- **Levenslijnen**: de levensloop van elke denker, met een stip op het jaar van het begrip. Je kunt sorteren op jaar van het begrip, geboortejaar of achternaam.
- **Begrippen A–Z**: alle begrippen onder elkaar in alfabetische volgorde, per beginletter, met vertaling, omschrijving en denkers, zonder jaartallen. Met de letterknoppen spring je naar een beginletter.
- **Zoeken**: zoek op begrip, naam, functie of jaar.

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

## Gegevens aanpassen

Alle gegevens staan in `tijdlijn.json`, in drie lijsten:

- **`personen`**: unieke personen met `id`, `naam`, `achternaam`, `geboortejaar`, `overlijdensjaar`, `functie` en `foto`. Onbekende jaren zijn `null`.
- **`items`**: één blok op de tijdlijn met `id`, `jaar`, `begrip`, `begrip_vertaling` en een lijst `personen` met persoon-id's. Een item met twee persoon-id's is een duo. Daarnaast heeft elk item:
  - `omschrijving`: wat het begrip inhoudt;
  - `uitleg`: wat het begrip betekent voor leren en ontwikkelen.

  Beide teksten staan in het detailpaneel.
- **`relaties`**: koppelingen tussen items via `van` en `naar` (item-id's). Alle relaties hebben het type `gedeelde_lijn`: beide items hangen aan dezelfde lijn naar hetzelfde jaartal. `van` en `naar` zijn uitwisselbaar.

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

Zoeken, groeperen, duo's, terugkerende denkers en de volgorde worden allemaal automatisch uit de gegevens afgeleid.

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
- `bron`, `maker` en `licentie` zijn nodig voor de naamsvermelding. Die staat onder de weergave Portretten, bij "Fotoverantwoording".

Voor 29 denkers is geen vrij portret gevonden; daar staat `"foto": null`. Vind je een foto met een vrije licentie, vul dan het veld in en werk ook `data.js` bij.

## Deep links

- `index.html#t-1974-schon-argyris` opent de pagina met het detailpaneel van dat begrip.
- `index.html#portretten` opent de pagina in de weergave Portretten.
- `index.html#personen` opent de pagina in de weergave Levenslijnen.
- `index.html#begrippen` opent de pagina in de weergave Begrippen A–Z.
