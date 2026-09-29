/* Kopie van tijdlijn.json, zodat index.html ook werkt als je het bestand direct opent (zonder webserver). */
window.TIJDLIJN = {
 "meta": {
  "titel": "Tijdlijn",
  "beschrijving": "Transcriptie van de tijdlijn uit het boek, zonder portretten. Personen, tijdlijn-items en relaties zijn gescheiden en gekoppeld via id's.",
  "versie": "1.1",
  "structuur": {
   "personen": "Unieke personen. Eén persoon kan in meerdere items voorkomen (bijv. p-schon in 1974 en 1983).",
   "items": "Eén item = één portretblok op de tijdlijn: jaartal + begrip + één of meer persoon-id's. Een duo is een item met twee persoon-id's. 'omschrijving' zegt wat het begrip inhoudt, 'uitleg' wat het betekent voor leren en ontwikkelen.",
   "relaties": "Koppelingen tussen items. 'van' en 'naar' verwijzen naar item-id's."
  },
  "relatietypes": {
   "keten": {
    "richting": "eenweg",
    "betekenis": "Het item 'naar' hangt direct onder het item 'van' op dezelfde verbindingslijn."
   },
   "gedeelde_lijn": {
    "richting": "tweeweg",
    "betekenis": "Beide items hangen aan dezelfde verbindingslijn naar hetzelfde jaartal. 'van' en 'naar' zijn uitwisselbaar."
   }
  },
  "afleidbaar": [
   "Duo's: items met meer dan één persoon-id.",
   "Dezelfde persoon op meerdere momenten: items met dezelfde persoon-id."
  ]
 },
 "personen": [
  {
   "id": "p-buber",
   "naam": "Martin Buber",
   "achternaam": "Buber",
   "geboortejaar": 1878,
   "overlijdensjaar": 1965,
   "functie": "Oostenrijks-Israëlisch godsdienstfilosoof"
  },
  {
   "id": "p-lewin",
   "naam": "Kurt Lewin",
   "achternaam": "Lewin",
   "geboortejaar": 1890,
   "overlijdensjaar": 1947,
   "functie": "Duits-Amerikaans sociaal psycholoog"
  },
  {
   "id": "p-dewey",
   "naam": "John Dewey",
   "achternaam": "Dewey",
   "geboortejaar": 1859,
   "overlijdensjaar": 1952,
   "functie": "Amerikaans filosoof en onderwijshervormer"
  },
  {
   "id": "p-huizinga",
   "naam": "Johan Huizinga",
   "achternaam": "Huizinga",
   "geboortejaar": 1872,
   "overlijdensjaar": 1945,
   "functie": "Nederlands cultuurhistoricus"
  },
  {
   "id": "p-erikson",
   "naam": "Erik Erikson",
   "achternaam": "Erikson",
   "geboortejaar": 1902,
   "overlijdensjaar": 1994,
   "functie": "Duits-Amerikaans ontwikkelingspsycholoog en psychoanalyticus"
  },
  {
   "id": "p-bloom",
   "naam": "Benjamin Samuel Bloom",
   "achternaam": "Bloom",
   "geboortejaar": 1913,
   "overlijdensjaar": 1999,
   "functie": "Amerikaans onderwijspsycholoog"
  },
  {
   "id": "p-shulman",
   "naam": "Lee S. Shulman",
   "achternaam": "Shulman",
   "geboortejaar": 1938,
   "overlijdensjaar": 2024,
   "functie": "Amerikaans onderwijspsycholoog (Stanford)"
  },
  {
   "id": "p-polanyi",
   "naam": "Michael Polanyi",
   "achternaam": "Polanyi",
   "geboortejaar": 1891,
   "overlijdensjaar": 1976,
   "functie": "Hongaars-Brits chemicus en wetenschapsfilosoof"
  },
  {
   "id": "p-berne",
   "naam": "Eric Berne",
   "achternaam": "Berne",
   "geboortejaar": 1910,
   "overlijdensjaar": 1970,
   "functie": "Canadees-Amerikaans psychiater, grondlegger transactionele analyse"
  },
  {
   "id": "p-menzies-lyth",
   "naam": "Isabel Menzies Lyth",
   "achternaam": "Menzies Lyth",
   "geboortejaar": 1917,
   "overlijdensjaar": 2008,
   "functie": "Brits psychoanalyticus en organisatieadviseur (Tavistock)"
  },
  {
   "id": "p-berlyne",
   "naam": "Daniel E. Berlyne",
   "achternaam": "Berlyne",
   "geboortejaar": 1924,
   "overlijdensjaar": 1976,
   "functie": "Brits-Canadees experimenteel psycholoog"
  },
  {
   "id": "p-freire",
   "naam": "Paulo Freire",
   "achternaam": "Freire",
   "geboortejaar": 1921,
   "overlijdensjaar": 1997,
   "functie": "Braziliaans pedagoog en filosoof"
  },
  {
   "id": "p-weick",
   "naam": "Karl E. Weick",
   "achternaam": "Weick",
   "geboortejaar": 1936,
   "overlijdensjaar": 2026,
   "functie": "Amerikaans organisatiepsycholoog (University of Michigan)"
  },
  {
   "id": "p-freidson",
   "naam": "Eliot L. Freidson",
   "achternaam": "Freidson",
   "geboortejaar": 1923,
   "overlijdensjaar": 2005,
   "functie": "Amerikaans socioloog van professies (NYU)"
  },
  {
   "id": "p-schon",
   "naam": "Donald Schön",
   "achternaam": "Schön",
   "geboortejaar": 1930,
   "overlijdensjaar": 1997,
   "functie": "Amerikaans filosoof en organisatiekundige (MIT)"
  },
  {
   "id": "p-argyris",
   "naam": "Chris Argyris",
   "achternaam": "Argyris",
   "geboortejaar": 1923,
   "overlijdensjaar": 2013,
   "functie": "Amerikaans organisatiekundige (Harvard)"
  },
  {
   "id": "p-csikszentmihalyi",
   "naam": "Mihaly Csikszentmihalyi",
   "achternaam": "Csikszentmihalyi",
   "geboortejaar": 1934,
   "overlijdensjaar": 2021,
   "functie": "Hongaars-Amerikaans psycholoog"
  },
  {
   "id": "p-bourdieu",
   "naam": "Pierre Bourdieu",
   "achternaam": "Bourdieu",
   "geboortejaar": 1930,
   "overlijdensjaar": 2002,
   "functie": "Frans socioloog"
  },
  {
   "id": "p-mcclelland",
   "naam": "David C. McClelland",
   "achternaam": "McClelland",
   "geboortejaar": 1917,
   "overlijdensjaar": 1998,
   "functie": "Amerikaans psycholoog, motivatieonderzoeker (Harvard)"
  },
  {
   "id": "p-kolb",
   "naam": "David A. Kolb",
   "achternaam": "Kolb",
   "geboortejaar": 1939,
   "overlijdensjaar": null,
   "functie": "Amerikaans onderwijstheoreticus (Case Western Reserve)"
  },
  {
   "id": "p-schein",
   "naam": "Edgar Schein",
   "achternaam": "Schein",
   "geboortejaar": 1928,
   "overlijdensjaar": 2023,
   "functie": "Amerikaans organisatiepsycholoog (MIT)"
  },
  {
   "id": "p-deci",
   "naam": "Edward L. Deci",
   "achternaam": "Deci",
   "geboortejaar": 1942,
   "overlijdensjaar": 2026,
   "functie": "Amerikaans psycholoog (University of Rochester)"
  },
  {
   "id": "p-ryan",
   "naam": "Richard M. Ryan",
   "achternaam": "Ryan",
   "geboortejaar": 1953,
   "overlijdensjaar": null,
   "functie": "Amerikaans psycholoog, motivatieonderzoeker"
  },
  {
   "id": "p-cooperrider",
   "naam": "David Cooperrider",
   "achternaam": "Cooperrider",
   "geboortejaar": 1954,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (Case Western Reserve)"
  },
  {
   "id": "p-engestrom",
   "naam": "Yrjö Engeström",
   "achternaam": "Engeström",
   "geboortejaar": 1948,
   "overlijdensjaar": null,
   "functie": "Fins onderwijskundige (Universiteit van Helsinki)"
  },
  {
   "id": "p-west",
   "naam": "Michael West",
   "achternaam": "West",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Brits organisatiepsycholoog (Lancaster University)"
  },
  {
   "id": "p-gersick",
   "naam": "Connie J.G Gersick",
   "achternaam": "Gersick",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (teams en verandering)"
  },
  {
   "id": "p-checkland",
   "naam": "Peter Checkland",
   "achternaam": "Checkland",
   "geboortejaar": 1930,
   "overlijdensjaar": 2026,
   "functie": "Brits systeemdenker (Lancaster University)"
  },
  {
   "id": "p-g-caine",
   "naam": "Geoffrey Caine",
   "achternaam": "Caine",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Onderwijskundige en auteur over leren en het brein"
  },
  {
   "id": "p-r-caine",
   "naam": "Renate N. Caine",
   "achternaam": "Caine",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Onderwijspsycholoog (California State University)"
  },
  {
   "id": "p-pierce",
   "naam": "Jon L. Pierce",
   "achternaam": "Pierce",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiepsycholoog (University of Minnesota Duluth)"
  },
  {
   "id": "p-lave",
   "naam": "Jean Lave",
   "achternaam": "Lave",
   "geboortejaar": 1939,
   "overlijdensjaar": null,
   "functie": "Amerikaans sociaal antropoloog (UC Berkeley)"
  },
  {
   "id": "p-seligman",
   "naam": "Martin Seligman",
   "achternaam": "Seligman",
   "geboortejaar": 1942,
   "overlijdensjaar": null,
   "functie": "Amerikaans psycholoog, grondlegger positieve psychologie"
  },
  {
   "id": "p-pedler",
   "naam": "Mike Pedler",
   "achternaam": "Pedler",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Brits organisatiekundige (action learning)"
  },
  {
   "id": "p-ericsson",
   "naam": "K. Anders Ericsson",
   "achternaam": "Ericsson",
   "geboortejaar": 1947,
   "overlijdensjaar": 2020,
   "functie": "Zweeds psycholoog, expertiseonderzoeker (Florida State)"
  },
  {
   "id": "p-kessels",
   "naam": "Joseph W.M. Kessels",
   "achternaam": "Kessels",
   "geboortejaar": 1952,
   "overlijdensjaar": null,
   "functie": "Nederlands onderwijskundige, HRD (Universiteit Twente)"
  },
  {
   "id": "p-stacey",
   "naam": "Ralph Stacey",
   "achternaam": "Stacey",
   "geboortejaar": 1942,
   "overlijdensjaar": 2021,
   "functie": "Brits organisatietheoreticus (University of Hertfordshire)"
  },
  {
   "id": "p-wenger",
   "naam": "Etienne Wenger",
   "achternaam": "Wenger",
   "geboortejaar": 1952,
   "overlijdensjaar": null,
   "functie": "Zwitsers onderwijstheoreticus"
  },
  {
   "id": "p-wierdsma",
   "naam": "André Wierdsma",
   "achternaam": "Wierdsma",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Nederlands organisatiekundige (Nyenrode)"
  },
  {
   "id": "p-isaacs",
   "naam": "William Isaacs",
   "achternaam": "Isaacs",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige, dialoogspecialist (MIT)"
  },
  {
   "id": "p-edmondson",
   "naam": "Amy Edmondson",
   "achternaam": "Edmondson",
   "geboortejaar": 1959,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (Harvard Business School)"
  },
  {
   "id": "p-smith",
   "naam": "Wendy Smith",
   "achternaam": "Smith",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (University of Delaware)"
  },
  {
   "id": "p-lewis",
   "naam": "Marianne Lewis",
   "achternaam": "Lewis",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (University of Cincinnati)"
  },
  {
   "id": "p-billett",
   "naam": "Stephen Billett",
   "achternaam": "Billett",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Australisch onderwijskundige, werkplekleren (Griffith University)"
  },
  {
   "id": "p-bereiter",
   "naam": "Carl Bereiter",
   "achternaam": "Bereiter",
   "geboortejaar": 1930,
   "overlijdensjaar": null,
   "functie": "Amerikaans-Canadees onderwijspsycholoog (OISE, Toronto)"
  },
  {
   "id": "p-scardamalia",
   "naam": "Marlene Scardamalia",
   "achternaam": "Scardamalia",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Canadees onderwijspsycholoog (OISE, Toronto)"
  },
  {
   "id": "p-schwartz",
   "naam": "Barry Schwartz",
   "achternaam": "Schwartz",
   "geboortejaar": 1946,
   "overlijdensjaar": null,
   "functie": "Amerikaans psycholoog (Swarthmore College)"
  },
  {
   "id": "p-spillane",
   "naam": "James P. Spillane",
   "achternaam": "Spillane",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Onderwijskundige, schoolleiderschap (Northwestern University)"
  },
  {
   "id": "p-kunneman",
   "naam": "Harry Kunneman",
   "achternaam": "Kunneman",
   "geboortejaar": 1948,
   "overlijdensjaar": null,
   "functie": "Nederlands filosoof (Universiteit voor Humanistiek)"
  },
  {
   "id": "p-dweck",
   "naam": "Carol Dweck",
   "achternaam": "Dweck",
   "geboortejaar": 1946,
   "overlijdensjaar": null,
   "functie": "Amerikaans psycholoog (Stanford)"
  },
  {
   "id": "p-shaffer",
   "naam": "David W. Shaffer",
   "achternaam": "Shaffer",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans leerwetenschapper (University of Wisconsin–Madison)"
  },
  {
   "id": "p-scharmer",
   "naam": "Otto Scharmer",
   "achternaam": "Scharmer",
   "geboortejaar": 1961,
   "overlijdensjaar": null,
   "functie": "Duits organisatiekundige (MIT)"
  },
  {
   "id": "p-hattie",
   "naam": "John Hattie",
   "achternaam": "Hattie",
   "geboortejaar": 1950,
   "overlijdensjaar": null,
   "functie": "Nieuw-Zeelands onderwijskundige (University of Melbourne)"
  },
  {
   "id": "p-brown",
   "naam": "Brené Brown",
   "achternaam": "Brown",
   "geboortejaar": 1965,
   "overlijdensjaar": null,
   "functie": "Amerikaans onderzoeker sociaal werk (University of Houston)"
  },
  {
   "id": "p-sennett",
   "naam": "Richard Sennett",
   "achternaam": "Sennett",
   "geboortejaar": 1943,
   "overlijdensjaar": null,
   "functie": "Amerikaans socioloog (LSE)"
  },
  {
   "id": "p-kahneman",
   "naam": "Daniel Kahneman",
   "achternaam": "Kahneman",
   "geboortejaar": 1934,
   "overlijdensjaar": 2024,
   "functie": "Israëlisch-Amerikaans psycholoog, Nobelprijs economie"
  }
 ],
 "items": [
  {
   "id": "t-1923-buber",
   "jaar": 1923,
   "begrip": "Ontmoeting",
   "begrip_vertaling": "Encounter",
   "personen": [
    "p-buber"
   ],
   "omschrijving": "Een echte relatie tussen twee mensen (Ik–Jij), waarin je de ander als volledig persoon tegemoet treedt en niet als object of middel (Ik–Het).",
   "uitleg": "Leren en begeleiden gebeuren in relatie. Wie de lerende werkelijk ontmoet, schept ruimte voor vertrouwen, dialoog en groei."
  },
  {
   "id": "t-1933-lewin",
   "jaar": 1933,
   "begrip": "Actieonderzoek",
   "begrip_vertaling": "Action research",
   "personen": [
    "p-lewin"
   ],
   "omschrijving": "Onderzoek waarin je een praktijk verandert en die verandering tegelijk bestudeert, in cycli van plannen, handelen, observeren en reflecteren.",
   "uitleg": "Professionals en teams leren van hun eigen praktijk door systematisch te experimenteren. Verbeteren en kennis opbouwen gaan zo hand in hand."
  },
  {
   "id": "t-1933-dewey",
   "jaar": 1933,
   "begrip": "Reflectie",
   "begrip_vertaling": "Reflection",
   "personen": [
    "p-dewey"
   ],
   "omschrijving": "Actief en zorgvuldig nadenken over ervaringen, overtuigingen en aannames, vooral wanneer iets onzeker of problematisch is.",
   "uitleg": "Ervaring alleen leert niet: pas door erop te reflecteren wordt ervaring een bron van leren. Dewey legde daarmee de basis voor ervaringsgericht leren."
  },
  {
   "id": "t-1938-huizinga",
   "jaar": 1938,
   "begrip": "Spel",
   "begrip_vertaling": "Play",
   "personen": [
    "p-huizinga"
   ],
   "omschrijving": "Vrijwillige activiteit binnen eigen regels, tijd en ruimte, los van het gewone leven. Huizinga zag spel als bron van cultuur (Homo ludens).",
   "uitleg": "Spel biedt een veilige ruimte om te experimenteren, rollen uit te proberen en fouten te maken. Daarom is het een krachtige vorm van leren, ook voor volwassenen."
  },
  {
   "id": "t-1950-erikson",
   "jaar": 1950,
   "begrip": "Levenscyclus",
   "begrip_vertaling": "Life cycle",
   "personen": [
    "p-erikson"
   ],
   "omschrijving": "Ontwikkeling verloopt in acht levensfasen, elk met een eigen psychosociale spanning, zoals vertrouwen tegenover wantrouwen of generativiteit tegenover stagnatie.",
   "uitleg": "Ontwikkeling stopt niet na de jeugd. Wat mensen willen en kunnen leren hangt samen met hun levensfase, zoals de behoefte om in het middenleven kennis door te geven."
  },
  {
   "id": "t-1956-bloom-shulman",
   "jaar": 1956,
   "begrip": "Taxonomie",
   "begrip_vertaling": "Taxonomy",
   "personen": [
    "p-bloom",
    "p-shulman"
   ],
   "omschrijving": "Een ordening van leerdoelen van eenvoudig naar complex: van kennis en begrip via toepassing en analyse naar synthese en evaluatie. Shulman ontwierp later een eigen 'table of learning', van betrokkenheid tot toewijding.",
   "uitleg": "Een taxonomie helpt leerdoelen, opdrachten en toetsing op elkaar af te stemmen en maakt zichtbaar welk denkniveau je van lerenden vraagt."
  },
  {
   "id": "t-1958-polanyi",
   "jaar": 1958,
   "begrip": "Tacit knowledge",
   "begrip_vertaling": "Stilzwijgende kennis",
   "personen": [
    "p-polanyi"
   ],
   "omschrijving": "Kennis die je wel hebt maar moeilijk onder woorden kunt brengen: 'we weten meer dan we kunnen zeggen'.",
   "uitleg": "Veel vakmanschap is stilzwijgend. Het wordt vooral overgedragen door meedoen, voordoen en samenwerken, niet via handboeken of cursussen."
  },
  {
   "id": "t-1958-berne",
   "jaar": 1958,
   "begrip": "Transactionele analyse",
   "begrip_vertaling": "Transactional analysis",
   "personen": [
    "p-berne"
   ],
   "omschrijving": "Een model van communicatie waarin mensen handelen vanuit drie ego-toestanden: Ouder, Volwassene en Kind.",
   "uitleg": "Het helpt begeleiders en teams om patronen in interacties te herkennen, zoals terugkerende 'spelletjes', en bewuster en gelijkwaardiger te communiceren."
  },
  {
   "id": "t-1960-menzies-lyth",
   "jaar": 1960,
   "begrip": "Social defences",
   "begrip_vertaling": "Sociale afweermechanismen",
   "personen": [
    "p-menzies-lyth"
   ],
   "omschrijving": "Routines en structuren in organisaties die medewerkers onbewust beschermen tegen angst en spanning in het werk. Menzies Lyth onderzocht dit bij verpleegkundigen.",
   "uitleg": "Zulke afweer maakt werk draaglijk, maar kan leren en verandering blokkeren. Wie wil veranderen, moet ook aandacht hebben voor de emoties die bestaande werkwijzen afdekken."
  },
  {
   "id": "t-1960-berlyne",
   "jaar": 1960,
   "begrip": "Nieuwsgierigheid",
   "begrip_vertaling": "Curiosity",
   "personen": [
    "p-berlyne"
   ],
   "omschrijving": "De drang om te verkennen en te weten, opgewekt door nieuwheid, complexiteit, onzekerheid en verrassing.",
   "uitleg": "Nieuwsgierigheid is een motor van leren van binnenuit. Een passende mate van nieuwheid en uitdaging, niet te weinig en niet te veel, zet mensen aan tot onderzoeken."
  },
  {
   "id": "t-1967-freire",
   "jaar": 1967,
   "begrip": "Kritische reflectie",
   "begrip_vertaling": "Critical reflection",
   "personen": [
    "p-freire"
   ],
   "omschrijving": "Samen nadenken over je eigen situatie en de machtsverhoudingen die haar vormen, met als doel die situatie te veranderen (bewustwording, conscientização).",
   "uitleg": "Freire zette 'bankonderwijs', waarin kennis in lerenden wordt gestort, af tegen dialogisch leren. Lerenden zijn geen lege vaten, maar medeonderzoekers van hun eigen werkelijkheid."
  },
  {
   "id": "t-1969-weick",
   "jaar": 1969,
   "begrip": "Losjes gekoppelde systemen",
   "begrip_vertaling": "Loosely coupled systems",
   "personen": [
    "p-weick"
   ],
   "omschrijving": "Organisaties waarin onderdelen met elkaar verbonden zijn, maar elk een eigen identiteit en bewegingsvrijheid houden, zoals klassen binnen een school.",
   "uitleg": "Losse koppeling geeft ruimte voor lokale aanpassing en experiment, maar maakt het lastig om vernieuwing in de hele organisatie te laten doorwerken."
  },
  {
   "id": "t-1970-freidson",
   "jaar": 1970,
   "begrip": "Professionaliteit",
   "begrip_vertaling": "Professionalism",
   "personen": [
    "p-freidson"
   ],
   "omschrijving": "Een manier om werk te organiseren waarin beroepsbeoefenaren zelf, op basis van specialistische kennis en beroepsethiek, de kwaliteit van hun werk bepalen. Freidson noemde dit een derde logica, naast markt en bureaucratie.",
   "uitleg": "Professionals houden hun deskundigheid zelf op peil. Leren en ontwikkelen horen daarmee bij de verantwoordelijkheid van de beroepsgroep, niet alleen bij het management."
  },
  {
   "id": "t-1974-schon-argyris",
   "jaar": 1974,
   "begrip": "Double-loop learning",
   "begrip_vertaling": "Dubbelslagleren",
   "personen": [
    "p-schon",
    "p-argyris"
   ],
   "omschrijving": "Bij single-loop leren pas je je handelen aan binnen bestaande doelen en normen. Bij double-loop leren stel je die onderliggende doelen, normen en aannames zelf ter discussie.",
   "uitleg": "Echte verandering in organisaties vraagt dat mensen hun eigen vanzelfsprekendheden onderzoeken, ook als dat ongemakkelijk is."
  },
  {
   "id": "t-1975-csikszentmihalyi",
   "jaar": 1975,
   "begrip": "Flow",
   "begrip_vertaling": "Flow",
   "personen": [
    "p-csikszentmihalyi"
   ],
   "omschrijving": "Een toestand waarin je volledig opgaat in een activiteit en de tijd vergeet, doordat uitdaging en vaardigheid in balans zijn.",
   "uitleg": "Leren is het meest bevredigend en effectief als een taak net boven je huidige niveau ligt. Te makkelijk leidt tot verveling, te moeilijk tot angst."
  },
  {
   "id": "t-1977-bourdieu",
   "jaar": 1977,
   "begrip": "Habitus",
   "begrip_vertaling": "Habitus",
   "personen": [
    "p-bourdieu"
   ],
   "omschrijving": "Het geheel van diep ingesleten gewoonten, smaak en manieren van denken en doen, gevormd door je sociale achtergrond.",
   "uitleg": "Lerenden brengen hun habitus mee. Wie dat niet ziet, bevoordeelt onbedoeld mensen van wie de achtergrond aansluit bij de cultuur van de school of organisatie."
  },
  {
   "id": "t-1978-mcclelland",
   "jaar": 1978,
   "begrip": "Prestatiemotivatie",
   "begrip_vertaling": "Achievement motivation",
   "personen": [
    "p-mcclelland"
   ],
   "omschrijving": "De behoefte om dingen goed te doen en uitdagende doelen te bereiken. McClelland onderscheidde die naast de behoefte aan macht en de behoefte aan verbondenheid.",
   "uitleg": "Mensen met een sterke prestatiebehoefte zoeken haalbare uitdagingen en directe feedback. Leertaken en ontwikkelpaden kun je daarop afstemmen."
  },
  {
   "id": "t-1983-schon",
   "jaar": 1983,
   "begrip": "Reflective practitioner",
   "begrip_vertaling": "Reflectieve beroepsbeoefenaar",
   "personen": [
    "p-schon"
   ],
   "omschrijving": "Een professional die reflecteert tijdens het handelen (reflection-in-action) en achteraf op het handelen (reflection-on-action).",
   "uitleg": "Professionele kennis zit niet alleen in theorie, maar ontstaat in het omgaan met unieke, onzekere praktijksituaties. Opleiden betekent daarom ook leren reflecteren in de praktijk."
  },
  {
   "id": "t-1984-kolb",
   "jaar": 1984,
   "begrip": "Leerstijlen",
   "begrip_vertaling": "Learning styles",
   "personen": [
    "p-kolb"
   ],
   "omschrijving": "Leren verloopt in een cyclus van concreet ervaren, reflectief observeren, abstract begrijpen en actief experimenteren. Mensen hebben een voorkeur voor bepaalde fasen: hun leerstijl.",
   "uitleg": "De leercyclus wordt veel gebruikt om leerprocessen te ontwerpen. Het idee dat je onderwijs moet aanpassen aan iemands vaste leerstijl, wordt door onderzoek echter niet ondersteund."
  },
  {
   "id": "t-1985-schein",
   "jaar": 1985,
   "begrip": "Cultuur",
   "begrip_vertaling": "Culture",
   "personen": [
    "p-schein"
   ],
   "omschrijving": "Organisatiecultuur heeft drie lagen: zichtbare uitingen, uitgesproken waarden en diepe, vaak onbewuste basisaannames.",
   "uitleg": "Leren en veranderen in organisaties lukt pas duurzaam als ook de basisaannames in beeld komen. Leiders spelen een sleutelrol in het vormen van cultuur."
  },
  {
   "id": "t-1985-deci-ryan",
   "jaar": 1985,
   "begrip": "Self-Determination Theory",
   "begrip_vertaling": "Zelfdeterminatietheorie",
   "personen": [
    "p-deci",
    "p-ryan"
   ],
   "omschrijving": "Mensen hebben drie psychologische basisbehoeften: autonomie, competentie en verbondenheid. Als die vervuld worden, ontstaat motivatie van binnenuit.",
   "uitleg": "Een leeromgeving die keuzeruimte biedt, succeservaringen mogelijk maakt en verbinding stimuleert, leidt tot diepere en duurzamere motivatie dan belonen en straffen."
  },
  {
   "id": "t-1986-cooperrider",
   "jaar": 1986,
   "begrip": "Appreciative Inquiry",
   "begrip_vertaling": "Waarderend onderzoeken",
   "personen": [
    "p-cooperrider"
   ],
   "omschrijving": "Een veranderaanpak die vertrekt vanuit wat al goed werkt, in vier fasen: ontdekken, dromen, ontwerpen en realiseren.",
   "uitleg": "Door te onderzoeken wat energie geeft in plaats van problemen te analyseren, bouwen teams en organisaties aan gedeelde ambities en ontwikkeling."
  },
  {
   "id": "t-1987-engestrom",
   "jaar": 1987,
   "begrip": "Boundary crossing",
   "begrip_vertaling": "Grensoverschrijding",
   "personen": [
    "p-engestrom"
   ],
   "omschrijving": "Leren dat ontstaat wanneer mensen de grenzen tussen verschillende praktijken, disciplines of organisaties overschrijden.",
   "uitleg": "Grenzen, bijvoorbeeld tussen school en werkplek, zijn niet alleen obstakels maar ook leerkansen. Waar perspectieven botsen, ontstaan nieuwe inzichten en werkwijzen."
  },
  {
   "id": "t-1988-west-gersick",
   "jaar": 1988,
   "begrip": "Teamleren en teamreflexiviteit",
   "begrip_vertaling": "Team learning and team reflexivity",
   "personen": [
    "p-west",
    "p-gersick"
   ],
   "omschrijving": "Teamreflexiviteit is de mate waarin een team samen stilstaat bij zijn doelen, strategieën en werkwijze en die bijstelt. Gersick liet zien dat teams niet geleidelijk ontwikkelen, maar rond het midden van hun looptijd een omslag maken.",
   "uitleg": "Teams die regelmatig reflecteren op hoe ze werken, presteren en vernieuwen beter. Omslagmomenten zijn kansen om het samen anders te doen."
  },
  {
   "id": "t-1990-checkland",
   "jaar": 1990,
   "begrip": "Soft Systems Methodology",
   "begrip_vertaling": "Zachte-systemenmethodologie",
   "personen": [
    "p-checkland"
   ],
   "omschrijving": "Een methode om complexe, rommelige probleemsituaties te verkennen door de verschillende wereldbeelden van betrokkenen in kaart te brengen en met hen in gesprek te gaan.",
   "uitleg": "In plaats van één juiste oplossing te zoeken, leren betrokkenen van elkaars perspectief. Zo komen ze tot verbeteringen die voor iedereen wenselijk en haalbaar zijn."
  },
  {
   "id": "t-1990-caine",
   "jaar": 1990,
   "begrip": "Brain-based learning",
   "begrip_vertaling": "Breingebaseerd leren",
   "personen": [
    "p-g-caine",
    "p-r-caine"
   ],
   "omschrijving": "Onderwijs ontwerpen op basis van inzichten over hoe het brein leert, zoals het belang van betekenis, emotie, samenhang en een uitdagende maar niet bedreigende omgeving.",
   "uitleg": "Leren gaat het best in een rijke, betekenisvolle context met ontspannen alertheid. Kanttekening: veel populaire 'breinclaims' zijn wetenschappelijk zwak onderbouwd."
  },
  {
   "id": "t-1991-pierce",
   "jaar": 1991,
   "begrip": "Psychologisch eigenaarschap",
   "begrip_vertaling": "Psychological ownership",
   "personen": [
    "p-pierce"
   ],
   "omschrijving": "Het gevoel dat iets 'van mij' is, zoals een taak, project of organisatie, ook zonder formeel bezit.",
   "uitleg": "Dat gevoel groeit door invloed, grondige kennis en eigen investering. Wie zich eigenaar voelt van zijn werk of leren, neemt meer verantwoordelijkheid en zet zich meer in."
  },
  {
   "id": "t-1991-lave",
   "jaar": 1991,
   "begrip": "Informeel leren",
   "begrip_vertaling": "Informal learning",
   "personen": [
    "p-lave"
   ],
   "omschrijving": "Leren buiten formele opleidingen, in het dagelijks werk en de omgang met anderen. Lave beschreef het als gesitueerd leren: nieuwkomers groeien via deelname aan de rand geleidelijk in een praktijk.",
   "uitleg": "Het meeste leren op het werk is informeel. Het loont om deelname, samenwerking en toegang tot ervaren collega's bewust te organiseren."
  },
  {
   "id": "t-1991-seligman",
   "jaar": 1991,
   "begrip": "Aangeleerd optimisme",
   "begrip_vertaling": "Learned optimism",
   "personen": [
    "p-seligman"
   ],
   "omschrijving": "Optimisme als aan te leren denkstijl: tegenslag zien als tijdelijk, specifiek en beïnvloedbaar, in plaats van blijvend, allesomvattend en persoonlijk.",
   "uitleg": "Hoe je tegenslag verklaart, bepaalt of je volhoudt of opgeeft. Door die verklaringsstijl te trainen, vergroten mensen hun veerkracht en leervermogen."
  },
  {
   "id": "t-1991-pedler",
   "jaar": 1991,
   "begrip": "Lerende organisatie",
   "begrip_vertaling": "Learning organization",
   "personen": [
    "p-pedler"
   ],
   "omschrijving": "Een organisatie die het leren van al haar leden mogelijk maakt en zichzelf daardoor voortdurend vernieuwt.",
   "uitleg": "Leren is dan geen losse opleidingsactiviteit, maar verweven met strategie, structuur en dagelijks werk, zodat de organisatie zich blijvend kan aanpassen."
  },
  {
   "id": "t-1996-ericsson",
   "jaar": 1996,
   "begrip": "Deliberate practice",
   "begrip_vertaling": "Doelbewust oefenen",
   "personen": [
    "p-ericsson"
   ],
   "omschrijving": "Doelgericht oefenen op specifieke onderdelen net boven je huidige niveau, met directe feedback en volle concentratie.",
   "uitleg": "Expertise ontstaat niet vanzelf door ervaring of talent, maar door langdurig en gestructureerd oefenen. Coaching en feedback zijn daarbij essentieel."
  },
  {
   "id": "t-1996-kessels",
   "jaar": 1996,
   "begrip": "Corporate curriculum",
   "begrip_vertaling": "Bedrijfscurriculum",
   "personen": [
    "p-kessels"
   ],
   "omschrijving": "Het geheel van leeractiviteiten en leeromgevingen waarmee een organisatie de kennisproductiviteit van medewerkers bevordert.",
   "uitleg": "In een kenniseconomie draait het om het vermogen om kennis te ontwikkelen en toe te passen. Dat vraagt een werkomgeving die leren uitlokt, niet alleen een opleidingsaanbod."
  },
  {
   "id": "t-1997-stacey",
   "jaar": 1997,
   "begrip": "Complexe systemen",
   "begrip_vertaling": "Complex systems",
   "personen": [
    "p-stacey"
   ],
   "omschrijving": "Organisaties als voortdurend veranderende patronen van interactie tussen mensen. Uitkomsten zijn niet te plannen of te beheersen, maar ontstaan onderweg.",
   "uitleg": "Verandering en leren gebeuren in alledaagse gesprekken en relaties, niet in blauwdrukken. Leiders kunnen richting geven, maar niet sturen alsof de organisatie een machine is."
  },
  {
   "id": "t-1998-wenger",
   "jaar": 1998,
   "begrip": "Community of Practice",
   "begrip_vertaling": "Praktijkgemeenschap",
   "personen": [
    "p-wenger"
   ],
   "omschrijving": "Een groep mensen met een gedeelde passie of vraagstuk die door regelmatig contact samen leren en hun praktijk verdiepen.",
   "uitleg": "Leren is sociaal en verbonden met identiteit en erbij horen. Organisaties kunnen zulke gemeenschappen stimuleren en faciliteren, maar niet afdwingen."
  },
  {
   "id": "t-1999-wierdsma",
   "jaar": 1999,
   "begrip": "Plek der moeite",
   "begrip_vertaling": "Place of difficulty",
   "personen": [
    "p-wierdsma"
   ],
   "omschrijving": "De plek waar het in samenwerking schuurt: waar verschillende belangen en perspectieven samenkomen en het lastige gesprek gevoerd moet worden.",
   "uitleg": "Juist daar ligt de leerkans. Wie de moeite niet ontwijkt maar samen onderzoekt, komt tot gedeelde betekenis en werkelijke verandering (co-creatie)."
  },
  {
   "id": "t-1999-isaacs",
   "jaar": 1999,
   "begrip": "Dialoog",
   "begrip_vertaling": "Dialogue",
   "personen": [
    "p-isaacs"
   ],
   "omschrijving": "Samen denken: een gesprek waarin deelnemers echt luisteren, elkaar respecteren, hun oordeel opschorten en uitspreken wat ze denken, om samen betekenis te vormen.",
   "uitleg": "Anders dan in een discussie, waarin je wint of verliest, maakt dialoog gezamenlijk leren mogelijk en brengt het onderliggende aannames aan het licht."
  },
  {
   "id": "t-1999-edmondson",
   "jaar": 1999,
   "begrip": "Psychological safety",
   "begrip_vertaling": "Psychologische veiligheid",
   "personen": [
    "p-edmondson"
   ],
   "omschrijving": "Het gedeelde gevoel in een team dat je risico's kunt nemen, zoals vragen stellen, fouten melden of kritiek uiten, zonder te worden afgestraft of belachelijk gemaakt.",
   "uitleg": "Het is een voorwaarde voor teamleren. Zonder psychologische veiligheid blijven fouten en ideeën verborgen en leert het team niet."
  },
  {
   "id": "t-2000-smith-lewis",
   "jaar": 2000,
   "begrip": "Paradoxen",
   "begrip_vertaling": "Paradoxes",
   "personen": [
    "p-smith",
    "p-lewis"
   ],
   "omschrijving": "Tegenstrijdige maar onderling verbonden eisen die tegelijk bestaan en blijven bestaan, zoals stabiliteit en verandering of benutten en verkennen.",
   "uitleg": "In plaats van te kiezen, leren organisaties en leiders beide kanten te omarmen en de spanning productief te maken. Dat vraagt het vermogen om met dubbelzinnigheid om te gaan."
  },
  {
   "id": "t-2001-billett",
   "jaar": 2001,
   "begrip": "Werkleren",
   "begrip_vertaling": "Workplace learning",
   "personen": [
    "p-billett"
   ],
   "omschrijving": "Leren tijdens en door het werk, bepaald door de wisselwerking tussen de kansen die de werkplek biedt en hoe medewerkers die benutten.",
   "uitleg": "De werkplek is een volwaardige leeromgeving, maar de kwaliteit hangt af van begeleiding, toegang tot uitdagende taken en de eigen keuzes van de lerende."
  },
  {
   "id": "t-2002-bereiter-scardamalia",
   "jaar": 2002,
   "begrip": "Kenniscreatie",
   "begrip_vertaling": "Knowledge creation",
   "personen": [
    "p-bereiter",
    "p-scardamalia"
   ],
   "omschrijving": "Het doelbewust en gezamenlijk ontwikkelen en verbeteren van ideeën, zoals wetenschappers dat doen (knowledge building).",
   "uitleg": "Lerenden zijn geen consumenten van kennis maar makers ervan. Scholen en organisaties kunnen gemeenschappen worden die samen nieuwe kennis opbouwen."
  },
  {
   "id": "t-2004-schwartz",
   "jaar": 2004,
   "begrip": "Practical wisdom",
   "begrip_vertaling": "Praktische wijsheid",
   "personen": [
    "p-schwartz"
   ],
   "omschrijving": "Het vermogen om in een concrete situatie het juiste te doen, op de juiste manier en om de juiste redenen. Het bouwt voort op Aristoteles' phronesis.",
   "uitleg": "Regels en prikkels schieten tekort in complexe praktijken. Professionals ontwikkelen praktische wijsheid door ervaring, reflectie en goede voorbeelden, en hebben daarvoor ruimte voor eigen oordeel nodig."
  },
  {
   "id": "t-2004-spillane",
   "jaar": 2004,
   "begrip": "Gespreid leiderschap",
   "begrip_vertaling": "Distributed leadership",
   "personen": [
    "p-spillane"
   ],
   "omschrijving": "Leiderschap is geen eigenschap van één persoon, maar ontstaat in de wisselwerking tussen leiders, medewerkers en hun situatie.",
   "uitleg": "In scholen en organisaties dragen velen bij aan leiderschap. Dat vergroot het eigenaarschap en het vermogen om samen te leren en te verbeteren."
  },
  {
   "id": "t-2005-kunneman",
   "jaar": 2005,
   "begrip": "Normatieve professionaliteit",
   "begrip_vertaling": "Normative professionalism",
   "personen": [
    "p-kunneman"
   ],
   "omschrijving": "Professionaliteit waarin naast kennis en vaardigheden ook de morele en existentiële vragen van het werk meetellen: wat is hier goed om te doen?",
   "uitleg": "Tegenover sturing op meetbare resultaten staat het gesprek over waarden en betekenis. Leren omvat dan ook samen nadenken over wat goed werk is."
  },
  {
   "id": "t-2006-dweck",
   "jaar": 2006,
   "begrip": "Mindset",
   "begrip_vertaling": "Mindset",
   "personen": [
    "p-dweck"
   ],
   "omschrijving": "Met een groeimindset zie je bekwaamheid als ontwikkelbaar; met een vaste mindset zie je haar als aangeboren en onveranderlijk.",
   "uitleg": "Een groeimindset maakt dat mensen uitdagingen aangaan en van fouten leren. Feedback op inzet en aanpak, in plaats van op talent, helpt die houding te versterken."
  },
  {
   "id": "t-2006-shaffer",
   "jaar": 2006,
   "begrip": "Professionele frames",
   "begrip_vertaling": "Professional frames",
   "personen": [
    "p-shaffer"
   ],
   "omschrijving": "De manier waarop een beroepsgroep kijkt, denkt en handelt: een samenhang van vaardigheden, kennis, identiteit, waarden en manieren van oordelen.",
   "uitleg": "Professioneel leren is ingroeien in zo'n frame. Simulaties en realistische rollen, bijvoorbeeld in games, helpen lerenden te denken als een professional."
  },
  {
   "id": "t-2007-scharmer",
   "jaar": 2007,
   "begrip": "Theory U",
   "begrip_vertaling": "Theorie U",
   "personen": [
    "p-scharmer"
   ],
   "omschrijving": "Een veranderproces in de vorm van een U: oude patronen loslaten, in het dal stilstaan bij wat wil ontstaan (presencing) en daarna het nieuwe vormgeven.",
   "uitleg": "Diepgaande vernieuwing vraagt meer dan analyseren. Met een open blik, open hart en open wil leer je van de toekomst die zich aandient in plaats van alleen van het verleden."
  },
  {
   "id": "t-2007-hattie",
   "jaar": 2007,
   "begrip": "Feedback",
   "begrip_vertaling": "Feedback",
   "personen": [
    "p-hattie"
   ],
   "omschrijving": "Informatie die de kloof tussen de huidige en de gewenste prestatie helpt dichten, via drie vragen: waar ga ik heen, hoe gaat het, en wat is de volgende stap?",
   "uitleg": "Feedback hoort bij de sterkste invloeden op leren, maar alleen als ze gaat over de taak, de aanpak of de zelfsturing, en niet over de persoon."
  },
  {
   "id": "t-2008-brown",
   "jaar": 2008,
   "begrip": "Kwetsbaarheid",
   "begrip_vertaling": "Vulnerability",
   "personen": [
    "p-brown"
   ],
   "omschrijving": "De bereidheid om je te laten zien in onzekerheid, risico en emotionele blootstelling.",
   "uitleg": "Kwetsbaarheid is de bron van moed, creativiteit en verbinding. Wie zich niet kwetsbaar durft op te stellen, vermijdt fouten en feedback en leert daardoor minder."
  },
  {
   "id": "t-2008-sennett",
   "jaar": 2008,
   "begrip": "Vakmanschap",
   "begrip_vertaling": "Craftsmanship",
   "personen": [
    "p-sennett"
   ],
   "omschrijving": "De drijfveer om werk goed te doen omwille van het werk zelf, ontwikkeld door langdurige oefening en een samenspel van hand en hoofd.",
   "uitleg": "Vakmanschap groeit door herhaling, door het omgaan met weerstand en door overdracht van meester op gezel. Het vraagt tijd en ruimte voor kwaliteit."
  },
  {
   "id": "t-2011-kahneman",
   "jaar": 2011,
   "begrip": "Denkfouten",
   "begrip_vertaling": "Cognitive biases",
   "personen": [
    "p-kahneman"
   ],
   "omschrijving": "Systematische vertekeningen in ons oordeel, doordat we vaak vertrouwen op snel, intuïtief denken (Systeem 1) in plaats van traag, beredeneerd denken (Systeem 2).",
   "uitleg": "Ook ervaren professionals maken denkfouten. Bewustzijn ervan, feedback en gestructureerde reflectie helpen om betere beslissingen te nemen en scherper te leren van ervaring."
  }
 ],
 "relaties": [
  {
   "id": "r-01",
   "type": "keten",
   "richting": "eenweg",
   "van": "t-1933-lewin",
   "naar": "t-1933-dewey"
  },
  {
   "id": "r-02",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1958-polanyi",
   "naar": "t-1958-berne"
  },
  {
   "id": "r-03",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1960-menzies-lyth",
   "naar": "t-1960-berlyne"
  },
  {
   "id": "r-04",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1985-schein",
   "naar": "t-1985-deci-ryan"
  },
  {
   "id": "r-05",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1990-checkland",
   "naar": "t-1990-caine"
  },
  {
   "id": "r-06",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1991-pierce",
   "naar": "t-1991-lave"
  },
  {
   "id": "r-07",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1991-pierce",
   "naar": "t-1991-seligman"
  },
  {
   "id": "r-08",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1991-pierce",
   "naar": "t-1991-pedler"
  },
  {
   "id": "r-09",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1991-lave",
   "naar": "t-1991-seligman"
  },
  {
   "id": "r-10",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1991-lave",
   "naar": "t-1991-pedler"
  },
  {
   "id": "r-11",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1991-seligman",
   "naar": "t-1991-pedler"
  },
  {
   "id": "r-12",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1996-ericsson",
   "naar": "t-1996-kessels"
  },
  {
   "id": "r-13",
   "type": "keten",
   "richting": "eenweg",
   "van": "t-1999-wierdsma",
   "naar": "t-1999-isaacs"
  },
  {
   "id": "r-14",
   "type": "keten",
   "richting": "eenweg",
   "van": "t-1999-isaacs",
   "naar": "t-1999-edmondson"
  },
  {
   "id": "r-15",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2004-schwartz",
   "naar": "t-2004-spillane"
  },
  {
   "id": "r-16",
   "type": "keten",
   "richting": "eenweg",
   "van": "t-2006-dweck",
   "naar": "t-2006-shaffer"
  },
  {
   "id": "r-17",
   "type": "keten",
   "richting": "eenweg",
   "van": "t-2007-scharmer",
   "naar": "t-2007-hattie"
  },
  {
   "id": "r-18",
   "type": "keten",
   "richting": "eenweg",
   "van": "t-2008-brown",
   "naar": "t-2008-sennett"
  }
 ]
};
