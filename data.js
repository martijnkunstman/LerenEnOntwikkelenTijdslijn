/* Kopie van tijdlijn.json, zodat index.html ook werkt als je het bestand direct opent (zonder webserver). */
window.TIJDLIJN = {
 "meta": {
  "titel": "Tijdlijn",
  "beschrijving": "Transcriptie van de tijdlijn uit het boek, zonder portretten. Personen, tijdlijn-items en relaties zijn gescheiden en gekoppeld via id's.",
  "versie": "1.3",
  "structuur": {
   "personen": "Unieke personen. Eén persoon kan in meerdere items voorkomen (bijv. p-schon in 1974 en 1983). 'foto' verwijst naar een portret met vrije licentie op Wikimedia Commons (url, afmetingen, uitsnede via focus in procenten en zoom, en bron, maker en licentie voor de naamsvermelding), of is null als er geen vrij portret is gevonden.",
   "items": "Eén item = één portretblok op de tijdlijn: jaartal + begrip + één of meer persoon-id's. Een duo is een item met twee persoon-id's. 'omschrijving' zegt wat het begrip inhoudt, 'uitleg' wat het betekent voor leren en ontwikkelen.",
   "relaties": "Koppelingen tussen items. 'van' en 'naar' verwijzen naar item-id's."
  },
  "relatietypes": {
   "gedeelde_lijn": {
    "richting": "tweeweg",
    "betekenis": "Beide items hangen aan dezelfde verbindingslijn naar hetzelfde jaartal. 'van' en 'naar' zijn uitwisselbaar."
   }
  },
  "aanvullingen": "Personen, items en relaties met 'extra': true zijn later toegevoegd en komen niet uit het boek. De pagina toont ze alleen als de schakelaar Extra aan staat.",
  "bronnen": "Elk item heeft 'bronnen': de belangrijkste publicaties over het begrip, in APA-notatie (7e editie, met Nederlandse aanduidingen zoals Red. en Vert.). Tekst tussen sterretjes staat cursief. Het jaar van een bron kan afwijken van het jaar op de tijdlijn. De bronnen zijn later toegevoegd en komen niet uit het boek.",
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
   "functie": "Oostenrijks-Israëlisch godsdienstfilosoof",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Martin_Buber_portrait.jpg/250px-Martin_Buber_portrait.jpg",
    "breedte": 1785,
    "hoogte": 2399,
    "focus": [
     55,
     37
    ],
    "zoom": 1.2,
    "bron": "https://commons.wikimedia.org/wiki/File:Martin_Buber_portrait.jpg",
    "maker": "Onbekend",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-lewin",
   "naam": "Kurt Lewin",
   "achternaam": "Lewin",
   "geboortejaar": 1890,
   "overlijdensjaar": 1947,
   "functie": "Duits-Amerikaans sociaal psycholoog",
   "foto": null
  },
  {
   "id": "p-dewey",
   "naam": "John Dewey",
   "achternaam": "Dewey",
   "geboortejaar": 1859,
   "overlijdensjaar": 1952,
   "functie": "Amerikaans filosoof en onderwijshervormer",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/John_Dewey_in_1902.jpg/500px-John_Dewey_in_1902.jpg",
    "breedte": 1001,
    "hoogte": 1309,
    "focus": [
     44,
     17
    ],
    "zoom": 1.8,
    "bron": "https://commons.wikimedia.org/wiki/File:John_Dewey_in_1902.jpg",
    "maker": "Eva Watson-Schütze",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-huizinga",
   "naam": "Johan Huizinga",
   "achternaam": "Huizinga",
   "geboortejaar": 1872,
   "overlijdensjaar": 1945,
   "functie": "Nederlands cultuurhistoricus",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Johan-huizinga1.jpg/330px-Johan-huizinga1.jpg",
    "breedte": 507,
    "hoogte": 755,
    "focus": [
     45,
     28
    ],
    "zoom": 1.3,
    "bron": "https://commons.wikimedia.org/wiki/File:Johan-huizinga1.jpg",
    "maker": "Onbekend",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-erikson",
   "naam": "Erik Erikson",
   "achternaam": "Erikson",
   "geboortejaar": 1902,
   "overlijdensjaar": 1994,
   "functie": "Duits-Amerikaans ontwikkelingspsycholoog en psychoanalyticus",
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Erik_Erikson.jpg",
    "breedte": 233,
    "hoogte": 291,
    "focus": [
     62,
     30
    ],
    "zoom": 1.5,
    "bron": "https://commons.wikimedia.org/wiki/File:Erik_Erikson.jpg",
    "maker": "Onbekend",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-bloom",
   "naam": "Benjamin Samuel Bloom",
   "achternaam": "Bloom",
   "geboortejaar": 1913,
   "overlijdensjaar": 1999,
   "functie": "Amerikaans onderwijspsycholoog",
   "foto": null
  },
  {
   "id": "p-shulman",
   "naam": "Lee S. Shulman",
   "achternaam": "Shulman",
   "geboortejaar": 1938,
   "overlijdensjaar": 2024,
   "functie": "Amerikaans onderwijspsycholoog (Stanford)",
   "foto": null
  },
  {
   "id": "p-polanyi",
   "naam": "Michael Polanyi",
   "achternaam": "Polanyi",
   "geboortejaar": 1891,
   "overlijdensjaar": 1976,
   "functie": "Hongaars-Brits chemicus en wetenschapsfilosoof",
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Michael_Polanyi.png",
    "breedte": 252,
    "hoogte": 413,
    "focus": [
     50,
     20
    ],
    "zoom": 2.2,
    "bron": "https://commons.wikimedia.org/wiki/File:Michael_Polanyi.png",
    "maker": "Onbekend (archief Manchester)",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-berne",
   "naam": "Eric Berne",
   "achternaam": "Berne",
   "geboortejaar": 1910,
   "overlijdensjaar": 1970,
   "functie": "Canadees-Amerikaans psychiater, grondlegger transactionele analyse",
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/0/05/Eric_Berne_at_his_wedding_in_1942.jpg",
    "breedte": 318,
    "hoogte": 648,
    "focus": [
     45,
     40
    ],
    "zoom": 1,
    "bron": "https://commons.wikimedia.org/wiki/File:Eric_Berne_at_his_wedding_in_1942.jpg",
    "maker": "Onbekend",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-menzies-lyth",
   "naam": "Isabel Menzies Lyth",
   "achternaam": "Menzies Lyth",
   "geboortejaar": 1917,
   "overlijdensjaar": 2008,
   "functie": "Brits psychoanalyticus en organisatieadviseur (Tavistock)",
   "foto": null
  },
  {
   "id": "p-berlyne",
   "naam": "Daniel E. Berlyne",
   "achternaam": "Berlyne",
   "geboortejaar": 1924,
   "overlijdensjaar": 1976,
   "functie": "Brits-Canadees experimenteel psycholoog",
   "foto": null
  },
  {
   "id": "p-freire",
   "naam": "Paulo Freire",
   "achternaam": "Freire",
   "geboortejaar": 1921,
   "overlijdensjaar": 1997,
   "functie": "Braziliaans pedagoog en filosoof",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Paulo_Freire_1977.jpg/330px-Paulo_Freire_1977.jpg",
    "breedte": 660,
    "hoogte": 833,
    "focus": [
     50,
     32
    ],
    "zoom": 1.4,
    "bron": "https://commons.wikimedia.org/wiki/File:Paulo_Freire_1977.jpg",
    "maker": "Slobodan Dimitro",
    "licentie": "CC BY-SA 3.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/3.0"
   }
  },
  {
   "id": "p-weick",
   "naam": "Karl E. Weick",
   "achternaam": "Weick",
   "geboortejaar": 1936,
   "overlijdensjaar": 2026,
   "functie": "Amerikaans organisatiepsycholoog (University of Michigan)",
   "foto": null
  },
  {
   "id": "p-freidson",
   "naam": "Eliot L. Freidson",
   "achternaam": "Freidson",
   "geboortejaar": 1923,
   "overlijdensjaar": 2005,
   "functie": "Amerikaans socioloog van professies (NYU)",
   "foto": null
  },
  {
   "id": "p-schon",
   "naam": "Donald Schön",
   "achternaam": "Schön",
   "geboortejaar": 1930,
   "overlijdensjaar": 1997,
   "functie": "Amerikaans filosoof en organisatiekundige (MIT)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Donald_schon_pic.jpg/330px-Donald_schon_pic.jpg",
    "breedte": 350,
    "hoogte": 522,
    "focus": [
     45,
     32
    ],
    "zoom": 1.3,
    "bron": "https://commons.wikimedia.org/wiki/File:Donald_schon_pic.jpg",
    "maker": "VectorStudy",
    "licentie": "FAL",
    "licentie_url": "http://artlibre.org/licence/lal/en"
   }
  },
  {
   "id": "p-argyris",
   "naam": "Chris Argyris",
   "achternaam": "Argyris",
   "geboortejaar": 1923,
   "overlijdensjaar": 2013,
   "functie": "Amerikaans organisatiekundige (Harvard)",
   "foto": null
  },
  {
   "id": "p-csikszentmihalyi",
   "naam": "Mihaly Csikszentmihalyi",
   "achternaam": "Csikszentmihalyi",
   "geboortejaar": 1934,
   "overlijdensjaar": 2021,
   "functie": "Hongaars-Amerikaans psycholoog",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Mihaly_Csikszentmihalyi.jpg/330px-Mihaly_Csikszentmihalyi.jpg",
    "breedte": 673,
    "hoogte": 774,
    "focus": [
     40,
     28
    ],
    "zoom": 1.5,
    "bron": "https://commons.wikimedia.org/wiki/File:Mihaly_Csikszentmihalyi.jpg",
    "maker": "Ehirsh",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-bourdieu",
   "naam": "Pierre Bourdieu",
   "achternaam": "Bourdieu",
   "geboortejaar": 1930,
   "overlijdensjaar": 2002,
   "functie": "Frans socioloog",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Pierre_Bourdieu_%281%29.jpg/330px-Pierre_Bourdieu_%281%29.jpg",
    "breedte": 1347,
    "hoogte": 1944,
    "focus": [
     45,
     30
    ],
    "zoom": 1.4,
    "bron": "https://commons.wikimedia.org/wiki/File:Pierre_Bourdieu_(1).jpg",
    "maker": "Bernard Lambert",
    "licentie": "CC BY-SA 4.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/4.0"
   }
  },
  {
   "id": "p-mcclelland",
   "naam": "David C. McClelland",
   "achternaam": "McClelland",
   "geboortejaar": 1917,
   "overlijdensjaar": 1998,
   "functie": "Amerikaans psycholoog, motivatieonderzoeker (Harvard)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/DavidMcClelland.jpg/330px-DavidMcClelland.jpg",
    "breedte": 915,
    "hoogte": 1279,
    "focus": [
     50,
     30
    ],
    "zoom": 1.4,
    "bron": "https://commons.wikimedia.org/wiki/File:DavidMcClelland.jpg",
    "maker": "Oschult",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-kolb",
   "naam": "David A. Kolb",
   "achternaam": "Kolb",
   "geboortejaar": 1939,
   "overlijdensjaar": null,
   "functie": "Amerikaans onderwijstheoreticus (Case Western Reserve)",
   "foto": null
  },
  {
   "id": "p-schein",
   "naam": "Edgar Schein",
   "achternaam": "Schein",
   "geboortejaar": 1928,
   "overlijdensjaar": 2023,
   "functie": "Amerikaans organisatiepsycholoog (MIT)",
   "foto": null
  },
  {
   "id": "p-deci",
   "naam": "Edward L. Deci",
   "achternaam": "Deci",
   "geboortejaar": 1942,
   "overlijdensjaar": 2026,
   "functie": "Amerikaans psycholoog (University of Rochester)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Edward_L_Deci.jpg/330px-Edward_L_Deci.jpg",
    "breedte": 800,
    "hoogte": 1000,
    "focus": [
     40,
     25
    ],
    "zoom": 1.6,
    "bron": "https://commons.wikimedia.org/wiki/File:Edward_L_Deci.jpg",
    "maker": "Center for Self-Determination Theory",
    "licentie": "CC BY-SA 4.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/4.0"
   }
  },
  {
   "id": "p-ryan",
   "naam": "Richard M. Ryan",
   "achternaam": "Ryan",
   "geboortejaar": 1953,
   "overlijdensjaar": null,
   "functie": "Amerikaans psycholoog, motivatieonderzoeker",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Richard-ryan-600x400_acu_RT_HiRes.png/500px-Richard-ryan-600x400_acu_RT_HiRes.png",
    "breedte": 1042,
    "hoogte": 695,
    "focus": [
     45,
     30
    ],
    "zoom": 1.3,
    "bron": "https://commons.wikimedia.org/wiki/File:Richard-ryan-600x400_acu_RT_HiRes.png",
    "maker": "CenterForSDT",
    "licentie": "CC BY-SA 4.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/4.0"
   }
  },
  {
   "id": "p-cooperrider",
   "naam": "David Cooperrider",
   "achternaam": "Cooperrider",
   "geboortejaar": 1954,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (Case Western Reserve)",
   "foto": null
  },
  {
   "id": "p-engestrom",
   "naam": "Yrjö Engeström",
   "achternaam": "Engeström",
   "geboortejaar": 1948,
   "overlijdensjaar": null,
   "functie": "Fins onderwijskundige (Universiteit van Helsinki)",
   "foto": null
  },
  {
   "id": "p-west",
   "naam": "Michael West",
   "achternaam": "West",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Brits organisatiepsycholoog (Lancaster University)",
   "foto": null
  },
  {
   "id": "p-gersick",
   "naam": "Connie J.G Gersick",
   "achternaam": "Gersick",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (teams en verandering)",
   "foto": null
  },
  {
   "id": "p-checkland",
   "naam": "Peter Checkland",
   "achternaam": "Checkland",
   "geboortejaar": 1930,
   "overlijdensjaar": 2026,
   "functie": "Brits systeemdenker (Lancaster University)",
   "foto": null
  },
  {
   "id": "p-g-caine",
   "naam": "Geoffrey Caine",
   "achternaam": "Caine",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Onderwijskundige en auteur over leren en het brein",
   "foto": null
  },
  {
   "id": "p-r-caine",
   "naam": "Renate N. Caine",
   "achternaam": "Caine",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Onderwijspsycholoog (California State University)",
   "foto": null
  },
  {
   "id": "p-pierce",
   "naam": "Jon L. Pierce",
   "achternaam": "Pierce",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiepsycholoog (University of Minnesota Duluth)",
   "foto": null
  },
  {
   "id": "p-lave",
   "naam": "Jean Lave",
   "achternaam": "Lave",
   "geboortejaar": 1939,
   "overlijdensjaar": null,
   "functie": "Amerikaans sociaal antropoloog (UC Berkeley)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Jean_Lave%2C_ICLS_2014_opening_keynote_%2815057409757%29.jpg/500px-Jean_Lave%2C_ICLS_2014_opening_keynote_%2815057409757%29.jpg",
    "breedte": 4000,
    "hoogte": 3000,
    "focus": [
     36,
     28
    ],
    "zoom": 1.8,
    "bron": "https://commons.wikimedia.org/wiki/File:Jean_Lave,_ICLS_2014_opening_keynote_(15057409757).jpg",
    "maker": "Raymond Johnson",
    "licentie": "CC BY-SA 2.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/2.0"
   }
  },
  {
   "id": "p-seligman",
   "naam": "Martin Seligman",
   "achternaam": "Seligman",
   "geboortejaar": 1942,
   "overlijdensjaar": null,
   "functie": "Amerikaans psycholoog, grondlegger positieve psychologie",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Martin_Seligman_Philadelphia_2009.jpg/500px-Martin_Seligman_Philadelphia_2009.jpg",
    "breedte": 600,
    "hoogte": 560,
    "focus": [
     50,
     22
    ],
    "zoom": 1.8,
    "bron": "https://commons.wikimedia.org/wiki/File:Martin_Seligman_Philadelphia_2009.jpg",
    "maker": "D. Myles Cullen, U.S. Department of Defense",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-pedler",
   "naam": "Mike Pedler",
   "achternaam": "Pedler",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Brits organisatiekundige (action learning)",
   "foto": null
  },
  {
   "id": "p-ericsson",
   "naam": "K. Anders Ericsson",
   "achternaam": "Ericsson",
   "geboortejaar": 1947,
   "overlijdensjaar": 2020,
   "functie": "Zweeds psycholoog, expertiseonderzoeker (Florida State)",
   "foto": null
  },
  {
   "id": "p-kessels",
   "naam": "Joseph W.M. Kessels",
   "achternaam": "Kessels",
   "geboortejaar": 1952,
   "overlijdensjaar": null,
   "functie": "Nederlands onderwijskundige, HRD (Universiteit Twente)",
   "foto": null
  },
  {
   "id": "p-stacey",
   "naam": "Ralph Stacey",
   "achternaam": "Stacey",
   "geboortejaar": 1942,
   "overlijdensjaar": 2021,
   "functie": "Brits organisatietheoreticus (University of Hertfordshire)",
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ralph_Stacey.jpg",
    "breedte": 237,
    "hoogte": 234,
    "focus": [
     50,
     35
    ],
    "zoom": 1.2,
    "bron": "https://commons.wikimedia.org/wiki/File:Ralph_Stacey.jpg",
    "maker": "Dr. Eric Wenzel",
    "licentie": "CC BY-SA 3.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/3.0"
   }
  },
  {
   "id": "p-wenger",
   "naam": "Etienne Wenger",
   "achternaam": "Wenger",
   "geboortejaar": 1952,
   "overlijdensjaar": null,
   "functie": "Zwitsers onderwijstheoreticus",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Etienne_Wenger_893x893.jpg/330px-Etienne_Wenger_893x893.jpg",
    "breedte": 893,
    "hoogte": 893,
    "focus": [
     40,
     35
    ],
    "zoom": 1.3,
    "bron": "https://commons.wikimedia.org/wiki/File:Etienne_Wenger_893x893.jpg",
    "maker": "Beverly Trayner",
    "licentie": "CC BY 2.0",
    "licentie_url": "https://creativecommons.org/licenses/by/2.0"
   }
  },
  {
   "id": "p-wierdsma",
   "naam": "André Wierdsma",
   "achternaam": "Wierdsma",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Nederlands organisatiekundige (Nyenrode)",
   "foto": null
  },
  {
   "id": "p-isaacs",
   "naam": "William Isaacs",
   "achternaam": "Isaacs",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige, dialoogspecialist (MIT)",
   "foto": null
  },
  {
   "id": "p-edmondson",
   "naam": "Amy Edmondson",
   "achternaam": "Edmondson",
   "geboortejaar": 1959,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (Harvard Business School)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Photo_Credit-_Evgenia_Eliseeva.jpg/500px-Photo_Credit-_Evgenia_Eliseeva.jpg",
    "breedte": 2640,
    "hoogte": 3960,
    "focus": [
     50,
     30
    ],
    "zoom": 2,
    "bron": "https://commons.wikimedia.org/wiki/File:Photo_Credit-_Evgenia_Eliseeva.jpg",
    "maker": "Evgenia Eliseeva",
    "licentie": "CC BY-SA 2.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/2.0"
   }
  },
  {
   "id": "p-smith",
   "naam": "Wendy Smith",
   "achternaam": "Smith",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (University of Delaware)",
   "foto": null
  },
  {
   "id": "p-lewis",
   "naam": "Marianne Lewis",
   "achternaam": "Lewis",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans organisatiekundige (University of Cincinnati)",
   "foto": null
  },
  {
   "id": "p-billett",
   "naam": "Stephen Billett",
   "achternaam": "Billett",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Australisch onderwijskundige, werkplekleren (Griffith University)",
   "foto": null
  },
  {
   "id": "p-bereiter",
   "naam": "Carl Bereiter",
   "achternaam": "Bereiter",
   "geboortejaar": 1930,
   "overlijdensjaar": null,
   "functie": "Amerikaans-Canadees onderwijspsycholoog (OISE, Toronto)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Carl_Bereiter.jpg/330px-Carl_Bereiter.jpg",
    "breedte": 360,
    "hoogte": 360,
    "focus": [
     55,
     34
    ],
    "zoom": 1.4,
    "bron": "https://commons.wikimedia.org/wiki/File:Carl_Bereiter.jpg",
    "maker": "Saltise INC",
    "licentie": "CC BY-SA 4.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/4.0"
   }
  },
  {
   "id": "p-scardamalia",
   "naam": "Marlene Scardamalia",
   "achternaam": "Scardamalia",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Canadees onderwijspsycholoog (OISE, Toronto)",
   "foto": null
  },
  {
   "id": "p-schwartz",
   "naam": "Barry Schwartz",
   "achternaam": "Schwartz",
   "geboortejaar": 1946,
   "overlijdensjaar": null,
   "functie": "Amerikaans psycholoog (Swarthmore College)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Barry_Schwartz.jpg/960px-Barry_Schwartz.jpg",
    "breedte": 4752,
    "hoogte": 3168,
    "focus": [
     40,
     25
    ],
    "zoom": 2.5,
    "bron": "https://commons.wikimedia.org/wiki/File:Barry_Schwartz.jpg",
    "maker": "Bill Holsinger-Robinson",
    "licentie": "CC BY 2.0",
    "licentie_url": "https://creativecommons.org/licenses/by/2.0"
   }
  },
  {
   "id": "p-spillane",
   "naam": "James P. Spillane",
   "achternaam": "Spillane",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Onderwijskundige, schoolleiderschap (Northwestern University)",
   "foto": null
  },
  {
   "id": "p-kunneman",
   "naam": "Harry Kunneman",
   "achternaam": "Kunneman",
   "geboortejaar": 1948,
   "overlijdensjaar": null,
   "functie": "Nederlands filosoof (Universiteit voor Humanistiek)",
   "foto": null
  },
  {
   "id": "p-dweck",
   "naam": "Carol Dweck",
   "achternaam": "Dweck",
   "geboortejaar": 1946,
   "overlijdensjaar": null,
   "functie": "Amerikaans psycholoog (Stanford)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Carol_Dweck_for_Innovation_documentary.jpg/330px-Carol_Dweck_for_Innovation_documentary.jpg",
    "breedte": 716,
    "hoogte": 799,
    "focus": [
     45,
     30
    ],
    "zoom": 1.6,
    "bron": "https://commons.wikimedia.org/wiki/File:Carol_Dweck_for_Innovation_documentary.jpg",
    "maker": "Satheesh Gopalan",
    "licentie": "CC BY-SA 3.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/3.0"
   }
  },
  {
   "id": "p-shaffer",
   "naam": "David W. Shaffer",
   "achternaam": "Shaffer",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans leerwetenschapper (University of Wisconsin–Madison)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/David_Williamson_Shaffer_LISE2008.jpg/960px-David_Williamson_Shaffer_LISE2008.jpg",
    "breedte": 2865,
    "hoogte": 1918,
    "focus": [
     50,
     26
    ],
    "zoom": 2.4,
    "bron": "https://commons.wikimedia.org/wiki/File:David_Williamson_Shaffer_LISE2008.jpg",
    "maker": "Douglas A. Lockard",
    "licentie": "CC BY-SA 3.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/3.0"
   }
  },
  {
   "id": "p-scharmer",
   "naam": "Otto Scharmer",
   "achternaam": "Scharmer",
   "geboortejaar": 1961,
   "overlijdensjaar": null,
   "functie": "Duits organisatiekundige (MIT)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Otto_Scharmer.jpg/500px-Otto_Scharmer.jpg",
    "breedte": 2592,
    "hoogte": 3888,
    "focus": [
     45,
     43
    ],
    "zoom": 2,
    "bron": "https://commons.wikimedia.org/wiki/File:Otto_Scharmer.jpg",
    "maker": "Ad Huikeshoven",
    "licentie": "CC BY-SA 4.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/4.0"
   }
  },
  {
   "id": "p-hattie",
   "naam": "John Hattie",
   "achternaam": "Hattie",
   "geboortejaar": 1950,
   "overlijdensjaar": null,
   "functie": "Nieuw-Zeelands onderwijskundige (University of Melbourne)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/John_Hattie.jpeg/500px-John_Hattie.jpeg",
    "breedte": 2448,
    "hoogte": 3264,
    "focus": [
     47,
     36
    ],
    "zoom": 1.7,
    "bron": "https://commons.wikimedia.org/wiki/File:John_Hattie.jpeg",
    "maker": "idunius",
    "licentie": "CC BY-SA 3.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/3.0"
   }
  },
  {
   "id": "p-brown",
   "naam": "Brené Brown",
   "achternaam": "Brown",
   "geboortejaar": 1965,
   "overlijdensjaar": null,
   "functie": "Amerikaans onderzoeker sociaal werk (University of Houston)",
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/63/Dr._Brene_Brown_at_Texas_Conference_for_Women_%28cropped%29.jpg",
    "breedte": 842,
    "hoogte": 1263,
    "focus": [
     48,
     17
    ],
    "zoom": 3,
    "bron": "https://commons.wikimedia.org/wiki/File:Dr._Brene_Brown_at_Texas_Conference_for_Women_(cropped).jpg",
    "maker": "Dell Inc.",
    "licentie": "CC BY 2.0",
    "licentie_url": "https://creativecommons.org/licenses/by/2.0"
   }
  },
  {
   "id": "p-sennett",
   "naam": "Richard Sennett",
   "achternaam": "Sennett",
   "geboortejaar": 1943,
   "overlijdensjaar": null,
   "functie": "Amerikaans socioloog (LSE)",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Richard_Sennett%2C_re-publica_2016_%28cropped%29.JPG/330px-Richard_Sennett%2C_re-publica_2016_%28cropped%29.JPG",
    "breedte": 2957,
    "hoogte": 3446,
    "focus": [
     48,
     35
    ],
    "zoom": 1.5,
    "bron": "https://commons.wikimedia.org/wiki/File:Richard_Sennett,_re-publica_2016_(cropped).JPG",
    "maker": "Ot",
    "licentie": "CC BY-SA 4.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/4.0"
   }
  },
  {
   "id": "p-kahneman",
   "naam": "Daniel Kahneman",
   "achternaam": "Kahneman",
   "geboortejaar": 1934,
   "overlijdensjaar": 2024,
   "functie": "Israëlisch-Amerikaans psycholoog, Nobelprijs economie",
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Daniel_Kahneman_%283283955327%29_%28cropped%29.jpg/500px-Daniel_Kahneman_%283283955327%29_%28cropped%29.jpg",
    "breedte": 688,
    "hoogte": 818,
    "focus": [
     45,
     28
    ],
    "zoom": 1.8,
    "bron": "https://commons.wikimedia.org/wiki/File:Daniel_Kahneman_(3283955327)_(cropped).jpg",
    "maker": "nrkbeta",
    "licentie": "CC BY-SA 2.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/2.0"
   }
  },
  {
   "id": "p-vygotsky",
   "naam": "Lev Vygotsky",
   "achternaam": "Vygotsky",
   "geboortejaar": 1896,
   "overlijdensjaar": 1934,
   "functie": "Russisch-Sovjet psycholoog, grondlegger van de cultureel-historische psychologie",
   "extra": true,
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Lev-Semyonovich-Vygotsky-1896-1934.jpg/330px-Lev-Semyonovich-Vygotsky-1896-1934.jpg",
    "breedte": 735,
    "hoogte": 1014,
    "focus": [
     50,
     28
    ],
    "zoom": 1.4,
    "bron": "https://commons.wikimedia.org/wiki/File:Lev-Semyonovich-Vygotsky-1896-1934.jpg",
    "maker": "Onbekend",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-piaget",
   "naam": "Jean Piaget",
   "achternaam": "Piaget",
   "geboortejaar": 1896,
   "overlijdensjaar": 1980,
   "functie": "Zwitsers ontwikkelingspsycholoog (Genève)",
   "extra": true,
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/60/Jean_Piaget_in_Ann_Arbor_%28cropped%29.png",
    "breedte": 193,
    "hoogte": 241,
    "focus": [
     50,
     32
    ],
    "zoom": 1.3,
    "bron": "https://commons.wikimedia.org/wiki/File:Jean_Piaget_in_Ann_Arbor_(cropped).png",
    "maker": "Onbekend (jaarboek University of Michigan)",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-maslow",
   "naam": "Abraham Maslow",
   "achternaam": "Maslow",
   "geboortejaar": 1908,
   "overlijdensjaar": 1970,
   "functie": "Amerikaans psycholoog, humanistische psychologie",
   "extra": true,
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg/330px-Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg",
    "breedte": 1263,
    "hoogte": 1684,
    "focus": [
     50,
     30
    ],
    "zoom": 1.5,
    "bron": "https://commons.wikimedia.org/wiki/File:Photo_of_Abraham_Harold_Maslow_by_William_Carter_(cropped).jpg",
    "maker": "William Carter",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-kirkpatrick",
   "naam": "Donald Kirkpatrick",
   "achternaam": "Kirkpatrick",
   "geboortejaar": 1924,
   "overlijdensjaar": 2014,
   "functie": "Amerikaans hoogleraar, evaluatie van opleidingen (University of Wisconsin)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-knowles",
   "naam": "Malcolm Knowles",
   "achternaam": "Knowles",
   "geboortejaar": 1913,
   "overlijdensjaar": 1997,
   "functie": "Amerikaans volwasseneneducator",
   "extra": true,
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Malcolm_Shepherd_Knowles_%281913-1997%29_portrait.png",
    "breedte": 273,
    "hoogte": 362,
    "focus": [
     55,
     28
    ],
    "zoom": 1.5,
    "bron": "https://commons.wikimedia.org/wiki/File:Malcolm_Shepherd_Knowles_(1913-1997)_portrait.png",
    "maker": "Onbekend",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-revans",
   "naam": "Reg Revans",
   "achternaam": "Revans",
   "geboortejaar": 1907,
   "overlijdensjaar": 2003,
   "functie": "Brits hoogleraar management, grondlegger van action learning",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-leontjev",
   "naam": "Aleksej Leontjev",
   "achternaam": "Leontjev",
   "geboortejaar": 1903,
   "overlijdensjaar": 1979,
   "functie": "Russisch-Sovjet psycholoog (Staatsuniversiteit Moskou)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-luria",
   "naam": "Alexander Luria",
   "achternaam": "Luria",
   "geboortejaar": 1902,
   "overlijdensjaar": 1977,
   "functie": "Russisch-Sovjet neuropsycholoog",
   "extra": true,
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Alexander_Luria.jpg/330px-Alexander_Luria.jpg",
    "breedte": 600,
    "hoogte": 753,
    "focus": [
     55,
     32
    ],
    "zoom": 1.4,
    "bron": "https://commons.wikimedia.org/wiki/File:Alexander_Luria.jpg",
    "maker": "Onbekend (foto uit de jaren 1940)",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-wood",
   "naam": "David Wood",
   "achternaam": "Wood",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Brits ontwikkelingspsycholoog (University of Nottingham)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-bruner",
   "naam": "Jerome Bruner",
   "achternaam": "Bruner",
   "geboortejaar": 1915,
   "overlijdensjaar": 2016,
   "functie": "Amerikaans cognitief psycholoog en onderwijskundige (Harvard)",
   "extra": true,
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Jerome_Bruner_1936.png/250px-Jerome_Bruner_1936.png",
    "breedte": 662,
    "hoogte": 976,
    "focus": [
     50,
     32
    ],
    "zoom": 1.2,
    "bron": "https://commons.wikimedia.org/wiki/File:Jerome_Bruner_1936.png",
    "maker": "Onbekend",
    "licentie": "Publiek domein",
    "licentie_url": null
   }
  },
  {
   "id": "p-ross",
   "naam": "Gail Ross",
   "achternaam": "Ross",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Onderzoeker, medeauteur van het artikel over scaffolding (1976)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-bandura",
   "naam": "Albert Bandura",
   "achternaam": "Bandura",
   "geboortejaar": 1925,
   "overlijdensjaar": 2021,
   "functie": "Canadees-Amerikaans psycholoog (Stanford)",
   "extra": true,
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Albert_Bandura_Psychologist.jpg/250px-Albert_Bandura_Psychologist.jpg",
    "breedte": 2982,
    "hoogte": 4223,
    "focus": [
     50,
     34
    ],
    "zoom": 1.2,
    "bron": "https://commons.wikimedia.org/wiki/File:Albert_Bandura_Psychologist.jpg",
    "maker": "bandura@stanford.edu",
    "licentie": "CC BY-SA 4.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/4.0"
   }
  },
  {
   "id": "p-mezirow",
   "naam": "Jack Mezirow",
   "achternaam": "Mezirow",
   "geboortejaar": 1923,
   "overlijdensjaar": 2014,
   "functie": "Amerikaans socioloog en volwasseneneducator (Columbia University)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-h-dreyfus",
   "naam": "Hubert Dreyfus",
   "achternaam": "Dreyfus",
   "geboortejaar": 1929,
   "overlijdensjaar": 2017,
   "functie": "Amerikaans filosoof (UC Berkeley)",
   "extra": true,
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Hubert_Dreyfus.jpg/500px-Hubert_Dreyfus.jpg",
    "breedte": 2136,
    "hoogte": 2848,
    "focus": [
     58,
     22
    ],
    "zoom": 2,
    "bron": "https://commons.wikimedia.org/wiki/File:Hubert_Dreyfus.jpg",
    "maker": "Jörg Noller",
    "licentie": "CC BY-SA 3.0 de",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en"
   }
  },
  {
   "id": "p-s-dreyfus",
   "naam": "Stuart Dreyfus",
   "achternaam": "Dreyfus",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Amerikaans ingenieur en operations researcher (UC Berkeley)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-kegan",
   "naam": "Robert Kegan",
   "achternaam": "Kegan",
   "geboortejaar": 1946,
   "overlijdensjaar": null,
   "functie": "Amerikaans ontwikkelingspsycholoog (Harvard)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-sweller",
   "naam": "John Sweller",
   "achternaam": "Sweller",
   "geboortejaar": 1946,
   "overlijdensjaar": null,
   "functie": "Australisch onderwijspsycholoog (University of New South Wales)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-collins",
   "naam": "Allan Collins",
   "achternaam": "Collins",
   "geboortejaar": 1937,
   "overlijdensjaar": 2026,
   "functie": "Amerikaans cognitiewetenschapper (Northwestern University)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-js-brown",
   "naam": "John Seely Brown",
   "achternaam": "Brown",
   "geboortejaar": 1940,
   "overlijdensjaar": null,
   "functie": "Amerikaans onderzoeker, voormalig hoofd van Xerox PARC",
   "extra": true,
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/JSBJI4.jpg/960px-JSBJI4.jpg",
    "breedte": 2927,
    "hoogte": 1969,
    "focus": [
     62,
     36
    ],
    "zoom": 1.8,
    "bron": "https://commons.wikimedia.org/wiki/File:JSBJI4.jpg",
    "maker": "Joi Ito",
    "licentie": "CC BY 2.0",
    "licentie_url": "https://creativecommons.org/licenses/by/2.0"
   }
  },
  {
   "id": "p-newman",
   "naam": "Susan Newman",
   "achternaam": "Newman",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Onderzoeker, medeauteur van het artikel over cognitive apprenticeship (1989)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-senge",
   "naam": "Peter Senge",
   "achternaam": "Senge",
   "geboortejaar": 1947,
   "overlijdensjaar": null,
   "functie": "Amerikaans systeemwetenschapper (MIT)",
   "extra": true,
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Peter_Senge_at_Quest_to_Learn.jpg",
    "breedte": 306,
    "hoogte": 405,
    "focus": [
     48,
     19
    ],
    "zoom": 2,
    "bron": "https://commons.wikimedia.org/wiki/File:Peter_Senge_at_Quest_to_Learn.jpg",
    "maker": "Beyond My Ken",
    "licentie": "CC BY-SA 4.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/4.0"
   }
  },
  {
   "id": "p-nonaka",
   "naam": "Ikujiro Nonaka",
   "achternaam": "Nonaka",
   "geboortejaar": 1935,
   "overlijdensjaar": 2025,
   "functie": "Japans organisatiekundige (Hitotsubashi University)",
   "extra": true,
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Ikujiro_Nonaka.jpg",
    "breedte": 320,
    "hoogte": 427,
    "focus": [
     50,
     36
    ],
    "zoom": 1.4,
    "bron": "https://commons.wikimedia.org/wiki/File:Ikujiro_Nonaka.jpg",
    "maker": "Japan Academy (日本学士院)",
    "licentie": "CC BY 4.0",
    "licentie_url": "https://creativecommons.org/licenses/by/4.0"
   }
  },
  {
   "id": "p-takeuchi",
   "naam": "Hirotaka Takeuchi",
   "achternaam": "Takeuchi",
   "geboortejaar": 1946,
   "overlijdensjaar": null,
   "functie": "Japans organisatiekundige (Hitotsubashi University, Harvard)",
   "extra": true,
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Hirotaka_Takeuchi_-_World_Economic_Forum_Annual_Meeting_Davos_2009.jpg/500px-Hirotaka_Takeuchi_-_World_Economic_Forum_Annual_Meeting_Davos_2009.jpg",
    "breedte": 4096,
    "hoogte": 2675,
    "focus": [
     45,
     32
    ],
    "zoom": 1.6,
    "bron": "https://commons.wikimedia.org/wiki/File:Hirotaka_Takeuchi_-_World_Economic_Forum_Annual_Meeting_Davos_2009.jpg",
    "maker": "World Economic Forum",
    "licentie": "CC BY-SA 2.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/2.0"
   }
  },
  {
   "id": "p-black",
   "naam": "Paul Black",
   "achternaam": "Black",
   "geboortejaar": 1930,
   "overlijdensjaar": 2026,
   "functie": "Brits natuurkundige en onderwijsonderzoeker (King's College London)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-wiliam",
   "naam": "Dylan Wiliam",
   "achternaam": "Wiliam",
   "geboortejaar": null,
   "overlijdensjaar": null,
   "functie": "Welsh onderwijskundige, toetsing en evaluatie (UCL Institute of Education)",
   "extra": true,
   "foto": {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Dylan_Wiliam_LISE2006_portrait.jpg/960px-Dylan_Wiliam_LISE2006_portrait.jpg",
    "breedte": 1727,
    "hoogte": 2600,
    "focus": [
     50,
     20
    ],
    "zoom": 3,
    "bron": "https://commons.wikimedia.org/wiki/File:Dylan_Wiliam_LISE2006_portrait.jpg",
    "maker": "Douglas A. Lockard",
    "licentie": "CC BY-SA 3.0",
    "licentie_url": "https://creativecommons.org/licenses/by-sa/3.0"
   }
  },
  {
   "id": "p-eraut",
   "naam": "Michael Eraut",
   "achternaam": "Eraut",
   "geboortejaar": 1940,
   "overlijdensjaar": null,
   "functie": "Brits onderwijskundige, professioneel leren (University of Sussex)",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-korthagen",
   "naam": "Fred Korthagen",
   "achternaam": "Korthagen",
   "geboortejaar": 1949,
   "overlijdensjaar": null,
   "functie": "Nederlands onderwijskundige, lerarenopleiding (Universiteit Utrecht)",
   "extra": true,
   "foto": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Fred_Korthagen_%28cropped%29.png",
    "breedte": 614,
    "hoogte": 921,
    "focus": [
     52,
     16
    ],
    "zoom": 3.5,
    "bron": "https://commons.wikimedia.org/wiki/File:Fred_Korthagen_(cropped).png",
    "maker": "Beroepscoaches",
    "licentie": "CC BY 3.0",
    "licentie_url": "https://creativecommons.org/licenses/by/3.0"
   }
  },
  {
   "id": "p-ruijters",
   "naam": "Manon Ruijters",
   "achternaam": "Ruijters",
   "geboortejaar": 1967,
   "overlijdensjaar": null,
   "functie": "Nederlands onderwijskundige en adviseur, leren in organisaties",
   "extra": true,
   "foto": null
  },
  {
   "id": "p-biesta",
   "naam": "Gert Biesta",
   "achternaam": "Biesta",
   "geboortejaar": 1957,
   "overlijdensjaar": null,
   "functie": "Nederlands pedagoog en onderwijsfilosoof",
   "extra": true,
   "foto": null
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
   "uitleg": "Leren en begeleiden gebeuren in relatie. Wie de lerende werkelijk ontmoet, schept ruimte voor vertrouwen, dialoog en groei.",
   "bronnen": [
    "Buber, M. (1923). *Ich und Du* [Ik en jij]. Insel-Verlag."
   ]
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
   "uitleg": "Professionals en teams leren van hun eigen praktijk door systematisch te experimenteren. Verbeteren en kennis opbouwen gaan zo hand in hand.",
   "bronnen": [
    "Lewin, K. (1946). Action research and minority problems. *Journal of Social Issues, 2*(4), 34–46. https://doi.org/10.1111/j.1540-4560.1946.tb02295.x"
   ]
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
   "uitleg": "Ervaring alleen leert niet: pas door erop te reflecteren wordt ervaring een bron van leren. Dewey legde daarmee de basis voor ervaringsgericht leren.",
   "bronnen": [
    "Dewey, J. (1933). *How we think: A restatement of the relation of reflective thinking to the educative process* (Herz. ed.). D. C. Heath."
   ]
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
   "uitleg": "Spel biedt een veilige ruimte om te experimenteren, rollen uit te proberen en fouten te maken. Daarom is het een krachtige vorm van leren, ook voor volwassenen.",
   "bronnen": [
    "Huizinga, J. (1938). *Homo ludens: Proeve eener bepaling van het spel-element der cultuur*. H. D. Tjeenk Willink & Zoon."
   ]
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
   "uitleg": "Ontwikkeling stopt niet na de jeugd. Wat mensen willen en kunnen leren hangt samen met hun levensfase, zoals de behoefte om in het middenleven kennis door te geven.",
   "bronnen": [
    "Erikson, E. H. (1950). *Childhood and society*. W. W. Norton."
   ]
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
   "uitleg": "Een taxonomie helpt leerdoelen, opdrachten en toetsing op elkaar af te stemmen en maakt zichtbaar welk denkniveau je van lerenden vraagt.",
   "bronnen": [
    "Bloom, B. S. (Red.). (1956). *Taxonomy of educational objectives: The classification of educational goals. Handbook I: Cognitive domain*. David McKay.",
    "Shulman, L. S. (2002). Making differences: A table of learning. *Change: The Magazine of Higher Learning, 34*(6), 36–44. https://doi.org/10.1080/00091380209605567"
   ]
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
   "uitleg": "Veel vakmanschap is stilzwijgend. Het wordt vooral overgedragen door meedoen, voordoen en samenwerken, niet via handboeken of cursussen.",
   "bronnen": [
    "Polanyi, M. (1958). *Personal knowledge: Towards a post-critical philosophy*. University of Chicago Press.",
    "Polanyi, M. (1966). *The tacit dimension*. Doubleday."
   ]
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
   "uitleg": "Het helpt begeleiders en teams om patronen in interacties te herkennen, zoals terugkerende 'spelletjes', en bewuster en gelijkwaardiger te communiceren.",
   "bronnen": [
    "Berne, E. (1958). Transactional analysis: A new and effective method of group therapy. *American Journal of Psychotherapy, 12*(4), 735–743. https://doi.org/10.1176/appi.psychotherapy.1958.12.4.735",
    "Berne, E. (1961). *Transactional analysis in psychotherapy: A systematic individual and social psychiatry*. Grove Press."
   ]
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
   "uitleg": "Zulke afweer maakt werk draaglijk, maar kan leren en verandering blokkeren. Wie wil veranderen, moet ook aandacht hebben voor de emoties die bestaande werkwijzen afdekken.",
   "bronnen": [
    "Menzies, I. E. P. (1960). A case-study in the functioning of social systems as a defence against anxiety: A report on a study of the nursing service of a general hospital. *Human Relations, 13*(2), 95–121. https://doi.org/10.1177/001872676001300201"
   ]
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
   "uitleg": "Nieuwsgierigheid is een motor van leren van binnenuit. Een passende mate van nieuwheid en uitdaging, niet te weinig en niet te veel, zet mensen aan tot onderzoeken.",
   "bronnen": [
    "Berlyne, D. E. (1960). *Conflict, arousal, and curiosity*. McGraw-Hill. https://doi.org/10.1037/11164-000"
   ]
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
   "uitleg": "Freire zette 'bankonderwijs', waarin kennis in lerenden wordt gestort, af tegen dialogisch leren. Lerenden zijn geen lege vaten, maar medeonderzoekers van hun eigen werkelijkheid.",
   "bronnen": [
    "Freire, P. (1967). *Educação como prática da liberdade* [Onderwijs als praktijk van de vrijheid]. Paz e Terra.",
    "Freire, P. (1970). *Pedagogy of the oppressed* (M. B. Ramos, Vert.). Herder and Herder."
   ]
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
   "uitleg": "Losse koppeling geeft ruimte voor lokale aanpassing en experiment, maar maakt het lastig om vernieuwing in de hele organisatie te laten doorwerken.",
   "bronnen": [
    "Weick, K. E. (1969). *The social psychology of organizing*. Addison-Wesley.",
    "Weick, K. E. (1976). Educational organizations as loosely coupled systems. *Administrative Science Quarterly, 21*(1), 1–19. https://doi.org/10.2307/2391875"
   ]
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
   "uitleg": "Professionals houden hun deskundigheid zelf op peil. Leren en ontwikkelen horen daarmee bij de verantwoordelijkheid van de beroepsgroep, niet alleen bij het management.",
   "bronnen": [
    "Freidson, E. (1970). *Profession of medicine: A study of the sociology of applied knowledge*. Dodd, Mead.",
    "Freidson, E. (2001). *Professionalism, the third logic: On the practice of knowledge*. University of Chicago Press."
   ]
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
   "uitleg": "Echte verandering in organisaties vraagt dat mensen hun eigen vanzelfsprekendheden onderzoeken, ook als dat ongemakkelijk is.",
   "bronnen": [
    "Argyris, C., & Schön, D. A. (1974). *Theory in practice: Increasing professional effectiveness*. Jossey-Bass.",
    "Argyris, C., & Schön, D. A. (1978). *Organizational learning: A theory of action perspective*. Addison-Wesley."
   ]
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
   "uitleg": "Leren is het meest bevredigend en effectief als een taak net boven je huidige niveau ligt. Te makkelijk leidt tot verveling, te moeilijk tot angst.",
   "bronnen": [
    "Csikszentmihalyi, M. (1975). *Beyond boredom and anxiety*. Jossey-Bass.",
    "Csikszentmihalyi, M. (1990). *Flow: The psychology of optimal experience*. Harper & Row."
   ]
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
   "uitleg": "Lerenden brengen hun habitus mee. Wie dat niet ziet, bevoordeelt onbedoeld mensen van wie de achtergrond aansluit bij de cultuur van de school of organisatie.",
   "bronnen": [
    "Bourdieu, P. (1977). *Outline of a theory of practice* (R. Nice, Vert.). Cambridge University Press. https://doi.org/10.1017/CBO9780511812507 (Oorspronkelijk werk gepubliceerd 1972)"
   ]
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
   "uitleg": "Mensen met een sterke prestatiebehoefte zoeken haalbare uitdagingen en directe feedback. Leertaken en ontwikkelpaden kun je daarop afstemmen.",
   "bronnen": [
    "McClelland, D. C. (1961). *The achieving society*. Van Nostrand. https://doi.org/10.1037/14359-000",
    "McClelland, D. C. (1978). Managing motivation to expand human freedom. *American Psychologist, 33*(3), 201–210. https://doi.org/10.1037/0003-066X.33.3.201"
   ]
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
   "uitleg": "Professionele kennis zit niet alleen in theorie, maar ontstaat in het omgaan met unieke, onzekere praktijksituaties. Opleiden betekent daarom ook leren reflecteren in de praktijk.",
   "bronnen": [
    "Schön, D. A. (1983). *The reflective practitioner: How professionals think in action*. Basic Books."
   ]
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
   "uitleg": "De leercyclus wordt veel gebruikt om leerprocessen te ontwerpen. Het idee dat je onderwijs moet aanpassen aan iemands vaste leerstijl, wordt door onderzoek echter niet ondersteund.",
   "bronnen": [
    "Kolb, D. A. (1984). *Experiential learning: Experience as the source of learning and development*. Prentice-Hall."
   ]
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
   "uitleg": "Leren en veranderen in organisaties lukt pas duurzaam als ook de basisaannames in beeld komen. Leiders spelen een sleutelrol in het vormen van cultuur.",
   "bronnen": [
    "Schein, E. H. (1985). *Organizational culture and leadership*. Jossey-Bass."
   ]
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
   "uitleg": "Een leeromgeving die keuzeruimte biedt, succeservaringen mogelijk maakt en verbinding stimuleert, leidt tot diepere en duurzamere motivatie dan belonen en straffen.",
   "bronnen": [
    "Deci, E. L., & Ryan, R. M. (1985). *Intrinsic motivation and self-determination in human behavior*. Plenum Press. https://doi.org/10.1007/978-1-4899-2271-7",
    "Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist, 55*(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68"
   ]
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
   "uitleg": "Door te onderzoeken wat energie geeft in plaats van problemen te analyseren, bouwen teams en organisaties aan gedeelde ambities en ontwikkeling.",
   "bronnen": [
    "Cooperrider, D. L. (1986). *Appreciative inquiry: Toward a methodology for understanding and enhancing organizational innovation* [Proefschrift, Case Western Reserve University].",
    "Cooperrider, D. L., & Srivastva, S. (1987). Appreciative inquiry in organizational life. In R. W. Woodman & W. A. Pasmore (Red.), *Research in organizational change and development* (Vol. 1, pp. 129–169). JAI Press."
   ]
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
   "uitleg": "Grenzen, bijvoorbeeld tussen school en werkplek, zijn niet alleen obstakels maar ook leerkansen. Waar perspectieven botsen, ontstaan nieuwe inzichten en werkwijzen.",
   "bronnen": [
    "Engeström, Y. (1987). *Learning by expanding: An activity-theoretical approach to developmental research*. Orienta-Konsultit.",
    "Engeström, Y., Engeström, R., & Kärkkäinen, M. (1995). Polycontextuality and boundary crossing in expert cognition: Learning and problem solving in complex work activities. *Learning and Instruction, 5*(4), 319–336. https://doi.org/10.1016/0959-4752(95)00021-6"
   ]
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
   "uitleg": "Teams die regelmatig reflecteren op hoe ze werken, presteren en vernieuwen beter. Omslagmomenten zijn kansen om het samen anders te doen.",
   "bronnen": [
    "Gersick, C. J. G. (1988). Time and transition in work teams: Toward a new model of group development. *Academy of Management Journal, 31*(1), 9–41. https://doi.org/10.5465/256496",
    "West, M. A. (1996). Reflexivity and work group effectiveness: A conceptual integration. In M. A. West (Red.), *Handbook of work group psychology* (pp. 555–579). Wiley."
   ]
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
   "uitleg": "In plaats van één juiste oplossing te zoeken, leren betrokkenen van elkaars perspectief. Zo komen ze tot verbeteringen die voor iedereen wenselijk en haalbaar zijn.",
   "bronnen": [
    "Checkland, P. (1981). *Systems thinking, systems practice*. Wiley.",
    "Checkland, P., & Scholes, J. (1990). *Soft systems methodology in action*. Wiley."
   ]
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
   "uitleg": "Leren gaat het best in een rijke, betekenisvolle context met ontspannen alertheid. Kanttekening: veel populaire 'breinclaims' zijn wetenschappelijk zwak onderbouwd.",
   "bronnen": [
    "Caine, R. N., & Caine, G. (1990). Understanding a brain-based approach to learning and teaching. *Educational Leadership, 48*(2), 66–70.",
    "Caine, R. N., & Caine, G. (1991). *Making connections: Teaching and the human brain*. Association for Supervision and Curriculum Development."
   ]
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
   "uitleg": "Dat gevoel groeit door invloed, grondige kennis en eigen investering. Wie zich eigenaar voelt van zijn werk of leren, neemt meer verantwoordelijkheid en zet zich meer in.",
   "bronnen": [
    "Pierce, J. L., Rubenfeld, S. A., & Morgan, S. (1991). Employee ownership: A conceptual model of process and effects. *Academy of Management Review, 16*(1), 121–144. https://doi.org/10.5465/amr.1991.4279000",
    "Pierce, J. L., Kostova, T., & Dirks, K. T. (2001). Toward a theory of psychological ownership in organizations. *Academy of Management Review, 26*(2), 298–310. https://doi.org/10.5465/amr.2001.4378028"
   ]
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
   "uitleg": "Het meeste leren op het werk is informeel. Het loont om deelname, samenwerking en toegang tot ervaren collega's bewust te organiseren.",
   "bronnen": [
    "Lave, J., & Wenger, E. (1991). *Situated learning: Legitimate peripheral participation*. Cambridge University Press. https://doi.org/10.1017/CBO9780511815355"
   ]
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
   "uitleg": "Hoe je tegenslag verklaart, bepaalt of je volhoudt of opgeeft. Door die verklaringsstijl te trainen, vergroten mensen hun veerkracht en leervermogen.",
   "bronnen": [
    "Seligman, M. E. P. (1991). *Learned optimism*. Alfred A. Knopf."
   ]
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
   "uitleg": "Leren is dan geen losse opleidingsactiviteit, maar verweven met strategie, structuur en dagelijks werk, zodat de organisatie zich blijvend kan aanpassen.",
   "bronnen": [
    "Pedler, M., Burgoyne, J., & Boydell, T. (1991). *The learning company: A strategy for sustainable development*. McGraw-Hill."
   ]
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
   "uitleg": "Expertise ontstaat niet vanzelf door ervaring of talent, maar door langdurig en gestructureerd oefenen. Coaching en feedback zijn daarbij essentieel.",
   "bronnen": [
    "Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. *Psychological Review, 100*(3), 363–406. https://doi.org/10.1037/0033-295X.100.3.363",
    "Ericsson, K. A. (Red.). (1996). *The road to excellence: The acquisition of expert performance in the arts and sciences, sports, and games*. Lawrence Erlbaum Associates."
   ]
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
   "uitleg": "In een kenniseconomie draait het om het vermogen om kennis te ontwikkelen en toe te passen. Dat vraagt een werkomgeving die leren uitlokt, niet alleen een opleidingsaanbod.",
   "bronnen": [
    "Kessels, J. W. M. (1996). *Het corporate curriculum* [Oratie]. Rijksuniversiteit Leiden."
   ]
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
   "uitleg": "Verandering en leren gebeuren in alledaagse gesprekken en relaties, niet in blauwdrukken. Leiders kunnen richting geven, maar niet sturen alsof de organisatie een machine is.",
   "bronnen": [
    "Stacey, R. D. (1996). *Complexity and creativity in organizations*. Berrett-Koehler.",
    "Stacey, R. D. (2001). *Complex responsive processes in organizations: Learning and knowledge creation*. Routledge."
   ]
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
   "uitleg": "Leren is sociaal en verbonden met identiteit en erbij horen. Organisaties kunnen zulke gemeenschappen stimuleren en faciliteren, maar niet afdwingen.",
   "bronnen": [
    "Wenger, E. (1998). *Communities of practice: Learning, meaning, and identity*. Cambridge University Press. https://doi.org/10.1017/CBO9780511803932"
   ]
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
   "uitleg": "Juist daar ligt de leerkans. Wie de moeite niet ontwijkt maar samen onderzoekt, komt tot gedeelde betekenis en werkelijke verandering (co-creatie).",
   "bronnen": [
    "Wierdsma, A. (1999). *Co-creatie van verandering*. Eburon."
   ]
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
   "uitleg": "Anders dan in een discussie, waarin je wint of verliest, maakt dialoog gezamenlijk leren mogelijk en brengt het onderliggende aannames aan het licht.",
   "bronnen": [
    "Isaacs, W. (1999). *Dialogue and the art of thinking together: A pioneering approach to communicating in business and in life*. Currency."
   ]
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
   "uitleg": "Het is een voorwaarde voor teamleren. Zonder psychologische veiligheid blijven fouten en ideeën verborgen en leert het team niet.",
   "bronnen": [
    "Edmondson, A. (1999). Psychological safety and learning behavior in work teams. *Administrative Science Quarterly, 44*(2), 350–383. https://doi.org/10.2307/2666999"
   ]
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
   "uitleg": "In plaats van te kiezen, leren organisaties en leiders beide kanten te omarmen en de spanning productief te maken. Dat vraagt het vermogen om met dubbelzinnigheid om te gaan.",
   "bronnen": [
    "Lewis, M. W. (2000). Exploring paradox: Toward a more comprehensive guide. *Academy of Management Review, 25*(4), 760–776. https://doi.org/10.5465/amr.2000.3707712",
    "Smith, W. K., & Lewis, M. W. (2011). Toward a theory of paradox: A dynamic equilibrium model of organizing. *Academy of Management Review, 36*(2), 381–403. https://doi.org/10.5465/amr.2009.0223"
   ]
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
   "uitleg": "De werkplek is een volwaardige leeromgeving, maar de kwaliteit hangt af van begeleiding, toegang tot uitdagende taken en de eigen keuzes van de lerende.",
   "bronnen": [
    "Billett, S. (2001). *Learning in the workplace: Strategies for effective practice*. Allen & Unwin."
   ]
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
   "uitleg": "Lerenden zijn geen consumenten van kennis maar makers ervan. Scholen en organisaties kunnen gemeenschappen worden die samen nieuwe kennis opbouwen.",
   "bronnen": [
    "Bereiter, C. (2002). *Education and mind in the knowledge age*. Lawrence Erlbaum Associates.",
    "Scardamalia, M., & Bereiter, C. (2006). Knowledge building: Theory, pedagogy, and technology. In R. K. Sawyer (Red.), *The Cambridge handbook of the learning sciences* (pp. 97–115). Cambridge University Press."
   ]
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
   "uitleg": "Regels en prikkels schieten tekort in complexe praktijken. Professionals ontwikkelen praktische wijsheid door ervaring, reflectie en goede voorbeelden, en hebben daarvoor ruimte voor eigen oordeel nodig.",
   "bronnen": [
    "Schwartz, B., & Sharpe, K. E. (2006). Practical wisdom: Aristotle meets positive psychology. *Journal of Happiness Studies, 7*(3), 377–395. https://doi.org/10.1007/s10902-005-3651-y",
    "Schwartz, B., & Sharpe, K. (2010). *Practical wisdom: The right way to do the right thing*. Riverhead Books."
   ]
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
   "uitleg": "In scholen en organisaties dragen velen bij aan leiderschap. Dat vergroot het eigenaarschap en het vermogen om samen te leren en te verbeteren.",
   "bronnen": [
    "Spillane, J. P., Halverson, R., & Diamond, J. B. (2004). Towards a theory of leadership practice: A distributed perspective. *Journal of Curriculum Studies, 36*(1), 3–34. https://doi.org/10.1080/0022027032000106726",
    "Spillane, J. P. (2006). *Distributed leadership*. Jossey-Bass."
   ]
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
   "uitleg": "Tegenover sturing op meetbare resultaten staat het gesprek over waarden en betekenis. Leren omvat dan ook samen nadenken over wat goed werk is.",
   "bronnen": [
    "Kunneman, H. (2005). *Voorbij het dikke-ik: Bouwstenen voor een kritisch humanisme*. Humanistics University Press."
   ]
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
   "uitleg": "Een groeimindset maakt dat mensen uitdagingen aangaan en van fouten leren. Feedback op inzet en aanpak, in plaats van op talent, helpt die houding te versterken.",
   "bronnen": [
    "Dweck, C. S. (2006). *Mindset: The new psychology of success*. Random House."
   ]
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
   "uitleg": "Professioneel leren is ingroeien in zo'n frame. Simulaties en realistische rollen, bijvoorbeeld in games, helpen lerenden te denken als een professional.",
   "bronnen": [
    "Shaffer, D. W. (2006a). Epistemic frames for epistemic games. *Computers & Education, 46*(3), 223–234. https://doi.org/10.1016/j.compedu.2005.11.003",
    "Shaffer, D. W. (2006b). *How computer games help children learn*. Palgrave Macmillan. https://doi.org/10.1057/9780230601994"
   ]
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
   "uitleg": "Diepgaande vernieuwing vraagt meer dan analyseren. Met een open blik, open hart en open wil leer je van de toekomst die zich aandient in plaats van alleen van het verleden.",
   "bronnen": [
    "Scharmer, C. O. (2007). *Theory U: Leading from the future as it emerges*. Society for Organizational Learning."
   ]
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
   "uitleg": "Feedback hoort bij de sterkste invloeden op leren, maar alleen als ze gaat over de taak, de aanpak of de zelfsturing, en niet over de persoon.",
   "bronnen": [
    "Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research, 77*(1), 81–112. https://doi.org/10.3102/003465430298487"
   ]
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
   "uitleg": "Kwetsbaarheid is de bron van moed, creativiteit en verbinding. Wie zich niet kwetsbaar durft op te stellen, vermijdt fouten en feedback en leert daardoor minder.",
   "bronnen": [
    "Brown, B. (2006). Shame resilience theory: A grounded theory study on women and shame. *Families in Society: The Journal of Contemporary Social Services, 87*(1), 43–52. https://doi.org/10.1606/1044-3894.3483",
    "Brown, B. (2012). *Daring greatly: How the courage to be vulnerable transforms the way we live, love, parent, and lead*. Gotham Books."
   ]
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
   "uitleg": "Vakmanschap groeit door herhaling, door het omgaan met weerstand en door overdracht van meester op gezel. Het vraagt tijd en ruimte voor kwaliteit.",
   "bronnen": [
    "Sennett, R. (2008). *The craftsman*. Yale University Press."
   ]
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
   "uitleg": "Ook ervaren professionals maken denkfouten. Bewustzijn ervan, feedback en gestructureerde reflectie helpen om betere beslissingen te nemen en scherper te leren van ervaring.",
   "bronnen": [
    "Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. *Science, 185*(4157), 1124–1131. https://doi.org/10.1126/science.185.4157.1124",
    "Kahneman, D. (2011). *Thinking, fast and slow*. Farrar, Straus and Giroux."
   ]
  },
  {
   "id": "t-1934-vygotsky",
   "jaar": 1934,
   "begrip": "Zone van naaste ontwikkeling",
   "begrip_vertaling": "Zone of proximal development",
   "personen": [
    "p-vygotsky"
   ],
   "extra": true,
   "omschrijving": "Het verschil tussen wat een lerende zelfstandig kan en wat hij kan met hulp van een meer ervaren ander.",
   "uitleg": "Wat iemand vandaag met hulp kan, kan hij morgen alleen. Begeleiding werkt het best als ze zich richt op wat net buiten bereik ligt.",
   "bronnen": [
    "Vygotsky, L. S. (1934). *Myshlenie i rech'* [Denken en spreken]. Sotsekgiz.",
    "Vygotsky, L. S. (1978). *Mind in society: The development of higher psychological processes* (M. Cole, V. John-Steiner, S. Scribner, & E. Souberman, Red.). Harvard University Press."
   ]
  },
  {
   "id": "t-1936-piaget",
   "jaar": 1936,
   "begrip": "Cognitieve ontwikkeling",
   "begrip_vertaling": "Cognitive development",
   "personen": [
    "p-piaget"
   ],
   "extra": true,
   "omschrijving": "Kinderen bouwen hun kennis actief op door te handelen en te ontdekken, in opeenvolgende fasen. Nieuwe ervaringen worden ingepast in bestaande denkschema's of dwingen tot aanpassing ervan.",
   "uitleg": "Leren is actief construeren, geen passief opnemen. Deze constructivistische kijk ligt onder veel ervaringsgericht en onderzoekend leren.",
   "bronnen": [
    "Piaget, J. (1936). *La naissance de l'intelligence chez l'enfant* [De geboorte van de intelligentie bij het kind]. Delachaux et Niestlé."
   ]
  },
  {
   "id": "t-1943-maslow",
   "jaar": 1943,
   "begrip": "Behoeftehiërarchie",
   "begrip_vertaling": "Hierarchy of needs",
   "personen": [
    "p-maslow"
   ],
   "extra": true,
   "omschrijving": "Menselijke behoeften zijn geordend van basaal naar hoger: lichamelijke behoeften, veiligheid, erbij horen, waardering en zelfactualisatie.",
   "uitleg": "Wie zich onveilig of niet gezien voelt, komt minder toe aan leren en groeien. Het model is populair, maar de strikte volgorde wordt door onderzoek niet bevestigd.",
   "bronnen": [
    "Maslow, A. H. (1943). A theory of human motivation. *Psychological Review, 50*(4), 370–396. https://doi.org/10.1037/h0054346"
   ]
  },
  {
   "id": "t-1959-kirkpatrick",
   "jaar": 1959,
   "begrip": "Vier evaluatieniveaus",
   "begrip_vertaling": "Four levels of evaluation",
   "personen": [
    "p-kirkpatrick"
   ],
   "extra": true,
   "omschrijving": "Een model om opleidingen te evalueren op vier niveaus: reactie, leren, gedrag en resultaten.",
   "uitleg": "Het helpt om verder te kijken dan tevredenheid na afloop: gebruiken mensen het geleerde in hun werk, en levert dat iets op voor de organisatie?",
   "bronnen": [
    "Kirkpatrick, D. L. (1959). Techniques for evaluating training programs. *Journal of the American Society of Training Directors, 13*(11), 3–9.",
    "Kirkpatrick, D. L. (1994). *Evaluating training programs: The four levels*. Berrett-Koehler."
   ]
  },
  {
   "id": "t-1970-knowles",
   "jaar": 1970,
   "begrip": "Andragogie",
   "begrip_vertaling": "Andragogy",
   "personen": [
    "p-knowles"
   ],
   "extra": true,
   "omschrijving": "De kunst en wetenschap van het helpen van volwassenen bij het leren, uitgaande van hun zelfsturing, hun ervaring en hun behoefte aan direct bruikbare kennis.",
   "uitleg": "Volwassenen leren het best als ze invloed hebben op wat en hoe ze leren, en als het leren aansluit bij hun ervaring en bij vragen uit hun werk of leven.",
   "bronnen": [
    "Knowles, M. S. (1970). *The modern practice of adult education: Andragogy versus pedagogy*. Association Press."
   ]
  },
  {
   "id": "t-1971-revans",
   "jaar": 1971,
   "begrip": "Action learning",
   "begrip_vertaling": "Actieleren",
   "personen": [
    "p-revans"
   ],
   "extra": true,
   "omschrijving": "Leren in kleine groepen die met echte, onopgeloste vraagstukken aan de slag gaan, waarbij goede vragen belangrijker zijn dan kennis overdragen.",
   "uitleg": "Revans vatte het samen als L = P + Q: leren is bestaande kennis plus kritisch vragen. Mensen ontwikkelen zich het meest door samen echte problemen aan te pakken.",
   "bronnen": [
    "Revans, R. W. (1971). *Developing effective managers: A new approach to business education*. Praeger.",
    "Revans, R. W. (1982). *The origins and growth of action learning*. Chartwell-Bratt."
   ]
  },
  {
   "id": "t-1975-leontjev",
   "jaar": 1975,
   "begrip": "Activiteitstheorie",
   "begrip_vertaling": "Activity theory",
   "personen": [
    "p-leontjev"
   ],
   "extra": true,
   "omschrijving": "Menselijk handelen begrijp je vanuit de activiteit waarin het plaatsvindt: een geheel van doelgerichte handelingen, gedreven door een motief en gemedieerd door hulpmiddelen.",
   "uitleg": "Leren is niet los te zien van de activiteit en de gemeenschap waarin het gebeurt. Engeström bouwde hierop voort met zijn werk over expansief leren en grensoverschrijding.",
   "bronnen": [
    "Leont'ev, A. N. (1975). *Deyatel'nost', soznanie, lichnost'* [Activiteit, bewustzijn, persoonlijkheid]. Politizdat.",
    "Leont'ev, A. N. (1978). *Activity, consciousness, and personality* (M. J. Hall, Vert.). Prentice-Hall. (Oorspronkelijk werk gepubliceerd 1975)"
   ]
  },
  {
   "id": "t-1976-luria",
   "jaar": 1976,
   "begrip": "Cultuur en denken",
   "begrip_vertaling": "Culture and cognition",
   "personen": [
    "p-luria"
   ],
   "extra": true,
   "omschrijving": "Hoe mensen denken, redeneren en indelen hangt samen met hun culturele omgeving, zoals scholing en werk. Luria liet dit zien met veldonderzoek in Centraal-Azië.",
   "uitleg": "Denkvaardigheden liggen niet vast, maar ontwikkelen zich door onderwijs en sociale praktijken. Wat mensen leren, vormt ook hoe ze leren denken.",
   "bronnen": [
    "Luria, A. R. (1976). *Cognitive development: Its cultural and social foundations* (M. Cole, Red.; M. Lopez-Morillas & L. Solotaroff, Vert.). Harvard University Press. (Oorspronkelijk werk gepubliceerd 1974)"
   ]
  },
  {
   "id": "t-1976-wood-bruner-ross",
   "jaar": 1976,
   "begrip": "Scaffolding",
   "begrip_vertaling": "Tijdelijke ondersteuning",
   "personen": [
    "p-wood",
    "p-bruner",
    "p-ross"
   ],
   "extra": true,
   "omschrijving": "Tijdelijke ondersteuning door een meer ervaren ander, waarmee een lerende een taak uitvoert die hij nog niet alleen kan. De steun wordt afgebouwd naarmate hij meer zelf kan.",
   "uitleg": "Goede begeleiding neemt niet over, maar biedt net genoeg structuur en haalt die stap voor stap weg.",
   "bronnen": [
    "Wood, D., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem solving. *Journal of Child Psychology and Psychiatry, 17*(2), 89–100. https://doi.org/10.1111/j.1469-7610.1976.tb00381.x"
   ]
  },
  {
   "id": "t-1977-bandura",
   "jaar": 1977,
   "begrip": "Self-efficacy",
   "begrip_vertaling": "Zelfeffectiviteit",
   "personen": [
    "p-bandura"
   ],
   "extra": true,
   "omschrijving": "Het vertrouwen dat je een bepaalde taak met succes kunt uitvoeren. Het groeit vooral door eigen succeservaringen, door anderen te zien slagen en door aanmoediging.",
   "uitleg": "Wie in eigen kunnen gelooft, zet door bij tegenslag en kiest voor uitdaging. Haalbare successen en goede voorbeelden versterken dat vertrouwen.",
   "bronnen": [
    "Bandura, A. (1977). Self-efficacy: Toward a unifying theory of behavioral change. *Psychological Review, 84*(2), 191–215. https://doi.org/10.1037/0033-295X.84.2.191"
   ]
  },
  {
   "id": "t-1978-mezirow",
   "jaar": 1978,
   "begrip": "Transformatief leren",
   "begrip_vertaling": "Transformative learning",
   "personen": [
    "p-mezirow"
   ],
   "extra": true,
   "omschrijving": "Leren waarbij volwassenen hun vanzelfsprekende referentiekaders kritisch onderzoeken en veranderen, vaak na een ervaring die niet in hun bestaande beeld past.",
   "uitleg": "Diep leren gaat verder dan kennis toevoegen: het verandert hoe je naar jezelf en de wereld kijkt. Kritische reflectie en dialoog zijn daarbij de motor.",
   "bronnen": [
    "Mezirow, J. (1978). Perspective transformation. *Adult Education, 28*(2), 100–110. https://doi.org/10.1177/074171367802800202",
    "Mezirow, J. (1991). *Transformative dimensions of adult learning*. Jossey-Bass."
   ]
  },
  {
   "id": "t-1980-dreyfus",
   "jaar": 1980,
   "begrip": "Van beginner tot expert",
   "begrip_vertaling": "Novice to expert",
   "personen": [
    "p-h-dreyfus",
    "p-s-dreyfus"
   ],
   "extra": true,
   "omschrijving": "Vaardigheid ontwikkelt zich in vijf stadia, van beginner via gevorderde beginner, bekwaam en vaardig tot expert: van regels volgen naar intuïtief handelen in de situatie.",
   "uitleg": "Beginners hebben regels en structuur nodig, experts juist ruimte voor eigen oordeel. Opleiden vraagt daarom per stadium een andere aanpak.",
   "bronnen": [
    "Dreyfus, S. E., & Dreyfus, H. L. (1980). *A five-stage model of the mental activities involved in directed skill acquisition* (Rapport nr. ORC 80-2). Operations Research Center, University of California, Berkeley.",
    "Dreyfus, H. L., & Dreyfus, S. E. (1986). *Mind over machine: The power of human intuition and expertise in the era of the computer*. Free Press."
   ]
  },
  {
   "id": "t-1982-kegan",
   "jaar": 1982,
   "begrip": "Ontwikkeling van volwassenen",
   "begrip_vertaling": "Adult development",
   "personen": [
    "p-kegan"
   ],
   "extra": true,
   "omschrijving": "Volwassenen blijven zich ontwikkelen in de manier waarop ze betekenis geven: van afhankelijk van de verwachtingen van anderen naar zelfsturend en uiteindelijk zelftransformerend denken.",
   "uitleg": "Veel eisen in het werk vragen een complexere manier van denken dan mensen al hebben. Ontwikkelen is dan niet meer weten, maar anders leren kijken.",
   "bronnen": [
    "Kegan, R. (1982). *The evolving self: Problem and process in human development*. Harvard University Press.",
    "Kegan, R. (1994). *In over our heads: The mental demands of modern life*. Harvard University Press."
   ]
  },
  {
   "id": "t-1988-sweller",
   "jaar": 1988,
   "begrip": "Cognitieve belasting",
   "begrip_vertaling": "Cognitive load",
   "personen": [
    "p-sweller"
   ],
   "extra": true,
   "omschrijving": "Het werkgeheugen kan maar weinig nieuwe informatie tegelijk verwerken. Instructie moet onnodige belasting beperken, zodat er ruimte is om kennis op te bouwen.",
   "uitleg": "Beginners leren meer van uitgewerkte voorbeelden en stapsgewijze uitleg dan van zelf ontdekken. Naarmate de expertise groeit, kan de begeleiding afnemen.",
   "bronnen": [
    "Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science, 12*(2), 257–285. https://doi.org/10.1207/s15516709cog1202_4"
   ]
  },
  {
   "id": "t-1989-collins-brown-newman",
   "jaar": 1989,
   "begrip": "Cognitive apprenticeship",
   "begrip_vertaling": "Cognitief leerlingschap",
   "personen": [
    "p-collins",
    "p-js-brown",
    "p-newman"
   ],
   "extra": true,
   "omschrijving": "Het meester-gezelmodel toegepast op denkvaardigheden: de expert maakt zijn denken zichtbaar, coacht, biedt steun die wordt afgebouwd en laat de lerende steeds meer zelf verwoorden en verkennen.",
   "uitleg": "Veel expertise zit in denkprocessen die je niet ziet. Door hardop te denken en samen te oefenen maken professionals hun vakmanschap overdraagbaar.",
   "bronnen": [
    "Collins, A., Brown, J. S., & Newman, S. E. (1989). Cognitive apprenticeship: Teaching the crafts of reading, writing, and mathematics. In L. B. Resnick (Red.), *Knowing, learning, and instruction: Essays in honor of Robert Glaser* (pp. 453–494). Lawrence Erlbaum Associates."
   ]
  },
  {
   "id": "t-1990-senge",
   "jaar": 1990,
   "begrip": "Systeemdenken",
   "begrip_vertaling": "Systems thinking",
   "personen": [
    "p-senge"
   ],
   "extra": true,
   "omschrijving": "De vijfde discipline die persoonlijk meesterschap, mentale modellen, gedeelde visie en teamleren verbindt: kijken naar samenhang en wisselwerking in plaats van naar losse onderdelen.",
   "uitleg": "Organisaties leren alleen als mensen hun aannames onderzoeken, samen leren en de samenhang in het geheel zien. Senge maakte de lerende organisatie wereldwijd bekend.",
   "bronnen": [
    "Senge, P. M. (1990). *The fifth discipline: The art and practice of the learning organization*. Doubleday/Currency."
   ]
  },
  {
   "id": "t-1995-nonaka-takeuchi",
   "jaar": 1995,
   "begrip": "Kennisspiraal",
   "begrip_vertaling": "Knowledge spiral (SECI model)",
   "personen": [
    "p-nonaka",
    "p-takeuchi"
   ],
   "extra": true,
   "omschrijving": "Nieuwe kennis ontstaat in organisaties door een spiraal van omzettingen tussen stilzwijgende en expliciete kennis: socialisatie, externalisatie, combinatie en internalisatie.",
   "uitleg": "Vernieuwing vraagt dat mensen hun ervaringskennis delen en verwoorden, zodat anderen erop kunnen voortbouwen. Samenwerken, dialoog en experiment zijn daarvoor nodig.",
   "bronnen": [
    "Nonaka, I., & Takeuchi, H. (1995). *The knowledge-creating company: How Japanese companies create the dynamics of innovation*. Oxford University Press."
   ]
  },
  {
   "id": "t-1998-black-wiliam",
   "jaar": 1998,
   "begrip": "Formatief evalueren",
   "begrip_vertaling": "Formative assessment",
   "personen": [
    "p-black",
    "p-wiliam"
   ],
   "extra": true,
   "omschrijving": "Tijdens het leren informatie verzamelen over waar de lerende staat, en die direct gebruiken om het onderwijs en het leren bij te sturen.",
   "uitleg": "Goed formatief evalueren kan leerresultaten flink verbeteren. Het draait om duidelijke doelen, goede vragen en feedback waar de lerende iets mee kan.",
   "bronnen": [
    "Black, P., & Wiliam, D. (1998). Assessment and classroom learning. *Assessment in Education: Principles, Policy & Practice, 5*(1), 7–74. https://doi.org/10.1080/0969595980050102"
   ]
  },
  {
   "id": "t-2004-eraut",
   "jaar": 2004,
   "begrip": "Leren in het werk",
   "begrip_vertaling": "Learning at work",
   "personen": [
    "p-eraut"
   ],
   "extra": true,
   "omschrijving": "Hoeveel mensen in hun werk leren, hangt af van uitdaging en waarde van het werk, vertrouwen en betrokkenheid, en feedback en steun, en van hoe het werk is ingericht.",
   "uitleg": "Het meeste leren in organisaties gebeurt ongemerkt tijdens het werk. Leidinggevenden beïnvloeden dat vooral via de taken die ze geven en de steun en feedback die ze bieden.",
   "bronnen": [
    "Eraut, M. (2004). Informal learning in the workplace. *Studies in Continuing Education, 26*(2), 247–273. https://doi.org/10.1080/158037042000225245"
   ]
  },
  {
   "id": "t-2004-korthagen",
   "jaar": 2004,
   "begrip": "Kernreflectie",
   "begrip_vertaling": "Core reflection",
   "personen": [
    "p-korthagen"
   ],
   "extra": true,
   "omschrijving": "Reflectie die niet alleen gaat over gedrag en vaardigheden, maar ook over overtuigingen, identiteit en idealen: de binnenste lagen van het zogenoemde ui-model. Ze vertrekt vanuit kernkwaliteiten.",
   "uitleg": "Professionals worden het sterkst als hun handelen verbonden is met wie ze zijn en wat hen drijft. Reflecteren op kwaliteiten in plaats van tekortkomingen maakt ruimte voor groei.",
   "bronnen": [
    "Korthagen, F. A. J. (2004). In search of the essence of a good teacher: Towards a more holistic approach in teacher education. *Teaching and Teacher Education, 20*(1), 77–97. https://doi.org/10.1016/j.tate.2003.10.002",
    "Korthagen, F., & Vasalos, A. (2005). Levels in reflection: Core reflection as a means to enhance professional growth. *Teachers and Teaching, 11*(1), 47–71. https://doi.org/10.1080/1354060042000337093"
   ]
  },
  {
   "id": "t-2006-ruijters",
   "jaar": 2006,
   "begrip": "Leervoorkeuren",
   "begrip_vertaling": "Learning preferences",
   "personen": [
    "p-ruijters"
   ],
   "extra": true,
   "omschrijving": "Vijf manieren waarop professionals het liefst leren: kunstafkijken, participeren, kennis verwerven, oefenen en ontdekken.",
   "uitleg": "Een voorkeur zegt iets over wat iemand aanspreekt, niet over wat hij kan. Wie leervoorkeuren kent, kan leren beter afstemmen en bewust ook andere manieren uitproberen.",
   "bronnen": [
    "Ruijters, M. C. P. (2006). *Liefde voor leren: Over diversiteit van leren en ontwikkelen in en van organisaties* [Proefschrift, Universiteit Utrecht]. Kluwer."
   ]
  },
  {
   "id": "t-2010-biesta",
   "jaar": 2010,
   "begrip": "Doeldomeinen van onderwijs",
   "begrip_vertaling": "Domains of educational purpose",
   "personen": [
    "p-biesta"
   ],
   "extra": true,
   "omschrijving": "Onderwijs heeft drie doeldomeinen: kwalificatie (kennis en vaardigheden), socialisatie (ingroeien in tradities en praktijken) en subjectificatie (zelfstandig en verantwoordelijk mens worden).",
   "uitleg": "Wie alleen meet wat meetbaar is, verliest de vraag naar goed onderwijs uit het oog. Ook in organisaties gaat leren niet alleen over vaardigheden, maar ook over vorming en eigen oordeel.",
   "bronnen": [
    "Biesta, G. J. J. (2009). Good education in an age of measurement: On the need to reconnect with the question of purpose in education. *Educational Assessment, Evaluation and Accountability, 21*(1), 33–46. https://doi.org/10.1007/s11092-008-9064-9",
    "Biesta, G. J. J. (2010). *Good education in an age of measurement: Ethics, politics, democracy*. Paradigm Publishers."
   ]
  }
 ],
 "relaties": [
  {
   "id": "r-01",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
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
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1999-wierdsma",
   "naar": "t-1999-isaacs"
  },
  {
   "id": "r-14",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
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
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2006-dweck",
   "naar": "t-2006-shaffer"
  },
  {
   "id": "r-17",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2007-scharmer",
   "naar": "t-2007-hattie"
  },
  {
   "id": "r-18",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2008-brown",
   "naar": "t-2008-sennett"
  },
  {
   "id": "r-19",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1999-wierdsma",
   "naar": "t-1999-edmondson"
  },
  {
   "id": "r-20",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1970-freidson",
   "naar": "t-1970-knowles",
   "extra": true
  },
  {
   "id": "r-21",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1975-csikszentmihalyi",
   "naar": "t-1975-leontjev",
   "extra": true
  },
  {
   "id": "r-22",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1976-luria",
   "naar": "t-1976-wood-bruner-ross",
   "extra": true
  },
  {
   "id": "r-23",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1977-bourdieu",
   "naar": "t-1977-bandura",
   "extra": true
  },
  {
   "id": "r-24",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1978-mcclelland",
   "naar": "t-1978-mezirow",
   "extra": true
  },
  {
   "id": "r-25",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1988-west-gersick",
   "naar": "t-1988-sweller",
   "extra": true
  },
  {
   "id": "r-26",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1990-checkland",
   "naar": "t-1990-senge",
   "extra": true
  },
  {
   "id": "r-27",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1990-caine",
   "naar": "t-1990-senge",
   "extra": true
  },
  {
   "id": "r-28",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-1998-wenger",
   "naar": "t-1998-black-wiliam",
   "extra": true
  },
  {
   "id": "r-29",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2004-schwartz",
   "naar": "t-2004-eraut",
   "extra": true
  },
  {
   "id": "r-30",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2004-spillane",
   "naar": "t-2004-eraut",
   "extra": true
  },
  {
   "id": "r-31",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2004-schwartz",
   "naar": "t-2004-korthagen",
   "extra": true
  },
  {
   "id": "r-32",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2004-spillane",
   "naar": "t-2004-korthagen",
   "extra": true
  },
  {
   "id": "r-33",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2004-eraut",
   "naar": "t-2004-korthagen",
   "extra": true
  },
  {
   "id": "r-34",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2006-dweck",
   "naar": "t-2006-ruijters",
   "extra": true
  },
  {
   "id": "r-35",
   "type": "gedeelde_lijn",
   "richting": "tweeweg",
   "van": "t-2006-shaffer",
   "naar": "t-2006-ruijters",
   "extra": true
  }
 ],
 "begripsanalyse": {
  "toelichting": "Inhoudelijke analyse van de verbanden tussen de begrippen, bedoeld voor een diagram met pijlen. Dit is een interpretatie door Claude op basis van de literatuur, geen weergave van het boek. 'van' en 'naar' verwijzen naar item-id's. Bij eenweg-relaties wijst de pijl van 'van' naar 'naar'; bij tweeweg-relaties zijn 'van' en 'naar' uitwisselbaar.",
  "relatietypes": {
   "basis_voor": {
    "label": "is basis voor",
    "richting": "eenweg",
    "betekenis": "Het begrip 'naar' bouwt inhoudelijk of historisch voort op het begrip 'van'."
   },
   "voorwaarde_voor": {
    "label": "is voorwaarde voor",
    "richting": "eenweg",
    "betekenis": "Het begrip 'van' is nodig om het begrip 'naar' te laten ontstaan of werken."
   },
   "versterkt": {
    "label": "versterkt",
    "richting": "eenweg",
    "betekenis": "Het begrip 'van' bevordert of versterkt het begrip 'naar'."
   },
   "belemmert": {
    "label": "belemmert",
    "richting": "eenweg",
    "betekenis": "Het begrip 'van' kan het begrip 'naar' in de weg staan."
   },
   "sluit_aan_bij": {
    "label": "sluit aan bij",
    "richting": "tweeweg",
    "betekenis": "De begrippen zijn verwant of vullen elkaar aan, zonder dat het ene op het andere voortbouwt."
   }
  },
  "themas": [
   {
    "id": "thema-reflectie",
    "naam": "Reflectie en professionaliteit",
    "omschrijving": "Hoe professionals nadenken over hun handelen, kennis en waarden.",
    "items": [
     "t-1933-dewey",
     "t-1958-polanyi",
     "t-1967-freire",
     "t-1970-freidson",
     "t-1974-schon-argyris",
     "t-1983-schon",
     "t-2004-schwartz",
     "t-2005-kunneman",
     "t-2006-shaffer",
     "t-2011-kahneman",
     "t-1978-mezirow",
     "t-1980-dreyfus",
     "t-1982-kegan",
     "t-2004-korthagen",
     "t-2010-biesta"
    ]
   },
   {
    "id": "thema-motivatie",
    "naam": "Motivatie en persoonlijke groei",
    "omschrijving": "Wat mensen drijft om te leren en hoe individuele ontwikkeling verloopt.",
    "items": [
     "t-1938-huizinga",
     "t-1950-erikson",
     "t-1956-bloom-shulman",
     "t-1960-berlyne",
     "t-1975-csikszentmihalyi",
     "t-1978-mcclelland",
     "t-1984-kolb",
     "t-1985-deci-ryan",
     "t-1990-caine",
     "t-1991-seligman",
     "t-1996-ericsson",
     "t-2006-dweck",
     "t-2007-hattie",
     "t-1936-piaget",
     "t-1943-maslow",
     "t-1970-knowles",
     "t-1977-bandura",
     "t-1988-sweller",
     "t-1998-black-wiliam",
     "t-2006-ruijters"
    ]
   },
   {
    "id": "thema-praktijk",
    "naam": "Leren in de praktijk",
    "omschrijving": "Leren op de werkplek, in gemeenschappen en tussen praktijken.",
    "items": [
     "t-1987-engestrom",
     "t-1991-lave",
     "t-1996-kessels",
     "t-1998-wenger",
     "t-2001-billett",
     "t-2002-bereiter-scardamalia",
     "t-2008-sennett",
     "t-1934-vygotsky",
     "t-1975-leontjev",
     "t-1976-luria",
     "t-1976-wood-bruner-ross",
     "t-1989-collins-brown-newman",
     "t-1995-nonaka-takeuchi",
     "t-2004-eraut"
    ]
   },
   {
    "id": "thema-relatie",
    "naam": "Relatie, dialoog en team",
    "omschrijving": "De kwaliteit van contact en gesprek als voorwaarde voor samen leren.",
    "items": [
     "t-1923-buber",
     "t-1958-berne",
     "t-1988-west-gersick",
     "t-1999-wierdsma",
     "t-1999-isaacs",
     "t-1999-edmondson",
     "t-2008-brown"
    ]
   },
   {
    "id": "thema-organisatie",
    "naam": "Cultuur, organisatie en verandering",
    "omschrijving": "Hoe organisaties leren en veranderen, en wat daarbij helpt of hindert.",
    "items": [
     "t-1933-lewin",
     "t-1960-menzies-lyth",
     "t-1969-weick",
     "t-1977-bourdieu",
     "t-1985-schein",
     "t-1986-cooperrider",
     "t-1990-checkland",
     "t-1991-pierce",
     "t-1991-pedler",
     "t-1997-stacey",
     "t-2000-smith-lewis",
     "t-2004-spillane",
     "t-2007-scharmer",
     "t-1959-kirkpatrick",
     "t-1971-revans",
     "t-1990-senge"
    ]
   }
  ],
  "relaties": [
   {
    "id": "b-01",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1933-dewey",
    "naar": "t-1983-schon",
    "toelichting": "Schön bouwde zijn reflectieve professional voort op Deweys idee van reflectief denken."
   },
   {
    "id": "b-02",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1933-dewey",
    "naar": "t-1984-kolb",
    "toelichting": "Kolbs leercyclus is gebaseerd op het ervaringsleren van Dewey."
   },
   {
    "id": "b-03",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1933-lewin",
    "naar": "t-1984-kolb",
    "toelichting": "Kolb ontleende de cyclus van ervaren, reflecteren en experimenteren mede aan Lewins actieonderzoek."
   },
   {
    "id": "b-04",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1933-lewin",
    "naar": "t-1974-schon-argyris",
    "toelichting": "Argyris en Schön bouwden met hun 'action science' voort op Lewins actieonderzoek."
   },
   {
    "id": "b-05",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1933-dewey",
    "naar": "t-1967-freire",
    "toelichting": "Kritische reflectie breidt reflectie uit met aandacht voor macht en maatschappelijke context."
   },
   {
    "id": "b-06",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1958-polanyi",
    "naar": "t-1983-schon",
    "toelichting": "Schöns 'knowing-in-action' bouwt voort op Polanyi's stilzwijgende kennis."
   },
   {
    "id": "b-07",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1958-polanyi",
    "naar": "t-1996-kessels",
    "toelichting": "Kennisproductiviteit draait om het benutten van stilzwijgende kennis in het werk."
   },
   {
    "id": "b-08",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1974-schon-argyris",
    "naar": "t-1983-schon",
    "toelichting": "Na het onderzoek naar double-loop leren richtte Schön zich op de reflectie van professionals."
   },
   {
    "id": "b-09",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1974-schon-argyris",
    "naar": "t-1991-pedler",
    "toelichting": "De lerende organisatie bouwt voort op theorieën over organisatieleren, zoals double-loop leren."
   },
   {
    "id": "b-10",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1991-lave",
    "naar": "t-1998-wenger",
    "toelichting": "Wenger werkte het gesitueerd leren van Lave (en Wenger) uit tot praktijkgemeenschappen."
   },
   {
    "id": "b-11",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1991-lave",
    "naar": "t-2001-billett",
    "toelichting": "Billetts werkplekleren bouwt voort op het idee dat leren gesitueerd is in de praktijk."
   },
   {
    "id": "b-12",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1970-freidson",
    "naar": "t-2005-kunneman",
    "toelichting": "Normatieve professionaliteit voegt morele vragen toe aan het klassieke idee van professionaliteit."
   },
   {
    "id": "b-13",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1983-schon",
    "naar": "t-2006-shaffer",
    "toelichting": "Shaffer baseerde professionele frames mede op Schöns reflectieve praktijk."
   },
   {
    "id": "b-14",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1998-wenger",
    "naar": "t-2006-shaffer",
    "toelichting": "Een professioneel frame is de manier van kijken en denken van een beroepsgemeenschap."
   },
   {
    "id": "b-15",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1923-buber",
    "naar": "t-1999-isaacs",
    "toelichting": "Dialoog als samen denken bouwt voort op Bubers idee van de echte ontmoeting."
   },
   {
    "id": "b-16",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1933-lewin",
    "naar": "t-1990-checkland",
    "toelichting": "Checkland ontwikkelde de Soft Systems Methodology via actieonderzoek in organisaties."
   },
   {
    "id": "b-17",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1933-lewin",
    "naar": "t-1986-cooperrider",
    "toelichting": "Appreciative Inquiry ontstond als waarderend alternatief voor probleemgericht actieonderzoek."
   },
   {
    "id": "b-18",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1999-isaacs",
    "naar": "t-2007-scharmer",
    "toelichting": "Theory U bouwt voort op het werk aan dialoog binnen de beweging rond de lerende organisatie."
   },
   {
    "id": "b-19",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1960-berlyne",
    "naar": "t-1985-deci-ryan",
    "toelichting": "Onderzoek naar motivatie van binnenuit bouwde voort op nieuwsgierigheid als aangeboren drijfveer."
   },
   {
    "id": "b-20",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1991-seligman",
    "naar": "t-2006-dweck",
    "toelichting": "Seligmans onderzoek naar aangeleerde hulpeloosheid, waaruit aangeleerd optimisme voortkwam, was een startpunt voor Dwecks onderzoek naar mindset."
   },
   {
    "id": "b-21",
    "type": "voorwaarde_voor",
    "richting": "eenweg",
    "van": "t-1999-edmondson",
    "naar": "t-1988-west-gersick",
    "toelichting": "Zonder psychologische veiligheid durven teams niet samen te reflecteren en te leren."
   },
   {
    "id": "b-22",
    "type": "voorwaarde_voor",
    "richting": "eenweg",
    "van": "t-1999-edmondson",
    "naar": "t-2008-brown",
    "toelichting": "In een veilig team durven mensen zich kwetsbaar op te stellen."
   },
   {
    "id": "b-23",
    "type": "voorwaarde_voor",
    "richting": "eenweg",
    "van": "t-2007-hattie",
    "naar": "t-1996-ericsson",
    "toelichting": "Doelbewust oefenen werkt alleen met directe feedback."
   },
   {
    "id": "b-24",
    "type": "versterkt",
    "richting": "eenweg",
    "van": "t-1985-deci-ryan",
    "naar": "t-1991-pierce",
    "toelichting": "Autonomie en invloed versterken het gevoel van eigenaarschap."
   },
   {
    "id": "b-25",
    "type": "versterkt",
    "richting": "eenweg",
    "van": "t-2004-spillane",
    "naar": "t-1991-pierce",
    "toelichting": "Wie leiderschap deelt, geeft anderen invloed en daarmee eigenaarschap."
   },
   {
    "id": "b-26",
    "type": "versterkt",
    "richting": "eenweg",
    "van": "t-2006-dweck",
    "naar": "t-1996-ericsson",
    "toelichting": "Wie gelooft dat bekwaamheid te ontwikkelen is, houdt langer vol met oefenen."
   },
   {
    "id": "b-27",
    "type": "versterkt",
    "richting": "eenweg",
    "van": "t-2007-hattie",
    "naar": "t-2006-dweck",
    "toelichting": "Feedback op inzet en aanpak helpt een groeimindset te ontwikkelen."
   },
   {
    "id": "b-28",
    "type": "versterkt",
    "richting": "eenweg",
    "van": "t-1999-isaacs",
    "naar": "t-1988-west-gersick",
    "toelichting": "Dialoog helpt teams om samen stil te staan bij hun doelen en werkwijze."
   },
   {
    "id": "b-29",
    "type": "versterkt",
    "richting": "eenweg",
    "van": "t-1999-isaacs",
    "naar": "t-1974-schon-argyris",
    "toelichting": "In dialoog komen onderliggende aannames aan het licht, wat double-loop leren mogelijk maakt."
   },
   {
    "id": "b-30",
    "type": "versterkt",
    "richting": "eenweg",
    "van": "t-1999-edmondson",
    "naar": "t-1974-schon-argyris",
    "toelichting": "Veiligheid maakt het mogelijk om eigen aannames ter discussie te stellen."
   },
   {
    "id": "b-31",
    "type": "versterkt",
    "richting": "eenweg",
    "van": "t-1988-west-gersick",
    "naar": "t-1991-pedler",
    "toelichting": "Teamleren is een bouwsteen van de lerende organisatie."
   },
   {
    "id": "b-32",
    "type": "belemmert",
    "richting": "eenweg",
    "van": "t-1960-menzies-lyth",
    "naar": "t-1974-schon-argyris",
    "toelichting": "Afweermechanismen houden aannames buiten beeld en blokkeren zo double-loop leren."
   },
   {
    "id": "b-33",
    "type": "belemmert",
    "richting": "eenweg",
    "van": "t-1977-bourdieu",
    "naar": "t-1967-freire",
    "toelichting": "Ingesleten patronen lijken vanzelfsprekend en staan kritische reflectie daardoor in de weg."
   },
   {
    "id": "b-34",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1923-buber",
    "naar": "t-1958-berne",
    "toelichting": "Beide gaan over gelijkwaardig contact tussen mensen."
   },
   {
    "id": "b-35",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1923-buber",
    "naar": "t-2008-brown",
    "toelichting": "Echte ontmoeting vraagt de moed om je kwetsbaar op te stellen."
   },
   {
    "id": "b-36",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1938-huizinga",
    "naar": "t-1975-csikszentmihalyi",
    "toelichting": "Spel en flow zijn allebei activiteiten die mensen om zichzelf doen, met volle overgave."
   },
   {
    "id": "b-37",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1950-erikson",
    "naar": "t-2008-sennett",
    "toelichting": "De generativiteit uit het middenleven zie je terug in de overdracht van meester op gezel."
   },
   {
    "id": "b-38",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1956-bloom-shulman",
    "naar": "t-2007-hattie",
    "toelichting": "Heldere leerdoelen zijn het vertrekpunt van goede feedback."
   },
   {
    "id": "b-39",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1958-polanyi",
    "naar": "t-2008-sennett",
    "toelichting": "Vakmanschap bestaat voor een groot deel uit stilzwijgende kennis in hand en hoofd."
   },
   {
    "id": "b-40",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1960-menzies-lyth",
    "naar": "t-1985-schein",
    "toelichting": "Schein zag cultuur, net als Menzies Lyth haar afweermechanismen, als bescherming tegen angst en onzekerheid."
   },
   {
    "id": "b-41",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1960-berlyne",
    "naar": "t-1975-csikszentmihalyi",
    "toelichting": "Beide wijzen op een optimale mate van uitdaging: niet te weinig en niet te veel."
   },
   {
    "id": "b-42",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1967-freire",
    "naar": "t-1974-schon-argyris",
    "toelichting": "Beide stellen de onderliggende aannames van je handelen ter discussie."
   },
   {
    "id": "b-43",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1969-weick",
    "naar": "t-1997-stacey",
    "toelichting": "Beide zien organisaties niet als machines, maar als losse, zich ontwikkelende verbanden."
   },
   {
    "id": "b-44",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1969-weick",
    "naar": "t-2004-spillane",
    "toelichting": "In losjes gekoppelde organisaties zoals scholen ligt gespreid leiderschap voor de hand."
   },
   {
    "id": "b-45",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1970-freidson",
    "naar": "t-1983-schon",
    "toelichting": "Schön bekritiseerde het beeld van de professional als toepasser van technische kennis."
   },
   {
    "id": "b-46",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1974-schon-argyris",
    "naar": "t-1985-schein",
    "toelichting": "Double-loop leren vraagt dat de basisaannames uit de cultuur zichtbaar worden."
   },
   {
    "id": "b-47",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1978-mcclelland",
    "naar": "t-1985-deci-ryan",
    "toelichting": "Beide verklaren motivatie vanuit psychologische behoeften, zoals de behoefte aan competentie."
   },
   {
    "id": "b-48",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1978-mcclelland",
    "naar": "t-2007-hattie",
    "toelichting": "Mensen met een sterke prestatiebehoefte zoeken juist directe feedback."
   },
   {
    "id": "b-49",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1986-cooperrider",
    "naar": "t-1991-seligman",
    "toelichting": "Beide vertrekken vanuit sterke kanten in plaats van vanuit problemen."
   },
   {
    "id": "b-50",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1987-engestrom",
    "naar": "t-1998-wenger",
    "toelichting": "Leren vindt ook plaats op de grens tussen praktijkgemeenschappen."
   },
   {
    "id": "b-51",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1987-engestrom",
    "naar": "t-2001-billett",
    "toelichting": "De grens tussen school en werkplek is een belangrijke plek om te leren."
   },
   {
    "id": "b-52",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1990-checkland",
    "naar": "t-1997-stacey",
    "toelichting": "Beide benaderen organisaties als complexe systemen met meerdere perspectieven."
   },
   {
    "id": "b-53",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1990-caine",
    "naar": "t-1975-csikszentmihalyi",
    "toelichting": "Ontspannen alertheid lijkt op flow: uitdaging zonder bedreiging."
   },
   {
    "id": "b-54",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1991-pedler",
    "naar": "t-1996-kessels",
    "toelichting": "Beide maken leren tot onderdeel van het dagelijks werk in de organisatie."
   },
   {
    "id": "b-55",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1991-pedler",
    "naar": "t-2007-scharmer",
    "toelichting": "Theory U komt voort uit de beweging rond de lerende organisatie."
   },
   {
    "id": "b-56",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1996-kessels",
    "naar": "t-2002-bereiter-scardamalia",
    "toelichting": "Beide gaan over het gezamenlijk ontwikkelen van nieuwe kennis."
   },
   {
    "id": "b-57",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1998-wenger",
    "naar": "t-2002-bereiter-scardamalia",
    "toelichting": "Kenniscreatie gebeurt in gemeenschappen die samen ideeën verbeteren."
   },
   {
    "id": "b-58",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1997-stacey",
    "naar": "t-2000-smith-lewis",
    "toelichting": "Stacey beschrijft organisaties als paradoxaal: stabiliteit en verandering tegelijk."
   },
   {
    "id": "b-59",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1999-wierdsma",
    "naar": "t-1999-isaacs",
    "toelichting": "Het lastige gesprek op de plek der moeite vraagt om dialoog."
   },
   {
    "id": "b-60",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1999-wierdsma",
    "naar": "t-2000-smith-lewis",
    "toelichting": "Beide vragen om spanning niet te ontwijken, maar productief te maken."
   },
   {
    "id": "b-61",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-2004-schwartz",
    "naar": "t-2005-kunneman",
    "toelichting": "Beide benadrukken het morele oordeel van de professional."
   },
   {
    "id": "b-62",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-2004-schwartz",
    "naar": "t-2008-sennett",
    "toelichting": "Praktische wijsheid en vakmanschap groeien door ervaring en goede voorbeelden."
   },
   {
    "id": "b-63",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1996-ericsson",
    "naar": "t-2008-sennett",
    "toelichting": "Vakmanschap vraagt langdurige, doelbewuste oefening."
   },
   {
    "id": "b-64",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1933-dewey",
    "naar": "t-2011-kahneman",
    "toelichting": "Reflectie helpt om denkfouten te herkennen en te corrigeren."
   },
   {
    "id": "b-65",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1934-vygotsky",
    "naar": "t-1975-leontjev",
    "toelichting": "Leontjev werkte de cultureel-historische benadering van Vygotsky uit tot de activiteitstheorie.",
    "extra": true
   },
   {
    "id": "b-66",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1934-vygotsky",
    "naar": "t-1976-luria",
    "toelichting": "Luria's onderzoek naar cultuur en denken kwam voort uit zijn samenwerking met Vygotsky.",
    "extra": true
   },
   {
    "id": "b-67",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1934-vygotsky",
    "naar": "t-1991-lave",
    "toelichting": "Gesitueerd leren bouwt voort op Vygotsky's idee dat leren sociaal en cultureel is ingebed.",
    "extra": true
   },
   {
    "id": "b-68",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1934-vygotsky",
    "naar": "t-1976-wood-bruner-ross",
    "toelichting": "Scaffolding wordt vaak gezien als uitwerking van de zone van naaste ontwikkeling.",
    "extra": true
   },
   {
    "id": "b-69",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1934-vygotsky",
    "naar": "t-1936-piaget",
    "toelichting": "Beide zien leren als actief opbouwen van kennis; Piaget legt de nadruk op het individu, Vygotsky op de sociale omgeving.",
    "extra": true
   },
   {
    "id": "b-70",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1975-leontjev",
    "naar": "t-1987-engestrom",
    "toelichting": "Engeström bouwde zijn werk over expansief leren en grensoverschrijding op de activiteitstheorie.",
    "extra": true
   },
   {
    "id": "b-71",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1976-luria",
    "naar": "t-1990-caine",
    "toelichting": "Luria legde de basis voor de neuropsychologie, waarop breingericht leren voortbouwt.",
    "extra": true
   },
   {
    "id": "b-72",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1976-luria",
    "naar": "t-1977-bourdieu",
    "toelichting": "Beide laten zien hoe de sociale omgeving vormt hoe mensen denken en handelen.",
    "extra": true
   },
   {
    "id": "b-73",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1936-piaget",
    "naar": "t-1984-kolb",
    "toelichting": "Kolb baseerde zijn leercyclus mede op Piagets theorie van cognitieve ontwikkeling.",
    "extra": true
   },
   {
    "id": "b-74",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1936-piaget",
    "naar": "t-1982-kegan",
    "toelichting": "Kegan bouwde met zijn theorie over de ontwikkeling van volwassenen voort op Piaget.",
    "extra": true
   },
   {
    "id": "b-75",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1943-maslow",
    "naar": "t-1985-deci-ryan",
    "toelichting": "Beide verklaren motivatie vanuit psychologische basisbehoeften.",
    "extra": true
   },
   {
    "id": "b-76",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1943-maslow",
    "naar": "t-1978-mcclelland",
    "toelichting": "Beide beschrijven motivatie in termen van behoeften, zoals waardering en prestatie.",
    "extra": true
   },
   {
    "id": "b-77",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1959-kirkpatrick",
    "naar": "t-1998-black-wiliam",
    "toelichting": "Beide gaan over evalueren: Kirkpatrick achteraf op vier niveaus, formatief evalueren tijdens het leren.",
    "extra": true
   },
   {
    "id": "b-78",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1959-kirkpatrick",
    "naar": "t-2001-billett",
    "toelichting": "Het derde niveau vraagt of het geleerde terugkomt in het werk: de overdracht naar de werkplek.",
    "extra": true
   },
   {
    "id": "b-79",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1970-knowles",
    "naar": "t-1978-mezirow",
    "toelichting": "Beide gaan over hoe volwassenen leren, vanuit hun eigen ervaring.",
    "extra": true
   },
   {
    "id": "b-80",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1970-knowles",
    "naar": "t-1985-deci-ryan",
    "toelichting": "Zelfsturing en autonomie staan in beide centraal.",
    "extra": true
   },
   {
    "id": "b-81",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1971-revans",
    "naar": "t-1991-pedler",
    "toelichting": "Pedler werkte samen met Revans; action learning is een bouwsteen van de lerende organisatie.",
    "extra": true
   },
   {
    "id": "b-82",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1933-lewin",
    "naar": "t-1971-revans",
    "toelichting": "Beide verbinden leren met handelen in echte situaties.",
    "extra": true
   },
   {
    "id": "b-83",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1976-wood-bruner-ross",
    "naar": "t-1989-collins-brown-newman",
    "toelichting": "Cognitive apprenticeship gebruikt scaffolding en het geleidelijk afbouwen van steun.",
    "extra": true
   },
   {
    "id": "b-84",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1976-wood-bruner-ross",
    "naar": "t-1988-sweller",
    "toelichting": "Beginners hebben veel steun nodig, die kan afnemen naarmate hun expertise groeit.",
    "extra": true
   },
   {
    "id": "b-85",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1977-bandura",
    "naar": "t-2006-dweck",
    "toelichting": "Beide gaan over overtuigingen over je eigen kunnen en het effect daarvan op leren.",
    "extra": true
   },
   {
    "id": "b-86",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1977-bandura",
    "naar": "t-1991-seligman",
    "toelichting": "Vertrouwen in eigen kunnen en optimisme versterken allebei het doorzettingsvermogen.",
    "extra": true
   },
   {
    "id": "b-87",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1967-freire",
    "naar": "t-1978-mezirow",
    "toelichting": "Mezirow liet zich voor transformatief leren inspireren door Freires kritische bewustwording.",
    "extra": true
   },
   {
    "id": "b-88",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1974-schon-argyris",
    "naar": "t-1978-mezirow",
    "toelichting": "Beide vragen om het onderzoeken en veranderen van onderliggende aannames.",
    "extra": true
   },
   {
    "id": "b-89",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1980-dreyfus",
    "naar": "t-1996-ericsson",
    "toelichting": "Beide beschrijven hoe expertise groeit, van regels volgen naar intuïtief handelen.",
    "extra": true
   },
   {
    "id": "b-90",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1958-polanyi",
    "naar": "t-1980-dreyfus",
    "toelichting": "Experts handelen voor een groot deel op stilzwijgende kennis.",
    "extra": true
   },
   {
    "id": "b-91",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1980-dreyfus",
    "naar": "t-1983-schon",
    "toelichting": "Beide bekritiseren het idee dat professioneel handelen neerkomt op het toepassen van regels.",
    "extra": true
   },
   {
    "id": "b-92",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1950-erikson",
    "naar": "t-1982-kegan",
    "toelichting": "Beide beschrijven ontwikkeling als iets dat ook in de volwassenheid doorgaat.",
    "extra": true
   },
   {
    "id": "b-93",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1978-mezirow",
    "naar": "t-1982-kegan",
    "toelichting": "Transformatief leren vraagt vaak een nieuwe manier van betekenis geven.",
    "extra": true
   },
   {
    "id": "b-94",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1980-dreyfus",
    "naar": "t-1988-sweller",
    "toelichting": "Wat beginners helpt, zoals uitgewerkte voorbeelden, kan experts juist hinderen.",
    "extra": true
   },
   {
    "id": "b-95",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1989-collins-brown-newman",
    "naar": "t-1991-lave",
    "toelichting": "Beide zien leren als deelnemen aan een praktijk, zoals een gezel bij een meester.",
    "extra": true
   },
   {
    "id": "b-96",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1989-collins-brown-newman",
    "naar": "t-2008-sennett",
    "toelichting": "Cognitive apprenticeship past het meester-gezelmodel van het vakmanschap toe op denkvaardigheden.",
    "extra": true
   },
   {
    "id": "b-97",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1974-schon-argyris",
    "naar": "t-1990-senge",
    "toelichting": "Senges discipline 'mentale modellen' bouwt voort op het werk van Argyris.",
    "extra": true
   },
   {
    "id": "b-98",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1990-senge",
    "naar": "t-1991-pedler",
    "toelichting": "Senge maakte het idee van de lerende organisatie wereldwijd bekend.",
    "extra": true
   },
   {
    "id": "b-99",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1988-west-gersick",
    "naar": "t-1990-senge",
    "toelichting": "Teamleren is een van de vijf disciplines van Senge.",
    "extra": true
   },
   {
    "id": "b-100",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1990-senge",
    "naar": "t-1997-stacey",
    "toelichting": "Beide kijken naar organisaties als systemen, al denken ze verschillend over de mogelijkheid om te sturen.",
    "extra": true
   },
   {
    "id": "b-101",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1990-senge",
    "naar": "t-2007-scharmer",
    "toelichting": "Scharmer werkte met Senge samen; Theory U komt uit dezelfde beweging.",
    "extra": true
   },
   {
    "id": "b-102",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1958-polanyi",
    "naar": "t-1995-nonaka-takeuchi",
    "toelichting": "Nonaka en Takeuchi bouwden hun kennisspiraal op Polanyi's stilzwijgende kennis.",
    "extra": true
   },
   {
    "id": "b-103",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1995-nonaka-takeuchi",
    "naar": "t-1996-kessels",
    "toelichting": "Beide gaan over het ontwikkelen en benutten van kennis in organisaties.",
    "extra": true
   },
   {
    "id": "b-104",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1995-nonaka-takeuchi",
    "naar": "t-2002-bereiter-scardamalia",
    "toelichting": "Beide beschrijven hoe groepen samen nieuwe kennis maken.",
    "extra": true
   },
   {
    "id": "b-105",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1998-black-wiliam",
    "naar": "t-2007-hattie",
    "toelichting": "Beide laten zien hoe sterk goede feedback tijdens het leren werkt.",
    "extra": true
   },
   {
    "id": "b-106",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1958-polanyi",
    "naar": "t-2004-eraut",
    "toelichting": "Eraut onderzocht de stilzwijgende kennis die professionals in hun werk opdoen.",
    "extra": true
   },
   {
    "id": "b-107",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-2001-billett",
    "naar": "t-2004-eraut",
    "toelichting": "Beide beschrijven hoe de werkplek leren mogelijk maakt of beperkt.",
    "extra": true
   },
   {
    "id": "b-108",
    "type": "basis_voor",
    "richting": "eenweg",
    "van": "t-1983-schon",
    "naar": "t-2004-korthagen",
    "toelichting": "Korthagens reflectiemodellen bouwen voort op de traditie van de reflectieve professional.",
    "extra": true
   },
   {
    "id": "b-109",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-2004-korthagen",
    "naar": "t-2005-kunneman",
    "toelichting": "Beide betrekken waarden, identiteit en idealen bij professioneel handelen.",
    "extra": true
   },
   {
    "id": "b-110",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1986-cooperrider",
    "naar": "t-2004-korthagen",
    "toelichting": "Beide vertrekken vanuit sterke kanten in plaats van vanuit tekorten.",
    "extra": true
   },
   {
    "id": "b-111",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1984-kolb",
    "naar": "t-2006-ruijters",
    "toelichting": "Leervoorkeuren zijn een alternatief voor leerstijlen: het gaat om voorkeur, niet om vaste typen.",
    "extra": true
   },
   {
    "id": "b-112",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1996-kessels",
    "naar": "t-2006-ruijters",
    "toelichting": "Beide richten zich op leren in organisaties en hoe je dat vormgeeft.",
    "extra": true
   },
   {
    "id": "b-113",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-2005-kunneman",
    "naar": "t-2010-biesta",
    "toelichting": "Beide benadrukken de normatieve kant van onderwijs en professioneel handelen.",
    "extra": true
   },
   {
    "id": "b-114",
    "type": "sluit_aan_bij",
    "richting": "tweeweg",
    "van": "t-1967-freire",
    "naar": "t-2010-biesta",
    "toelichting": "Subjectificatie en kritische bewustwording gaan beide over zelfstandig leren denken en oordelen.",
    "extra": true
   }
  ]
 }
};
