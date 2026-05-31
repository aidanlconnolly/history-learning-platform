import type { Civilization } from "../types";

export const maya: Civilization = {
  id: "maya",
  name: "The Maya Civilization",
  shortName: "Maya",
  emblem: "🗿",
  region: "Mesoamerica (Mexico & Central America)",
  modernCountries: ["Mexico", "Guatemala", "Belize", "Honduras", "El Salvador"],
  timespan: "c. 2000 BCE – 1500 CE",
  startYear: -2000,
  endYear: 1500,
  color: "#16a34a",
  tagline:
    "Master astronomers and mathematicians of the rainforest — inventors of the only complete writing system of the ancient Americas.",
  summary:
    "The Maya built a brilliant civilization of independent city-states across the rainforests of southern Mexico and Central America. Without metal tools, the wheel or pack animals, they raised soaring pyramids, tracked the heavens with astonishing precision, developed the concept of zero, and wrote in the only fully developed script of the pre-Columbian Americas.",
  hero: {
    wikiTitle: "Chichen Itza",
    alt: "El Castillo pyramid at Chichen Itza",
    caption: "El Castillo at Chichen Itza, a pyramid built as a giant calendar.",
  },
  facts: [
    { label: "Region", value: "Mesoamerican rainforest" },
    { label: "Form", value: "Independent city-states" },
    { label: "Writing", value: "Maya glyphs (fully developed)" },
    { label: "Famous for", value: "Calendars & astronomy" },
    { label: "Classic peak", value: "c. 250–900 CE" },
  ],
  majorCities: [
    { name: "Tikal",         lat:  17.22, lon: -89.62 },
    { name: "Chichen Itza",  lat:  20.68, lon: -88.57 },
    { name: "Palenque",      lat:  17.48, lon: -92.04 },
    { name: "Copan",         lat:  14.84, lon: -89.14 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments of the Maya",
      icon: "⭐",
      intro: "From the first villages of the rainforest to the Classic collapse and the Spanish conquest — 3,500 years of Maya history.",
      milestones: [
        { year: "c. 2000 BCE", title: "First Maya Villages", description: "Small farming communities appear across the Yucatán Peninsula and Guatemala highlands — the seeds of a brilliant civilisation.", icon: "🌱", type: "rise" },
        { year: "c. 700 BCE",  title: "Hieroglyphic Writing Develops", description: "Maya scribes develop the most complete writing system in the pre-Columbian Americas, capable of recording any spoken word.", icon: "✍️", type: "innovation" },
        { year: "c. 350 BCE",  title: "The Long Count Calendar", description: "Maya astronomers perfect their extraordinary calendar system, tracking time across millions of years with extraordinary accuracy.", icon: "📅", type: "innovation" },
        { year: "c. 100 BCE",  title: "First Monumental Cities", description: "Cities like El Mirador rise in the jungle — with massive pyramids, plazas and road networks connecting the Maya world.", icon: "🏛️", type: "rise" },
        { year: "c. 250 CE",   title: "Classic Period Begins", description: "The Maya Classic period opens: rival city-states flourish, building soaring temples and recording history in stone.", icon: "🌅", type: "rise" },
        { year: "c. 378 CE",   title: "Teotihuacan Influences Tikal", description: "A representative from the great city of Teotihuacan arrives at Tikal, triggering a political revolution and new artistic styles.", icon: "🌍", type: "cultural" },
        { year: "c. 500 CE",   title: "Tikal Dominates the Maya World", description: "Tikal emerges as the most powerful city in the Maya lowlands, its temples visible for miles above the jungle canopy.", icon: "👑", type: "rise" },
        { year: "c. 600 CE",   title: "Palenque Flourishes Under Pakal", description: "King Pakal the Great rules Palenque for 68 years, building the Temple of Inscriptions and presiding over a cultural golden age.", icon: "🔺", type: "cultural" },
        { year: "c. 750 CE",   title: "Peak of the Classic Period", description: "The Maya world reaches its height: perhaps 2 million people living in dozens of sophisticated cities connected by trade and politics.", icon: "✨", type: "rise" },
        { year: "c. 800 CE",   title: "The Classic Collapse Begins", description: "One by one, cities in the southern lowlands are abandoned — wars, drought, deforestation and political breakdown all play a role.", icon: "💔", type: "fall" },
        { year: "c. 900 CE",   title: "Southern Cities Abandoned", description: "Within a century, the great cities of the Classic period — Tikal, Palenque, Copán — fall silent, their temples swallowed by jungle.", icon: "🌿", type: "fall" },
        { year: "c. 987 CE",   title: "Chichen Itza Rises in the North", description: "The northern Yucatán sees a new florescence; Chichen Itza becomes the dominant power, blending Maya and Toltec artistic styles.", icon: "🏗️", type: "rise" },
        { year: "1441 CE",     title: "Mayapan Falls", description: "The last major Maya capital Mayapan is destroyed by rebellious lords — the Maya world fragments into small, warring kingdoms.", icon: "💥", type: "fall" },
        { year: "1519 CE",     title: "Spanish Contact", description: "Spanish explorers first encounter the Maya in the Yucatán, beginning decades of disease, war and colonisation.", icon: "⚔️", type: "war" },
        { year: "1697 CE",     title: "Last Independent Maya Kingdom Falls", description: "The Spanish conquer Nojpetén — the last independent Maya city-state — ending over 3,000 years of Maya political independence.", icon: "🌙", type: "fall" },
      ],
    },
    {
      id: "cities",
      type: "narrative",
      title: "Cities in the Rainforest",
      icon: "🌴",
      image: {
        wikiTitle: "Tikal",
        alt: "The temple-pyramids of Tikal",
        caption: "Tikal, one of the greatest Maya cities, rising above the jungle.",
      },
      paragraphs: [
        "Across the lowland jungles of Guatemala, Belize and southern Mexico, the Maya built dozens of independent city-states — Tikal, Palenque, Copán, Calakmul — each ruled by a divine king and often at war with its neighbours. Like the Greeks, they shared a culture and religion but were never politically united.",
        "Their cities were monumental: towering limestone pyramids, palaces, ball-courts and plazas, decorated with carved inscriptions recording the deeds of kings. All of this was achieved during the 'Classic' period (c. 250–900 CE) without metal tools, draft animals or the wheel for transport.",
        "Maya society rested on intensive rainforest agriculture — maize above all, grown with slash-and-burn fields, terraces and raised plots. Maize was so central it featured in their creation myth, in which the gods fashioned humans from corn dough.",
      ],
      subLessons: [
        {
          title: "A patchwork of rival city-states",
          paragraphs: [
            "Unlike the Aztecs or Inca, the Maya never formed a single empire. From around 250 CE their world was a shifting mosaic of dozens of independent city-states — Tikal, Calakmul, Palenque, Copán and many more — each with its own divine king, gods and ambitions.",
            "These cities were locked in constant rivalry, forming alliances, trading, intermarrying and waging war. The two superpowers Tikal and Calakmul fought a generations-long struggle for dominance, drawing smaller cities into their rival networks like pieces on a board.",
            "This fragmentation was a source of both creativity and instability. Competition drove spectacular building and artistic achievement, but no single power ever unified the Maya — which may help explain why their civilisation could fragment so dramatically when crisis came.",
          ],
          terms: [
            { term: "City-state", definition: "An independent Maya city and its territory, ruled by a divine king — never unified into one empire." },
            { term: "Divine king", definition: "The Maya 'k'uhul ajaw' or holy lord, who ruled a city-state as a sacred figure." },
          ],
        },
        {
          title: "Pyramids carved from the jungle",
          image: {
            wikiTitle: "Tikal Temple I",
            alt: "Temple I at Tikal",
            caption: "Steep limestone temple-pyramids towered above the rainforest.",
          },
          paragraphs: [
            "The Maya raised monumental cities in dense tropical jungle, without metal tools, draft animals or the wheel. At their hearts stood steep limestone pyramids topped with temples, surrounded by palaces, ball-courts and plazas covered in carved monuments and once painted in vivid colours.",
            "Feeding large populations in the rainforest demanded ingenuity. The Maya cleared and terraced land, built raised fields in swampy areas, and dug great reservoirs and cisterns to store rainwater through the dry season, when surface water grew scarce.",
            "At the centre of life was maize. Grown with slash-and-burn fields, terraces and raised plots, it was so vital that it featured in the Maya creation myth, in which the gods fashioned the first humans out of corn dough.",
          ],
          terms: [
            { term: "Classic period", definition: "The height of Maya civilization, c. 250–900 CE, of great cities and inscriptions." },
            { term: "Reservoir", definition: "Large water-storage works the Maya built to survive the dry season." },
          ],
        },
        {
          title: "The ritual ball game",
          paragraphs: [
            "Almost every Maya city had at least one ball-court — a long stone alley flanked by sloping walls — where players competed in a fast, dangerous game using a heavy rubber ball, which they struck with their hips, never their hands or feet.",
            "The game was far more than sport. It was woven into Maya religion and myth, re-enacting the struggle between the forces of life and the underworld told in the sacred epic, the Popol Vuh. Courts were sacred spaces, and games could be charged with cosmic and political meaning.",
            "At times the stakes were deadly serious. Some games are thought to have ended in human sacrifice, with captives or losing players offered to the gods — a vivid reminder of how closely the Maya bound together play, ritual and the demands of their deities.",
          ],
          terms: [
            { term: "Ball game", definition: "A ritual game played with a rubber ball in stone courts, sometimes ending in sacrifice." },
            { term: "Popol Vuh", definition: "The sacred Maya creation epic, echoed in the symbolism of the ball game." },
          ],
        },
      ],
      terms: [
        { term: "City-state", definition: "An independent Maya city and its territory, ruled by a divine king — never unified into one empire." },
        { term: "Classic period", definition: "The height of Maya civilization, c. 250–900 CE, of great cities and inscriptions." },
        { term: "Ball game", definition: "A ritual game played with a rubber ball in stone courts, sometimes ending in sacrifice." },
      ],
      callout: {
        title: "What made the Maya different",
        body: "The Maya reached intellectual heights — writing, advanced mathematics, precise astronomy — that rival the Old World, yet did so as a Stone Age culture without metal, wheels or large domestic animals. Their genius was in the mind, not the machine.",
      },
    },
    {
      id: "writing-time",
      type: "narrative",
      title: "Writing, Numbers & the Stars",
      icon: "🌟",
      image: {
        wikiTitle: "Maya script",
        alt: "Maya hieroglyphic writing",
        caption: "Maya glyphs — the only complete writing system of the ancient Americas.",
      },
      paragraphs: [
        "The Maya developed the only fully developed writing system in the pre-Columbian Americas — a complex script of glyphs combining sounds and whole words, carved on monuments and written in folding bark-paper books called codices. Tragically, Spanish priests burned nearly all the codices as 'works of the devil'; only four survive.",
        "In mathematics the Maya used a base-20 system and, crucially, the concept of zero — developed independently and centuries before it reached Europe. This let them handle enormous numbers and track vast spans of time.",
        "Above all, the Maya were obsessed with time. Priest-astronomers tracked the movements of the Sun, Moon and especially Venus with remarkable accuracy, and ran several interlocking calendars at once — including the famous 'Long Count' that measured cycles of thousands of years (and which gave rise to the 2012 'end of the world' myth).",
      ],
      subLessons: [
        {
          title: "Writing in glyphs",
          image: {
            wikiTitle: "Maya script",
            alt: "Maya hieroglyphic writing",
            caption: "The only full writing system of the ancient Americas.",
          },
          paragraphs: [
            "The Maya developed the only complete writing system in the pre-Columbian Americas — one able to record any sentence in their spoken language. Its 800-plus glyphs blended logograms (signs for whole words) with syllabic signs for sounds, which scribes could combine in flexible, even artistic ways.",
            "They wrote everywhere: carved on stone monuments and temple stairways, painted on pottery, and inked into folding bark-paper books called codices. Scribes were honoured members of the elite, and literacy was a mark of noble and priestly status.",
            "Tragically, Spanish missionaries burned almost all the Maya codices as 'works of the devil' — only four survive today. For centuries the script was unreadable, but a remarkable decipherment effort in the late 20th century cracked it, letting the Maya speak to us once more in their own words.",
          ],
          terms: [
            { term: "Codex", definition: "A folding bark-paper Maya book; only four escaped destruction by the Spanish." },
            { term: "Decipherment", definition: "The 20th-century breakthrough that finally made the Maya script readable." },
          ],
        },
        {
          title: "Zero and a base-20 mathematics",
          paragraphs: [
            "Maya mathematics was strikingly advanced. They counted in a base-20 (vigesimal) system using just three symbols — a dot for one, a bar for five, and a shell-shape for zero. Their independent invention of zero, one of humanity's most important mathematical ideas, arose entirely separately from the Old World and centuries before it reached Europe.",
            "With zero and place-value notation, the Maya could write and manipulate enormous numbers with ease. This was no abstract exercise — their mathematics was bound up with their obsession with tracking the vast cycles of time.",
            "Numbers, calendars and religion were inseparable in Maya thought. Counting the days was a sacred act, and the ability to compute great spans of time gave priests their authority to schedule rituals and read the will of the gods.",
          ],
          terms: [
            { term: "Zero", definition: "The Maya independently invented a symbol for zero, central to their advanced mathematics." },
            { term: "Vigesimal", definition: "The Maya base-20 counting system, using dots, bars and a shell for zero." },
          ],
        },
        {
          title: "Astronomers and the Long Count",
          paragraphs: [
            "Maya priest-astronomers observed the heavens with extraordinary care from buildings aligned to the sky. They tracked the Sun, Moon and especially the planet Venus, and could predict eclipses far into the future — astonishing accuracy achieved with the naked eye alone.",
            "They ran several interlocking calendars at once: a 260-day sacred round and a 365-day solar year meshed together in a 52-year cycle, timing festivals and farming to the heavens. Their solar calendar was in fact more accurate than the European one in use at the time.",
            "Most ambitious was the Long Count, which counted days continuously from a mythical creation date in 3114 BCE, letting the Maya fix any event precisely across thousands of years. It was the completion of one of its great cycles in 2012 that — quite wrongly — inspired modern 'end of the world' myths.",
          ],
          terms: [
            { term: "Long Count", definition: "The Maya calendar that counted long cycles of time, famously linked to the 2012 myth." },
            { term: "Venus cycle", definition: "The movements of Venus, tracked precisely by Maya astronomers for ritual timing." },
          ],
        },
      ],
      terms: [
        { term: "Codex", definition: "A folding bark-paper Maya book; only four escaped destruction by the Spanish." },
        { term: "Long Count", definition: "The Maya calendar that counted long cycles of time, famously linked to the 2012 myth." },
        { term: "Zero", definition: "The Maya independently invented a symbol for zero, central to their advanced mathematics." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Kings of the Maya",
      icon: "👤",
      intro: "Maya history is now readable thanks to deciphered inscriptions naming individual kings.",
      figures: [
        {
          name: "K'inich Janaab' Pakal",
          role: "King of Palenque",
          lived: "603–683 CE",
          bio: "Palenque's greatest ruler, who reigned almost 70 years and was buried in a spectacular jade-masked tomb deep inside the Temple of the Inscriptions.",
          image: { wikiTitle: "K'inich Janaab' Pakal", alt: "Funerary mask of Pakal" },
        },
        {
          name: "Yax K'uk' Mo'",
          role: "Founder-king of Copán",
          lived: "reigned from 426 CE",
          bio: "The warrior-king who founded the ruling dynasty of Copán, one of the most artistically refined of all Maya cities.",
          image: { wikiTitle: "K'inich Yax K'uk' Mo'", alt: "Depiction of Yax K'uk' Mo'" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Achievements of the Maya",
      icon: "💡",
      intro: "Intellectual feats achieved without the tools the Old World took for granted.",
      achievements: [
        {
          name: "A complete writing system",
          field: "Communication",
          description: "Hundreds of glyphs recorded history, astronomy and ritual — the only full script of the ancient Americas.",
          legacy: "Largely deciphered in the late 20th century, revealing Maya history in their own words.",
        },
        {
          name: "The concept of zero",
          field: "Mathematics",
          description: "An independent invention of zero within a base-20 system, enabling complex calculation.",
          legacy: "One of only a few times in human history zero was invented from scratch.",
        },
        {
          name: "Precise calendars",
          field: "Astronomy",
          description: "Interlocking calendars and Venus tables predicted celestial events centuries ahead.",
          legacy: "Among the most accurate timekeeping of the pre-modern world.",
        },
        {
          name: "Monumental architecture",
          field: "Engineering",
          description: "Stepped limestone pyramids, observatories and ball-courts built with stone tools and human muscle.",
          legacy: "Ruins like Tikal and Chichen Itza are now World Heritage wonders.",
        },
      ],
    },
    {
      id: "collapse",
      type: "narrative",
      title: "Collapse & Survival",
      icon: "🌿",
      image: {
        wikiTitle: "Classic Maya collapse",
        alt: "Maya ruins reclaimed by jungle",
        caption: "Many Maya cities were abandoned and swallowed by the rainforest.",
      },
      paragraphs: [
        "Around 800–900 CE, the great cities of the southern Maya lowlands were abandoned one after another. The 'Classic Maya collapse' is still debated, but likely combined prolonged drought, overpopulation, environmental strain and endless warfare. The jungle swallowed the pyramids.",
        "Yet the Maya did not vanish. City-states such as Chichen Itza flourished in the north for centuries more, and when the Spanish arrived in the 1500s, millions of Maya still lived across the region. The last independent Maya kingdom held out until 1697.",
        "Today some six million Maya people still live in Mexico and Central America, speaking around thirty Mayan languages and keeping ancient traditions alive — making the Maya not a 'lost' civilization but a living one.",
      ],
      subLessons: [
        {
          title: "The Classic collapse",
          image: {
            wikiTitle: "Classic Maya collapse",
            alt: "Maya ruins reclaimed by jungle",
            caption: "The southern cities fell silent and the jungle moved in.",
          },
          paragraphs: [
            "The Maya golden age — the Classic Period — saw the southern lowland cities reach their peak of population, power and artistic achievement, home to perhaps two million people at its height around 750 CE.",
            "Then, over roughly 150 years, one great southern city after another was abandoned. Construction stopped, monuments ceased to be carved, and populations melted away into the forest. This 'Classic Maya collapse' is one of archaeology's most debated puzzles.",
            "There was no single cause. Scholars point to a combination of severe, prolonged droughts, overpopulation and exhausted farmland, and escalating warfare between rival states — a perfect storm that broke the fragile balance of the rainforest cities.",
          ],
          terms: [
            { term: "Classic Maya collapse", definition: "The mysterious 9th-century abandonment of the southern lowland cities, likely driven by drought and war." },
            { term: "Drought", definition: "Prolonged dry spells now thought to be a major driver of the Classic collapse." },
          ],
        },
        {
          title: "The north and the Spanish conquest",
          paragraphs: [
            "The collapse was regional, not total. As the southern cities fell silent, the northern Yucatán flourished: Chichen Itza rose to dominance, blending Maya and central-Mexican styles, and later Mayapan led a league of cities until it too fell in 1441.",
            "When the Spanish arrived in the 1500s, they found not one empire but many small, fractious Maya kingdoms. This fragmentation made conquest slow and difficult — there was no single capital or emperor to capture, as there had been with the Aztecs and Inca.",
            "Resistance was fierce and prolonged. The last independent Maya kingdom, Nojpetén, did not fall until 1697 — more than 170 years after the Spanish first appeared, and long after the great empires of Mexico and Peru had been overthrown.",
          ],
          terms: [
            { term: "Chichen Itza", definition: "The great northern city that flourished after the southern collapse." },
            { term: "Nojpetén", definition: "The last independent Maya kingdom, conquered by Spain only in 1697." },
          ],
        },
        {
          title: "A living civilisation",
          paragraphs: [
            "The Maya are often wrongly described as a 'lost' or 'vanished' people. In truth they never disappeared at all — the collapse destroyed a political order, not a population, and their descendants endured through centuries of colonial rule.",
            "Today some six million Maya people live across Mexico, Guatemala, Belize and Honduras, speaking around thirty distinct Mayan languages. Many keep ancient traditions, weaving patterns, farming practices and elements of the old calendar alive.",
            "This makes the Maya not a relic of the past but a living civilisation — one whose ancestors' ruined cities, deciphered glyphs and brilliant calendars connect a vibrant modern people directly to one of the great intellectual achievements of the ancient world.",
          ],
          terms: [
            { term: "Living culture", definition: "Millions of Maya people survive today, speaking Mayan languages and preserving traditions." },
            { term: "Mayan languages", definition: "Around thirty related languages still spoken by Maya communities today." },
          ],
        },
      ],
      terms: [
        { term: "Classic Maya collapse", definition: "The mysterious 9th-century abandonment of the southern lowland cities, likely driven by drought and war." },
        { term: "Living culture", definition: "Millions of Maya people survive today, speaking Mayan languages and preserving traditions." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on the Maya of the rainforest.",
      questions: [
        {
          q: "How was the Maya world organised politically?",
          options: ["A single empire", "Independent warring city-states", "A republic", "Nomadic tribes"],
          correct: 1,
          fb: "Like the Greeks, the Maya shared a culture but were never politically united.",
        },
        {
          q: "What did the Maya achieve WITHOUT metal tools, the wheel or draft animals?",
          options: ["Gunpowder", "Towering pyramids and writing", "Ocean-going ships", "Iron weapons"],
          correct: 1,
          fb: "Their monuments and intellectual feats were all achieved with stone-age technology.",
        },
        {
          q: "The Maya script is notable as…",
          options: ["A simple set of pictures", "The only complete writing system of the ancient Americas", "Borrowed from Egypt", "Undeciphered"],
          correct: 1,
          fb: "It was a full glyphic script — and has largely been deciphered.",
        },
        {
          q: "Which mathematical concept did the Maya independently invent?",
          options: ["Negative numbers", "Zero", "Calculus", "Logarithms"],
          correct: 1,
          fb: "The Maya invented zero within their base-20 system.",
        },
        {
          q: "What were the Maya especially obsessed with tracking?",
          options: ["Gold", "Time and the stars", "Ocean tides", "Trade routes"],
          correct: 1,
          fb: "Their priest-astronomers ran multiple precise calendars at once.",
        },
        {
          q: "What likely caused the Classic Maya collapse around 900 CE?",
          options: ["A single earthquake", "Drought, overpopulation and warfare", "Foreign invasion", "A plague from Europe"],
          correct: 1,
          fb: "A mix of prolonged drought, environmental strain and war is the leading theory.",
        },
        {
          q: "What is true of the Maya today?",
          options: ["They have completely vanished", "Millions still live and speak Mayan languages", "Only their ruins remain", "They moved to Europe"],
          correct: 1,
          fb: "Around six million Maya people keep their languages and traditions alive.",
        },
      ],
    },
  ],
};
