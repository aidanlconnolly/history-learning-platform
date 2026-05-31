import type { Civilization } from "../types";

export const inca: Civilization = {
  id: "inca",
  name: "The Inca Empire",
  shortName: "Inca",
  emblem: "🏔️",
  region: "The Andes (South America)",
  modernCountries: ["Peru", "Bolivia", "Ecuador", "Chile", "Argentina", "Colombia"],
  timespan: "1438 – 1533 CE",
  startYear: 1438,
  endYear: 1533,
  color: "#d97706",
  tagline:
    "The largest empire in the pre-Columbian Americas — a marvel of roads, stonework and organisation that ran without money, markets, or writing.",
  summary:
    "The Inca built the largest empire in the Americas, stretching 4,000 km along the Andes and ruling perhaps 12 million people — all in under a century. Without writing, money or the wheel, they bound this vast mountain realm together with a stunning road network, ingenious record-keeping on knotted cords, and a powerful command economy. Then a few hundred Spaniards toppled it.",
  hero: {
    wikiTitle: "Sacsayhuamán",
    alt: "The Inca fortress of Sacsayhuamán near Cusco",
    caption: "Sacsayhuamán — the great Inca fortress above Cusco, built with stones weighing up to 300 tonnes.",
  },
  facts: [
    { label: "Heartland", value: "Cusco, Peru" },
    { label: "Ruler", value: "The Sapa Inca (a god-king)" },
    { label: "Extent", value: "~4,000 km along the Andes" },
    { label: "No…", value: "writing, money, markets or wheel" },
    { label: "Fell", value: "1533 to Pizarro" },
  ],
  majorCities: [
    { name: "Cusco",        lat: -13.53, lon: -71.97 },
    { name: "Machu Picchu", lat: -13.16, lon: -72.54 },
    { name: "Chan Chan",    lat:  -8.09, lon: -79.07 },
    { name: "Tiwanaku",     lat: -16.56, lon: -68.68 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments of the Inca Empire",
      icon: "⭐",
      intro: "From a small Andean kingdom to the largest empire in the Americas — built without writing, money or the wheel, then toppled in a single year.",
      milestones: [
        { year: "c. 1200 CE", title: "The Inca Kingdom of Cusco", description: "The Inca begin as one small kingdom among many around Cusco in the Peruvian highlands, ruled by legendary Sapa Incas.", icon: "🏔️", type: "rise" },
        { year: "c. 1400 CE", title: "Viracocha Inca Expands", description: "The eighth Sapa Inca Viracocha begins modest territorial expansion, setting the stage for his son's revolution.", icon: "⚡", type: "rise" },
        { year: "1438 CE",    title: "Pachacuti Defeats the Chanka", description: "The prince who will become Pachacuti repels a massive Chanka invasion, then seizes power and launches the most dramatic expansion in Andean history.", icon: "🦁", type: "rise" },
        { year: "c. 1450 CE", title: "Machu Picchu is Built", description: "Pachacuti builds a royal estate high in the mountains above Cusco — the architectural masterpiece now known as Machu Picchu.", icon: "🏔️", type: "cultural" },
        { year: "c. 1460 CE", title: "The Qhapaq Ñan Road Network", description: "The Inca systematise over 40,000 km of roads across the Andes, with suspension bridges, relay runners and thousands of storehouses.", icon: "🛤️", type: "innovation" },
        { year: "1471 CE",    title: "Topa Inca Continues the Conquest", description: "Pachacuti's son Topa Inca pushes the empire north into Ecuador, south into Chile and east into the Amazon fringes.", icon: "⚔️", type: "conquest" },
        { year: "c. 1476 CE", title: "Chimú Kingdom Conquered", description: "The Inca defeat the wealthy Chimú Kingdom, absorbing their gold-working traditions and skilled craftspeople into the empire.", icon: "🏆", type: "conquest" },
        { year: "1493 CE",    title: "Huayna Capac's Long Reign", description: "Huayna Capac extends the empire to its northernmost limit in Colombia — ruling over perhaps 12 million people.", icon: "👑", type: "rise" },
        { year: "c. 1524 CE", title: "Smallpox Arrives Ahead of the Spanish", description: "A devastating smallpox epidemic spreads south from Central America, killing perhaps a third of the population — including the emperor.", icon: "💀", type: "fall" },
        { year: "1525 CE",    title: "Huayna Capac Dies, Civil War Erupts", description: "The emperor dies of disease without a clear heir; his sons Atahualpa and Huáscar plunge the empire into a brutal civil war.", icon: "⚔️", type: "war" },
        { year: "1532 CE",    title: "Atahualpa Wins the Civil War", description: "Atahualpa defeats and captures Huáscar — but he has barely consolidated power when Pizarro arrives with fewer than 200 men.", icon: "🏹", type: "war" },
        { year: "1532 CE",    title: "The Ambush at Cajamarca", description: "Pizarro's men ambush Atahualpa and his unarmed court, killing thousands of attendants and capturing the Sapa Inca in minutes.", icon: "💥", type: "fall" },
        { year: "1533 CE",    title: "Atahualpa Executed", description: "Despite paying a room full of gold as ransom, Atahualpa is executed by the Spanish — the Inca Empire's leadership is decapitated.", icon: "💔", type: "fall" },
        { year: "1572 CE",    title: "Last Inca Resistance Crushed", description: "The Spanish capture and execute the last rebel Inca ruler Túpac Amaru at Vilcabamba, ending 40 years of indigenous resistance.", icon: "🌙", type: "fall" },
      ],
    },
    {
      id: "rise",
      type: "narrative",
      title: "Lords of the Andes",
      icon: "🏔️",
      image: {
        wikiTitle: "Cusco",
        alt: "The Inca city of Cusco",
        caption: "Cusco, the sacred capital and 'navel' of the Inca world.",
      },
      paragraphs: [
        "The Inca began as one small kingdom among many around Cusco in the Peruvian Andes. Then, from 1438, an extraordinary ruler named Pachacuti ('Earth-shaker') launched a campaign of conquest and reform that, within three generations, created an empire spanning the length of the Andes — from Colombia to Chile.",
        "They called it Tawantinsuyu, 'the Four Regions Together'. At its centre sat the Sapa Inca, an absolute god-king believed descended from the sun. Conquest was often achieved by diplomacy and overwhelming display as much as by force — and conquered peoples were absorbed, resettled and bound into the imperial system.",
        "Holding together a realm of soaring mountains, deserts and jungle, with dozens of languages, was a staggering feat of organisation — all the more so because the Inca did it without any of the tools we usually consider essential to a great empire.",
      ],
      subLessons: [
        {
          title: "Pachacuti, the Earth-Shaker",
          paragraphs: [
            "Around 1438 the small kingdom of Cusco faced annihilation. The powerful Chanka confederation marched on the city, and the ruling Inca and his heir fled. A younger son, Cusi Yupanqui, refused to abandon Cusco — he rallied its defenders and, against the odds, shattered the Chanka army in a battle that legend says even the stones rose up to join.",
            "Victorious, he took the throne and a new name: Pachacuti, meaning 'Earth-Shaker' or 'he who overturns the world'. The name was fitting, for he set about remaking everything — reorganising the state, rebuilding Cusco in monumental stone, and launching the conquests that would create an empire within his own lifetime.",
            "Pachacuti also reshaped Inca religion and history, elevating the sun god Inti and rewriting the past to place his dynasty at its centre. More than a conqueror, he was the architect of the imperial idea that his sons and grandsons would carry the length of the Andes.",
          ],
          terms: [
            { term: "Chanka", definition: "The rival Andean confederation whose defeat launched Inca expansion." },
            { term: "Inti", definition: "The Inca sun god, from whom the Sapa Inca claimed descent." },
          ],
        },
        {
          title: "Conquest by war and persuasion",
          paragraphs: [
            "The Inca expanded with remarkable speed, but not by force alone. Faced with a new people, the Sapa Inca would often first offer generous gifts and a deal: join the empire peacefully and share in its wealth, its irrigation, its storehouses and its protection. Many smaller groups, weighing the alternative, accepted.",
            "Those who refused met the full weight of the Inca army — and, just as importantly, the threat of resettlement. The Inca moved whole populations across the empire through the mitma system, planting loyal communities among the conquered and scattering rebellious ones, weaving the realm together while breaking up resistance.",
            "Conquered elites were not simply crushed. Their sons were brought to Cusco to be educated in Inca ways and the Quechua language, and local gods were honoured at the capital — partly as respect, partly as hostages. It was an empire held together as much by clever integration as by the sword.",
          ],
          terms: [
            { term: "Mitma", definition: "The Inca policy of resettling populations to secure newly conquered regions." },
            { term: "Quechua", definition: "The language the Inca spread across the Andes as the tongue of administration." },
          ],
        },
        {
          title: "Tawantinsuyu, the Four Regions",
          image: {
            wikiTitle: "Inca Empire",
            alt: "Map of the Inca Empire",
            caption: "Tawantinsuyu stretched 4,000 km along the Andes.",
          },
          paragraphs: [
            "The Inca did not call their realm an 'empire'. They called it Tawantinsuyu — 'the Four Regions Together' — for the four great provinces (suyus) that radiated from Cusco, the navel of the world. The capital itself was laid out as the symbolic centre where the regions met.",
            "At its height under Huayna Capac around 1500, Tawantinsuyu stretched roughly 4,000 km from modern Colombia to central Chile, embracing coast, highland and jungle. It ruled perhaps twelve million people who spoke dozens of languages — the largest state ever built in the pre-Columbian Americas.",
            "Binding such diversity together was the genius of the system. A single language of rule, a single state religion centred on the sun, and a single emperor regarded as a living god gave a sprawling patchwork of peoples a shared imperial identity in just three generations.",
          ],
          terms: [
            { term: "Suyu", definition: "One of the four great administrative regions that made up Tawantinsuyu." },
            { term: "Cusco", definition: "The Inca capital, regarded as the sacred 'navel' where the four regions met." },
          ],
        },
      ],
      terms: [
        { term: "Tawantinsuyu", definition: "The Inca name for their empire: 'the Four Regions Together'." },
        { term: "Sapa Inca", definition: "The supreme Inca emperor, regarded as a living descendant of the sun god." },
        { term: "Pachacuti", definition: "The visionary ruler who transformed a small kingdom into a vast empire from 1438." },
      ],
      callout: {
        title: "What made the Inca different",
        body: "The Inca ran a continent-spanning empire with no writing, no money and no markets. Instead they used a command economy: the state directed labour and stored vast surpluses to redistribute. It may be the most successful large-scale planned economy of the ancient world.",
      },
    },
    {
      id: "organisation",
      type: "narrative",
      title: "Roads, Knots & the Command Economy",
      icon: "🪢",
      image: {
        wikiTitle: "Inca road system",
        alt: "An Inca road in the Andes",
        caption: "The Qhapaq Ñan — over 40,000 km of Inca roads across the Andes.",
      },
      paragraphs: [
        "The skeleton of the empire was the Qhapaq Ñan, a road network of over 40,000 km with rope suspension bridges over gorges and storehouses and rest-houses along the way. Relay runners called chasquis could carry messages (and even fresh fish from the coast) hundreds of kilometres a day.",
        "Instead of taxing money or goods, the Inca taxed labour through the mit'a system: every household owed the state a set amount of work — farming, building, soldiering, weaving. In return the state stored huge surpluses and fed the people in times of famine. There was no starvation and no homelessness, but also little personal freedom.",
        "Lacking writing, the Inca recorded everything — census figures, tribute, accounts, perhaps even histories — on the quipu, an ingenious device of knotted, coloured strings. Specialist 'knot-keepers' could read off astonishing detail from them.",
      ],
      subLessons: [
        {
          title: "The royal road and the running messengers",
          image: {
            wikiTitle: "Inca rope bridge",
            alt: "An Inca rope suspension bridge",
            caption: "Woven-grass bridges carried the royal road across deep gorges.",
          },
          paragraphs: [
            "The backbone of the empire was the Qhapaq Ñan, the royal road — some 40,000 km of paved paths, stairways, tunnels and causeways threading the most vertical landscape on Earth. Where the road met a chasm, the Inca strung suspension bridges woven from grass rope, rebuilt each year by the communities on either side.",
            "Along the roads, at regular intervals, stood tampus: waystations and storehouses stocked with food, cloth, weapons and firewood. An army or an official travelling the empire never went hungry, and the state could move supplies wherever they were needed.",
            "Fastest of all were the chasquis, relay runners stationed in pairs every few kilometres. A message or even fresh fish from the coast could be passed runner to runner and travel some 240 km in a single day — an information and supply network without rival in the Americas.",
          ],
          terms: [
            { term: "Tampu", definition: "A roadside waystation and storehouse on the Inca royal road." },
            { term: "Chasqui", definition: "Relay runners who sped messages and goods along the Inca roads." },
          ],
        },
        {
          title: "Counting an empire without writing",
          image: {
            wikiTitle: "Quipu",
            alt: "An Inca quipu of knotted strings",
            caption: "The quipu stored numbers — and perhaps more — in knots.",
          },
          paragraphs: [
            "The Inca ran a state of millions with no written script. Their tool was the quipu: a main cord from which hung dozens or hundreds of coloured strings, each carrying clusters of knots. The position and type of knot encoded numbers in a decimal system, while colours and arrangement signalled what was being counted.",
            "Specialists called quipucamayocs — 'keepers of the knots' — maintained these records, tracking populations, herds, harvests, tribute and the contents of every storehouse. When officials needed figures, the quipucamayoc could read them back like an accountant consulting a ledger.",
            "Scholars still debate whether some quipus also recorded narrative — names, histories, even songs. If so, the Inca may have had a form of three-dimensional writing in string that we have only partly learned to read.",
          ],
          terms: [
            { term: "Quipucamayoc", definition: "A trained Inca official who created and 'read' the knotted-string records." },
            { term: "Decimal system", definition: "The base-ten counting the Inca used to record numbers in quipu knots." },
          ],
        },
        {
          title: "Stone, terraces and the labour tax",
          paragraphs: [
            "Inca masons achieved a precision that still astonishes engineers. At sites like Cusco and the fortress of Sacsayhuamán, they shaped massive irregular blocks — some weighing many tonnes — so exactly that they interlock without mortar, and not even a knife blade can be slipped between them. The joints have survived five centuries of Andean earthquakes.",
            "Just as vital was agricultural engineering. The Inca carved staircases of terraces into steep mountainsides, each level with its own drainage and soil, creating flat farmland and microclimates at altitude. Surplus crops, including freeze-dried potatoes called chuño, were stored against famine.",
            "All of this was built not by paid workers or slaves but through the mit'a — a rotating labour tax. Instead of paying in money, which the Inca did not use, each community owed a set period of work on roads, terraces, temples and fields. The empire was, quite literally, built by the shared labour of its people.",
          ],
          terms: [
            { term: "Mit'a", definition: "A labour tax: each community owed the state work on roads, fields and monuments." },
            { term: "Chuño", definition: "Freeze-dried potatoes the Inca stored for years against famine." },
          ],
        },
      ],
      terms: [
        { term: "Qhapaq Ñan", definition: "The vast Inca road network that knit the mountain empire together." },
        { term: "Mit'a", definition: "A labour tax: each household owed the state work rather than money or goods." },
        { term: "Quipu", definition: "Knotted, coloured strings used to record numbers and information without writing." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Emperors & the Conqueror",
      icon: "👤",
      intro: "The rulers who built the empire — and the civil war and invader who ended it.",
      figures: [
        {
          name: "Pachacuti",
          role: "Empire-builder",
          lived: "reigned 1438–1471",
          bio: "The 'Earth-shaker' who transformed Cusco into an empire, reorganised the state, and is traditionally credited with building Machu Picchu.",
          image: { wikiTitle: "Pachacuti", alt: "Depiction of Pachacuti" },
        },
        {
          name: "Huayna Capac",
          role: "Emperor at the peak",
          lived: "reigned c. 1493–1525",
          bio: "Ruled the empire at its greatest extent. His death (probably from smallpox spreading ahead of the Spanish) triggered a ruinous succession war.",
          image: { wikiTitle: "Huayna Capac", alt: "Depiction of Huayna Capac" },
        },
        {
          name: "Atahualpa",
          role: "Last emperor",
          lived: "c. 1502–1533",
          bio: "Won the civil war only to be ambushed and captured by Pizarro at Cajamarca. Despite paying a vast ransom in gold, he was executed by the Spanish.",
          image: { wikiTitle: "Atahualpa", alt: "Depiction of Atahualpa" },
        },
        {
          name: "Francisco Pizarro",
          role: "Spanish conquistador",
          lived: "c. 1478–1541",
          bio: "Led fewer than 200 men to seize the Inca Empire by capturing Atahualpa, exploiting the civil war and Spanish steel, horses and disease.",
          image: { wikiTitle: "Francisco Pizarro", alt: "Portrait of Francisco Pizarro" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Andean Mastery",
      icon: "💡",
      intro: "Inca engineering and organisation were extraordinary feats of human ingenuity.",
      image: {
        wikiTitle: "Machu Picchu",
        alt: "The ruins of Machu Picchu high in the Andes",
        caption: "Machu Picchu — the royal estate of Pachacuti, rediscovered in 1911.",
      },
      achievements: [
        {
          name: "Mortarless masonry",
          field: "Engineering",
          description: "Inca stonemasons cut giant blocks to fit so precisely that a knife blade cannot slip between them — and they withstand earthquakes.",
          legacy: "Walls at Cusco and Sacsayhuamán still stand perfectly after 500 years and many quakes.",
        },
        {
          name: "The road network",
          field: "Infrastructure",
          description: "Over 40,000 km of roads, with suspension bridges and relay runners, tied the mountain empire together.",
          legacy: "A UNESCO World Heritage Site spanning six modern countries.",
        },
        {
          name: "Terrace farming",
          field: "Agriculture",
          description: "Stepped terraces turned steep slopes into farmland and grew thousands of varieties of potatoes and maize at altitude.",
          legacy: "Andean terraces are still farmed today.",
        },
        {
          name: "Freeze-drying food",
          field: "Technology",
          description: "Using the cold nights and strong sun of the high Andes, the Inca freeze-dried potatoes into chuño that kept for years.",
          legacy: "An early form of the freeze-drying used for modern preserved foods.",
        },
        {
          name: "The quipu",
          field: "Information",
          description: "Knotted strings recorded the data of an entire empire without any written language.",
          legacy: "A unique record-keeping system still not fully decoded.",
        },
      ],
    },
    {
      id: "conquest",
      type: "narrative",
      title: "Capture & Conquest",
      icon: "⚔️",
      image: {
        wikiTitle: "Battle of Cajamarca",
        alt: "Depiction of the capture of Atahualpa at Cajamarca",
        caption: "The ambush at Cajamarca, 1532, where Pizarro seized the emperor.",
      },
      paragraphs: [
        "Disaster struck before the Spanish even arrived in force: smallpox, spreading south from Central America, killed the emperor Huayna Capac and his heir around 1525, plunging the empire into a brutal civil war between his sons Atahualpa and Huáscar.",
        "Atahualpa had just won this war when Francisco Pizarro appeared in 1532 with fewer than 200 men. At Cajamarca the Spanish ambushed and captured the emperor amid his huge but unsuspecting army. Atahualpa filled a room with gold and silver as ransom — then was executed anyway.",
        "With the god-king gone and the empire weakened by plague and civil war, resistance crumbled, though rebel Incas held out in the mountains until 1572. The Spanish looted the empire's gold, and the Andes entered three centuries of colonial rule. Yet millions of Quechua- and Aymara-speaking descendants of the Inca live in the Andes to this day.",
      ],
      subLessons: [
        {
          title: "Disease and a war of brothers",
          paragraphs: [
            "The empire was crippled before a single Spaniard reached it. Smallpox, racing south from the Caribbean and Central America faster than the Europeans themselves, struck the Andes around 1525. Among its victims was the emperor Huayna Capac and his designated heir, who died within days of each other, leaving the succession in chaos.",
            "The result was a ruinous civil war between two of Huayna Capac's sons. Huáscar, crowned in Cusco, faced his half-brother Atahualpa, who commanded the battle-hardened northern army. For several years the empire tore itself apart, its provinces ravaged and its loyalties split.",
            "Atahualpa finally triumphed, capturing Huáscar in 1532 — but at a terrible cost. The empire he won was exhausted, divided and resentful, its institutions shaken. Into this fragile moment, with perfect and unlucky timing, stepped Francisco Pizarro.",
          ],
          terms: [
            { term: "Huáscar", definition: "Atahualpa's half-brother and rival, whose defeat ended the Inca civil war." },
            { term: "Huayna Capac", definition: "The emperor whose death from smallpox triggered the ruinous succession war." },
          ],
        },
        {
          title: "The ambush at Cajamarca",
          image: {
            wikiTitle: "Battle of Cajamarca",
            alt: "The Spanish capture of Atahualpa at Cajamarca",
            caption: "Pizarro seized the emperor in a single afternoon.",
          },
          paragraphs: [
            "In 1532 Pizarro marched inland with fewer than 200 men and arranged to meet the victorious Atahualpa at the highland town of Cajamarca. The emperor, surrounded by thousands of warriors, felt no fear of so tiny a band and came to the meeting with an unarmed retinue.",
            "It was a trap. At a signal the Spanish opened fire with cannon and charged on horseback into the packed square. The Inca, who had never seen guns or horses, were thrown into panic and slaughtered. By nightfall Pizarro held Atahualpa himself prisoner — the living god of the empire, captured in a single afternoon.",
            "Atahualpa quickly grasped the Spanish hunger for gold and offered an extraordinary ransom: to fill a large room once with gold and twice with silver. The treasure poured in from across the empire — and once it was collected, the Spanish tried him on false charges and executed him anyway in 1533.",
          ],
          terms: [
            { term: "Cajamarca", definition: "The site where Pizarro ambushed and captured Atahualpa in 1532." },
            { term: "Atahualpa's ransom", definition: "A room filled once with gold and twice with silver, paid for the emperor — who was killed regardless." },
          ],
        },
        {
          title: "Cusco falls and the last resistance",
          paragraphs: [
            "With the god-emperor dead, the Inca state was paralysed. Pizarro marched on Cusco and took the capital in 1533, at first installing a puppet emperor, Manco Inca, to rule under Spanish control and lend the conquest a veneer of legitimacy.",
            "But the conquest was not yet complete. In 1536 Manco Inca turned on the Spanish and laid a massive siege to Cusco, very nearly driving them out. When the rebellion failed, he withdrew into the remote, jungle-cloaked mountains to found a rump Inca state at Vilcabamba.",
            "From Vilcabamba the Inca held out for nearly forty years, a defiant shadow of the empire. Only in 1572 did the Spanish storm the refuge and execute the last emperor, Túpac Amaru, finally ending independent Inca rule — though Andean memory of Tawantinsuyu never died.",
          ],
          terms: [
            { term: "Manco Inca", definition: "The puppet emperor who rebelled and besieged Cusco before retreating to Vilcabamba." },
            { term: "Vilcabamba", definition: "The remote mountain stronghold where the Inca resisted Spain until 1572." },
          ],
        },
      ],
      terms: [
        { term: "Battle of Cajamarca", definition: "The 1532 ambush where Pizarro captured the Sapa Inca Atahualpa." },
        { term: "Inca civil war", definition: "The succession war between Atahualpa and Huáscar that fatally weakened the empire before the conquest." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on the empire of the Andes.",
      questions: [
        {
          q: "What did the Inca call their empire?",
          options: ["Tawantinsuyu", "Tenochtitlan", "Tahuantin", "Anahuac"],
          correct: 0,
          fb: "It means 'the Four Regions Together'.",
        },
        {
          q: "Which essential tools did the Inca empire run WITHOUT?",
          options: ["Roads and farms", "Writing, money and markets", "Soldiers and kings", "Stone and rope"],
          correct: 1,
          fb: "No writing, money or markets — they used a planned command economy instead.",
        },
        {
          q: "What was the quipu used for?",
          options: ["Weaving cloth", "Recording numbers and data with knots", "Building bridges", "Religious ritual only"],
          correct: 1,
          fb: "Knotted, coloured strings recorded the empire's records without writing.",
        },
        {
          q: "The mit'a was a tax paid in…",
          options: ["Gold", "Labour", "Cloth", "Livestock"],
          correct: 1,
          fb: "Households owed the state work, and the state fed them in hard times.",
        },
        {
          q: "What is remarkable about Inca stonework?",
          options: ["It used iron rebar", "Blocks fit so tightly a knife can't slip between them", "It was made of mud brick", "It glows in the dark"],
          correct: 1,
          fb: "The mortarless masonry survives earthquakes that topple modern buildings.",
        },
        {
          q: "What weakened the empire just before the Spanish arrived?",
          options: ["A famine", "Smallpox and a civil war", "A foreign invasion", "An earthquake"],
          correct: 1,
          fb: "Smallpox killed the emperor and triggered the Atahualpa–Huáscar civil war.",
        },
        {
          q: "Who led the Spanish conquest of the Inca?",
          options: ["Cortés", "Pizarro", "Columbus", "De Soto"],
          correct: 1,
          fb: "Pizarro captured Atahualpa at Cajamarca in 1532 with under 200 men.",
        },
      ],
    },
  ],
};
