import type { Civilization } from "../types";

export const aztec: Civilization = {
  id: "aztec",
  name: "The Aztec Empire",
  shortName: "Aztec",
  emblem: "🦅",
  region: "Central Mexico",
  modernCountries: ["Mexico"],
  timespan: "1345 – 1521 CE",
  startYear: 1345,
  endYear: 1521,
  color: "#0891b2",
  tagline:
    "Builders of an island metropolis greater than any city in Europe — a warrior empire fed by tribute and sacrifice, toppled in just two years.",
  summary:
    "In barely two centuries the Mexica people rose from wandering newcomers to masters of central Mexico, ruling a tribute empire of millions from Tenochtitlan — an island city of canals and causeways larger than any in contemporary Europe. Their world of warriors, gods and human sacrifice was destroyed with shocking speed by Spanish conquistadors and the diseases they carried.",
  hero: {
    wikiTitle: "Pyramid of the Sun",
    alt: "The Pyramid of the Sun at Teotihuacan",
    caption: "The Pyramid of the Sun at Teotihuacan — the sacred city the Aztecs believed was where the gods created the world.",
  },
  facts: [
    { label: "People", value: "The Mexica" },
    { label: "Capital", value: "Tenochtitlan (now Mexico City)" },
    { label: "Structure", value: "Tribute empire (Triple Alliance)" },
    { label: "Capital's size", value: "~200,000 people" },
    { label: "Fell", value: "1521 to Cortés" },
  ],
  majorCities: [
    { name: "Tenochtitlan",  lat: 19.43, lon:  -99.13 },
    { name: "Teotihuacan",   lat: 19.69, lon:  -98.84 },
    { name: "Tlaxcala",      lat: 19.31, lon:  -98.24 },
    { name: "Tula",          lat: 20.06, lon:  -99.34 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments of the Aztec Empire",
      icon: "⭐",
      intro: "From wandering outcasts to masters of a continent — and a catastrophic fall in just two years. The pivotal events of the Aztec world.",
      milestones: [
        { year: "c. 1100 CE", title: "The Mexica Begin Their Migration", description: "According to Aztec tradition, the Mexica people leave their legendary homeland of Aztlan and begin a long, wandering migration south.", icon: "🚶", type: "rise" },
        { year: "1325 CE",    title: "Tenochtitlan is Founded", description: "The Mexica see the omen their god promised — an eagle on a cactus — and build their city on a marshy lake island in the Valley of Mexico.", icon: "🦅", type: "rise" },
        { year: "1376 CE",    title: "First Great Speaker Chosen", description: "Acamapichtli becomes the first Huey Tlatoani (Great Speaker), establishing the royal line that will rule until the Spanish conquest.", icon: "👑", type: "rise" },
        { year: "1428 CE",    title: "Triple Alliance Formed", description: "Tenochtitlan forges an alliance with Texcoco and Tlacopan, crushing the dominant Tepanecs and launching an era of rapid imperial expansion.", icon: "🤝", type: "rise" },
        { year: "c. 1440 CE", title: "Moctezuma I Builds the Empire", description: "The great ruler Moctezuma I (Ilhuicamina) conquers dozens of peoples and dramatically expands Aztec territory and tribute collection.", icon: "⚔️", type: "conquest" },
        { year: "1450 CE",    title: "The Great Famine", description: "Four years of failed harvests devastate Mexico; the Aztecs resort to mass sacrifice and slave sales to survive.", icon: "☁️", type: "fall" },
        { year: "1487 CE",    title: "Templo Mayor Consecrated", description: "The Great Temple is rededicated with a ceremony said to involve thousands of sacrifices — a display of Aztec power at its most terrifying.", icon: "🔺", type: "cultural" },
        { year: "1502 CE",    title: "Moctezuma II Takes Power", description: "The brilliant but ill-fated Moctezuma II becomes ruler, presiding over the empire at its greatest territorial extent.", icon: "👑", type: "rise" },
        { year: "1519 CE",    title: "Hernán Cortés Arrives", description: "The Spanish conquistador lands in Mexico, gathers thousands of indigenous allies who resent Aztec tribute demands and marches on Tenochtitlan.", icon: "⛵", type: "war" },
        { year: "1519 CE",    title: "Cortés Meets Moctezuma", description: "Moctezuma receives Cortés in the capital — within weeks, Cortés seizes him as a hostage, paralyzing the empire's leadership.", icon: "🤺", type: "war" },
        { year: "1520 CE",    title: "La Noche Triste", description: "The Aztecs rise up and drive the Spanish out of Tenochtitlan with enormous casualties — 'the Night of Sorrow' for Cortés's forces.", icon: "🌧️", type: "war" },
        { year: "1520 CE",    title: "Smallpox Strikes", description: "A smallpox epidemic sweeps Tenochtitlan, killing Moctezuma's successor and tens of thousands of defenders before the final siege.", icon: "💀", type: "fall" },
        { year: "1521 CE",    title: "Tenochtitlan Falls", description: "After a 75-day siege, the last Aztec emperor Cuauhtémoc is captured; Tenochtitlan is demolished and Mexico City built on its ruins.", icon: "💥", type: "fall" },
      ],
    },
    {
      id: "rise",
      type: "narrative",
      title: "The Eagle on the Cactus",
      icon: "🌵",
      image: {
        wikiTitle: "Tenochtitlan",
        alt: "Model of the city of Tenochtitlan",
        caption: "Tenochtitlan, built on an island in Lake Texcoco.",
      },
      paragraphs: [
        "The Mexica (whom we call the Aztecs) arrived late in the Valley of Mexico as poor, despised newcomers. According to legend, their god Huitzilopochtli told them to settle where they saw an eagle perched on a cactus devouring a snake — an omen they found on a swampy island in Lake Texcoco. There, around 1325, they founded Tenochtitlan. (That eagle and snake still adorn the Mexican flag.)",
        "From this unpromising marsh they built a marvel. By draining and reclaiming land, raising temples and laying out canals and broad causeways linking the island to the shore, they created a metropolis of perhaps 200,000 people — larger than London, Paris or any city in Europe at the time.",
        "In 1428 the Mexica joined two neighbouring cities in the Triple Alliance and turned conqueror, dominating central Mexico within decades through a combination of military skill and political cunning.",
      ],
      subLessons: [
        {
          title: "Outcasts in the Valley of Mexico",
          paragraphs: [
            "When the Mexica arrived in the Valley of Mexico in the 13th century, the best land was long since taken by older, prouder peoples like the Tepanecs and the Culhua. The newcomers were seen as crude barbarians from the northern deserts, and were pushed from place to place, surviving as hired soldiers and squatters on land nobody else wanted.",
            "Their reputation for ferocity made them useful but feared. According to one grim tradition, the Mexica so offended the Culhua — by sacrificing a princess they had been given as an honour — that they were driven out entirely, forced once more onto the move with nowhere to call home.",
            "This experience of humiliation shaped the Aztec character. A people who had been despised and landless built an identity around discipline, warfare and divine destiny — the conviction that their god had chosen them for greatness, however unlikely it seemed at the time.",
          ],
          terms: [
            { term: "Valley of Mexico", definition: "The high, lake-filled basin in central Mexico that was the heartland of the Aztec world." },
            { term: "Tepanecs", definition: "A dominant people of the valley whom the Mexica first served as vassals and later overthrew." },
          ],
        },
        {
          title: "Building a city on the water",
          image: {
            wikiTitle: "Chinampa",
            alt: "Chinampa floating gardens",
            caption: "Chinampas turned the lake itself into farmland.",
          },
          paragraphs: [
            "The island the Mexica settled in 1325 was a swampy, snake-ridden patch in Lake Texcoco — but it was defensible, and it was theirs. Over generations they transformed it, driving piles into the lakebed, reclaiming land, and laying out a grid of canals that earned Tenochtitlan its later nickname, the 'Venice of the New World'.",
            "To feed a growing population they perfected the chinampa: a raised garden plot built up from lake mud and rooted in place by willow trees. These astonishingly fertile beds, watered constantly by the lake, could yield several harvests a year and supported a city that swelled toward 200,000 people.",
            "Three great causeways linked the island to the mainland, pierced by wooden bridges that could be removed in war, while an aqueduct carried fresh spring water from Chapultepec. The result was both an engineering marvel and a fortress — a capital that could feed and defend itself.",
          ],
          terms: [
            { term: "Chinampa", definition: "A highly fertile artificial garden plot built up from lake mud — the 'floating gardens' that fed Tenochtitlan." },
            { term: "Causeway", definition: "A raised road across the water linking the island capital to the lakeshore, removable for defence." },
          ],
        },
        {
          title: "The Triple Alliance and the tribute machine",
          paragraphs: [
            "In 1428 the Mexica turned on their former overlords the Tepanecs and, with the cities of Texcoco and Tlacopan, formed the Triple Alliance. This partnership — with Tenochtitlan increasingly dominant — is what we call the Aztec Empire, and it launched a century of relentless expansion.",
            "The Aztecs rarely occupied the lands they beat. Instead they left local rulers in place and demanded tribute: maize, beans, cotton cloth, cacao, feathers, gold and, above all, captives for sacrifice. Specialised officials and tribute lists tracked exactly what each province owed, turning conquest into a steady stream of wealth flowing to the capital.",
            "This system made the empire rich but brittle. Subject peoples paid under threat of brutal reprisal rather than loyalty, and many seethed with resentment — a weakness that would prove fatal when a small band of Spaniards arrived offering the chance to throw off Aztec rule.",
          ],
          terms: [
            { term: "Tribute", definition: "Goods and captives that conquered peoples were forced to pay to their Aztec overlords." },
            { term: "Texcoco & Tlacopan", definition: "The two allied cities that joined Tenochtitlan in the 1428 Triple Alliance." },
          ],
        },
      ],
      terms: [
        { term: "Mexica", definition: "The people we usually call the Aztecs, who founded Tenochtitlan and led the empire." },
        { term: "Tenochtitlan", definition: "The island capital of canals and causeways, on whose ruins Mexico City now stands." },
        { term: "Triple Alliance", definition: "The coalition of three cities (led by the Mexica) that formed the Aztec Empire in 1428." },
      ],
      callout: {
        title: "An empire of tribute",
        body: "Rather than directly governing conquered peoples, the Aztecs mostly left local rulers in place and demanded heavy tribute — food, cloth, gold, and captives for sacrifice. This made the empire rich but also resented, leaving many subject peoples ready to side with the Spanish.",
      },
    },
    {
      id: "religion",
      type: "narrative",
      title: "Gods, War & Sacrifice",
      icon: "🔆",
      image: {
        wikiTitle: "Aztec sun stone",
        alt: "The Aztec Sun Stone",
        caption: "The Aztec Sun Stone, a monument to their cosmology of cyclical worlds.",
      },
      paragraphs: [
        "Aztec religion was intensely demanding. They believed the universe had been destroyed and reborn several times, and that the present sun was kept moving only by a constant supply of human blood. Without sacrifice, they feared, the sun would stop and the world would end.",
        "Human sacrifice — usually of war captives, atop the great pyramids — was therefore a sacred duty, performed on a scale that horrified the Spanish (and that Spanish accounts likely exaggerated). It was bound up with warfare: the Aztecs even fought ritual 'Flower Wars' partly to capture victims.",
        "Yet this was also a highly cultured society, with poetry, schools for both nobles and commoners, vast markets, botanical gardens and a deep love of flowers, music and rhetoric. The famous Sun Stone is a monument to their elaborate vision of cosmic time.",
      ],
      subLessons: [
        {
          title: "A universe that could end",
          paragraphs: [
            "The Aztecs believed they lived in the age of the Fifth Sun — and that four previous worlds had already been destroyed by catastrophe. The current sun, like the others, was doomed to collapse; the only question was whether human beings could postpone the end by sustaining the gods with offerings.",
            "Central to this was the idea of a cosmic debt. The gods had sacrificed themselves to set the sun in motion at the beginning of this age, and humans owed that sacrifice back. Blood — the most precious substance, the fluid of life itself — was the repayment that kept the machinery of the cosmos turning.",
            "This was not cruelty for its own sake but a terrifying responsibility. To the Aztec mind, every sunrise was uncertain, and the survival of the entire world rested on rituals performed correctly and on time. Religion was, quite literally, a matter of life and death for everyone.",
          ],
          terms: [
            { term: "Fifth Sun", definition: "The current cosmic age, which the Aztecs believed had been preceded by four destroyed worlds." },
            { term: "Cosmic debt", definition: "The belief that humans owed blood to the gods who had sacrificed themselves to create the sun." },
          ],
        },
        {
          title: "Sacrifice and the Flower Wars",
          image: {
            wikiTitle: "Templo Mayor",
            alt: "The Templo Mayor of Tenochtitlan",
            caption: "Captives were offered atop the Templo Mayor's twin shrines.",
          },
          paragraphs: [
            "Human sacrifice took place across the empire but reached its height at the Templo Mayor, the great twin pyramid of Tenochtitlan. Captives were led up the steep steps, where priests offered their hearts to the gods. At the rededication of the temple in 1487, Spanish and native sources claim thousands were sacrificed over several days.",
            "Because the gods demanded a steady supply of victims, warfare became sacred. The Aztecs prized capturing enemies alive over killing them, and a warrior's status rose with the number of captives he took. Elite fighters joined the orders of the Eagle and Jaguar warriors, the most honoured ranks in Aztec society.",
            "Most striking were the 'Flower Wars' — pre-arranged battles fought with neighbouring states not to seize land but specifically to take prisoners for sacrifice. To outsiders this seemed bizarre; to the Aztecs it was the orderly harvesting of the offerings the universe required.",
          ],
          terms: [
            { term: "Templo Mayor", definition: "The great twin pyramid at the heart of Tenochtitlan where sacrifices were performed." },
            { term: "Eagle & Jaguar warriors", definition: "The most honoured Aztec military orders, entered by taking captives in battle." },
          ],
        },
        {
          title: "Two calendars and the fear of the end",
          paragraphs: [
            "The Aztecs ran two calendars at once. The xiuhpohualli was a 365-day solar calendar governing farming and festivals; the tonalpohualli was a 260-day sacred almanac used for divination, naming children and choosing lucky days. Every Aztec carried a day-name from this sacred count that helped define their fate.",
            "The two calendars meshed like gears, and a given combination of dates recurred only once every 52 years — a span called the 'Calendar Round'. The end of each cycle was a moment of cosmic dread, when the Aztecs feared the sun might fail to return and the world would end.",
            "To prevent catastrophe they held the New Fire Ceremony. All fires across the empire were extinguished, pottery was smashed and homes swept clean. At midnight, priests on a sacred hill watched the stars; when the sky moved on schedule, a new fire was kindled on a sacrificed victim's chest and carried out to relight the world for another 52 years.",
          ],
          terms: [
            { term: "Calendar Round", definition: "The 52-year cycle formed by the meshing of the Aztec solar and sacred calendars." },
            { term: "New Fire Ceremony", definition: "The ritual held every 52 years to ensure the sun would rise and the world continue." },
          ],
        },
      ],
      terms: [
        { term: "Huitzilopochtli", definition: "The Mexica god of sun and war, who demanded blood to keep the sun moving." },
        { term: "Flower War", definition: "A ritual battle fought partly to capture enemies for sacrifice rather than to take land." },
        { term: "Sun Stone", definition: "A great carved disc depicting the Aztec cosmos and its cycles of creation and destruction." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Rulers & Conquerors",
      icon: "👤",
      intro: "The emperors who built and lost the empire — and the man who toppled it.",
      figures: [
        {
          name: "Itzcoatl",
          role: "Emperor (tlatoani)",
          lived: "reigned 1427–1440",
          bio: "Forged the Triple Alliance and launched the Aztec rise to empire, also rewriting history to glorify the Mexica.",
          image: { wikiTitle: "Itzcoatl", alt: "Depiction of Itzcoatl" },
        },
        {
          name: "Moctezuma II",
          role: "Last great emperor",
          lived: "c. 1466–1520",
          bio: "Ruled the empire at its height and met Cortés in 1519. Taken hostage by the Spanish, he died amid the chaos of the conquest.",
          image: { wikiTitle: "Moctezuma II", alt: "Depiction of Moctezuma II" },
        },
        {
          name: "Cuauhtémoc",
          role: "Final emperor",
          lived: "c. 1495–1525",
          bio: "Led the desperate last defence of Tenochtitlan against the Spanish siege, becoming a national hero of resistance in Mexico.",
          image: { wikiTitle: "Cuauhtémoc", alt: "Statue of Cuauhtémoc" },
        },
        {
          name: "Hernán Cortés",
          role: "Spanish conquistador",
          lived: "1485–1547",
          bio: "Landed in 1519 with a few hundred men, allied with the Aztecs' enemies, and within two years destroyed the empire.",
          image: { wikiTitle: "Hernán Cortés", alt: "Portrait of Hernán Cortés" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Aztec Ingenuity",
      icon: "💡",
      intro: "Far from 'primitive', the Aztecs were skilled engineers, farmers and administrators.",
      achievements: [
        {
          name: "Chinampas (floating gardens)",
          field: "Agriculture",
          description: "Artificial islands of mud and vegetation built in the lake created some of the most productive farmland on Earth.",
          legacy: "Still farmed today at Xochimilco near Mexico City.",
        },
        {
          name: "Causeways & aqueducts",
          field: "Engineering",
          description: "Broad raised roads with removable bridges linked the island city to land, while aqueducts brought fresh water.",
          legacy: "Awed the Spanish, who compared Tenochtitlan to Venice.",
        },
        {
          name: "Universal schooling",
          field: "Society",
          description: "Aztec children — both noble and common — were required to attend schools, an unusually broad system of education.",
          legacy: "One of the earliest near-universal education systems.",
        },
        {
          name: "Nahuatl & poetry",
          field: "Culture",
          description: "Their language Nahuatl was rich in poetry and rhetoric, recorded in painted books (codices).",
          legacy: "Nahuatl gave English words like 'chocolate', 'tomato' and 'avocado'.",
        },
      ],
    },
    {
      id: "conquest",
      type: "narrative",
      title: "The Fall of Tenochtitlan",
      icon: "⚔️",
      image: {
        wikiTitle: "Fall of Tenochtitlan",
        alt: "Depiction of the fall of Tenochtitlan",
        caption: "The siege of Tenochtitlan, 1521 — the end of the Aztec Empire.",
      },
      paragraphs: [
        "In 1519 Hernán Cortés landed on the Mexican coast with around 500 Spaniards, horses and cannon. He marched inland, gathering thousands of allies from peoples who hated Aztec tribute and sacrifice — above all the Tlaxcalans. The empire's own ruthlessness now turned against it.",
        "After a tense standoff, the Spanish seized the emperor Moctezuma. The Aztecs rose up and drove them out in a bloody retreat, but Cortés returned and laid siege to Tenochtitlan in 1521. The defenders fought heroically under Cuauhtémoc, but were doomed by Spanish guns, Indigenous allies, and above all smallpox — a European disease against which the Aztecs had no immunity, killing a huge share of the population.",
        "When Tenochtitlan fell in August 1521, the Spanish razed it and built Mexico City on its ruins. An empire of millions had been destroyed in barely two years — the start of three centuries of Spanish colonial rule over Mexico.",
      ],
      subLessons: [
        {
          title: "Cortés arrives and the emperor hesitates",
          paragraphs: [
            "In 1519 Hernán Cortés landed near modern Veracruz with around 500 men, 16 horses and a handful of cannon. In a famous act of commitment, he scuttled his own ships so his men could not turn back, then began the long march inland toward the fabled island capital.",
            "Moctezuma II faced an agonising choice. Reports spoke of bearded strangers on great 'water-houses', riding unknown beasts and wielding thunder. Some accounts say the timing fed a prophecy about the return of the god Quetzalcoatl; whatever the cause, the emperor wavered, sending gifts that only sharpened Spanish greed instead of confronting the intruders.",
            "Rather than crush the tiny force in the open, Moctezuma allowed the Spanish into Tenochtitlan as guests in November 1519. Within days Cortés seized the emperor in his own palace, ruling through him as a hostage — a stunning gamble that briefly handed a few hundred foreigners control of an empire of millions.",
          ],
          terms: [
            { term: "Quetzalcoatl", definition: "The feathered-serpent god whose prophesied return may have made Moctezuma hesitate." },
            { term: "Conquistador", definition: "A Spanish soldier-adventurer who sought conquest and gold in the Americas." },
          ],
        },
        {
          title: "Allies and an invisible enemy",
          paragraphs: [
            "Cortés's true strength was not his handful of men but the enemies the Aztecs had made. Tens of thousands of warriors from Tlaxcala — a fiercely independent state the Aztecs had never conquered — and from other resentful tribute-payers joined the Spanish, eager to overthrow their overlords. The conquest was as much a native revolt as a foreign invasion.",
            "An even deadlier ally was disease. Smallpox, carried unknowingly by the Europeans, tore through a population with no immunity. It killed perhaps half the inhabitants of the valley, including the new emperor Cuitláhuac, gutting Aztec leadership and morale at the worst possible moment.",
            "Together these forces tilted everything. Steel weapons, horses and cannon mattered, but it was the combination of mass native alliances and biological catastrophe that turned a daring raid into the fall of an empire.",
          ],
          terms: [
            { term: "Tlaxcala", definition: "An independent state, long an enemy of the Aztecs, that allied with the Spanish in huge numbers." },
            { term: "Smallpox", definition: "The European disease that devastated the Aztec population during the conquest." },
          ],
        },
        {
          title: "The siege and fall of Tenochtitlan",
          paragraphs: [
            "The Aztecs did fight back. After Spanish soldiers massacred celebrants at a festival, the city rose in fury and drove the invaders out on the night of 30 June 1520 — 'La Noche Triste', when many Spaniards drowned in the canals, weighed down by looted gold.",
            "But Cortés regrouped among his Tlaxcalan allies and returned the next year with a new weapon: thirteen small ships, built in pieces and carried overland, that gave him command of the lake. He cut the causeways, severed the aqueduct and blockaded the island, starving the great city.",
            "Through the summer of 1521 the Aztecs, led by the young emperor Cuauhtémoc, resisted street by street amid famine and disease. When the city finally fell in August, much of it lay in ruins. On those ruins the Spanish founded Mexico City — and three thousand years of independent indigenous civilisation in the valley came to an end.",
          ],
          terms: [
            { term: "La Noche Triste", definition: "'The Night of Sorrows' (1520) when the Aztecs drove the Spanish from the city." },
            { term: "Cuauhtémoc", definition: "The last Aztec emperor, who led the final defence of Tenochtitlan during the siege." },
          ],
        },
      ],
      terms: [
        { term: "Conquistador", definition: "A Spanish soldier-adventurer who conquered territories in the Americas." },
        { term: "Smallpox", definition: "A European disease that devastated Indigenous populations with no immunity, crucial to the conquest." },
        { term: "Indigenous allies", definition: "Peoples like the Tlaxcalans who, resenting Aztec rule, joined the Spanish against them." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on the empire of the Mexica.",
      questions: [
        {
          q: "What was the Aztec capital, built on an island in a lake?",
          options: ["Cusco", "Tikal", "Tenochtitlan", "Teotihuacan"],
          correct: 2,
          fb: "Tenochtitlan stood where Mexico City is today.",
        },
        {
          q: "What symbol, tied to the Aztec founding legend, is on the Mexican flag?",
          options: ["A jaguar", "An eagle on a cactus eating a snake", "A sun disc", "A pyramid"],
          correct: 1,
          fb: "The eagle, cactus and snake marked the spot to build the city.",
        },
        {
          q: "How did the Aztecs mainly control conquered peoples?",
          options: ["Direct governors everywhere", "Demanding heavy tribute", "Religious conversion", "Mass deportation"],
          correct: 1,
          fb: "It was a tribute empire — profitable but widely resented.",
        },
        {
          q: "Why did the Aztecs practise large-scale human sacrifice?",
          options: ["For entertainment", "To keep the sun moving and the world alive", "As criminal punishment", "To control population"],
          correct: 1,
          fb: "They believed blood was needed to sustain the sun and cosmos.",
        },
        {
          q: "What were chinampas?",
          options: ["War canoes", "Floating garden farm-plots", "Temples", "Tribute records"],
          correct: 1,
          fb: "These artificial island gardens made the lake hugely productive.",
        },
        {
          q: "Who led the Spanish conquest of the Aztecs?",
          options: ["Pizarro", "Columbus", "Cortés", "Magellan"],
          correct: 2,
          fb: "Cortés landed in 1519 and destroyed the empire by 1521.",
        },
        {
          q: "Besides guns and allies, what was decisive in the Aztec defeat?",
          options: ["Famine", "Smallpox", "An earthquake", "A solar eclipse"],
          correct: 1,
          fb: "European smallpox devastated the Aztecs, who had no immunity.",
        },
      ],
    },
  ],
};
