import type { Civilization } from "../types";

export const mesopotamia: Civilization = {
  id: "mesopotamia",
  name: "Mesopotamia",
  shortName: "Mesopotamia",
  emblem: "𒀭",
  region: "The Fertile Crescent (Iraq, Syria)",
  modernCountries: ["Iraq", "Syria", "Turkey", "Iran"],
  timespan: "c. 3500 – 539 BCE",
  startYear: -3500,
  endYear: -539,
  color: "#ca8a04",
  tagline:
    "The 'land between the rivers' — birthplace of cities, writing, law and the wheel, where history itself begins.",
  summary:
    "Mesopotamia, the fertile plain between the Tigris and Euphrates, was the world's first urban civilization. Here humans first built cities, invented writing, wrote down laws, divided the day into hours and the circle into degrees. A succession of peoples — Sumerians, Akkadians, Babylonians and Assyrians — rose and fell across three thousand years, each building on the last.",
  hero: {
    wikiTitle: "Ziggurat of Ur",
    alt: "The reconstructed Ziggurat of Ur",
    caption: "The Ziggurat of Ur — a temple-mountain to the moon god Nanna.",
  },
  facts: [
    { label: "Meaning", value: "Greek for 'between rivers'" },
    { label: "Rivers", value: "Tigris & Euphrates" },
    { label: "Key peoples", value: "Sumerians, Akkadians, Babylonians, Assyrians" },
    { label: "First cities", value: "Uruk, Ur, Lagash, Babylon" },
    { label: "Writing", value: "Cuneiform (c. 3200 BCE)" },
  ],
  majorCities: [
    { name: "Uruk",    lat: 31.32, lon: 45.64 },
    { name: "Ur",      lat: 30.96, lon: 46.10 },
    { name: "Babylon", lat: 32.54, lon: 44.42 },
    { name: "Nineveh", lat: 36.36, lon: 43.16 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments in Mesopotamia",
      icon: "⭐",
      intro: "From the world's first cities to the final conquest by Persia — the pivotal events across 3,000 years of civilisation between the rivers.",
      milestones: [
        { year: "c. 3500 BCE", title: "The World's First City", description: "Uruk explodes into the first true metropolis, home to tens of thousands of people, monumental temples and full-time craftspeople.", icon: "🏙️", type: "rise" },
        { year: "c. 3200 BCE", title: "Writing is Invented", description: "Sumerian scribes press wedge shapes into clay tablets to track grain and livestock — cuneiform, humanity's first writing system.", icon: "✍️", type: "innovation" },
        { year: "c. 2900 BCE", title: "The City-State Era Begins", description: "Independent city-states — Ur, Lagash, Nippur, Eridu — compete for dominance, each ruled by a priest-king claiming divine mandate.", icon: "⚡", type: "rise" },
        { year: "c. 2600 BCE", title: "The Royal Tombs of Ur", description: "The city of Ur buries its kings with extraordinary gold, lapis lazuli and dozens of sacrificed attendants in the Royal Tombs.", icon: "💀", type: "cultural" },
        { year: "c. 2334 BCE", title: "Sargon Creates the World's First Empire", description: "Sargon of Akkad conquers every Sumerian city, uniting Mesopotamia into the first multi-city empire in history.", icon: "⚔️", type: "conquest" },
        { year: "c. 2112 BCE", title: "The Ur III Renaissance", description: "The Third Dynasty of Ur reunites Mesopotamia, producing great art, the world's earliest known legal codes and a vast bureaucracy.", icon: "📜", type: "rise" },
        { year: "c. 1792 BCE", title: "Hammurabi Unifies Babylon", description: "The shrewd king Hammurabi of Babylon defeats his rivals and rules all Mesopotamia at the height of the Old Babylonian Kingdom.", icon: "👑", type: "rise" },
        { year: "c. 1754 BCE", title: "The Code of Hammurabi", description: "Hammurabi inscribes 282 laws on a 2.25-metre stone stele — one of the earliest and most complete legal codes ever found.", icon: "⚖️", type: "innovation" },
        { year: "c. 1595 BCE", title: "Hittites Sack Babylon", description: "Hittite raiders from Anatolia sack Babylon, abruptly ending the Old Babylonian Kingdom and plunging the region into fragmentation.", icon: "🔥", type: "war" },
        { year: "c. 911 BCE", title: "The Neo-Assyrian War Machine", description: "The Assyrians forge history's most feared military — iron weapons, siege engines and mass deportations — and conquer the entire Near East.", icon: "🗡️", type: "conquest" },
        { year: "c. 668 BCE", title: "Library of Ashurbanipal", description: "Assyrian king Ashurbanipal assembles 30,000 clay tablets at Nineveh — one of the first great archives of human knowledge.", icon: "📚", type: "cultural" },
        { year: "612 BCE",    title: "Nineveh Falls", description: "Babylonians and Medes unite to destroy Nineveh in a single campaign, ending Assyrian dominance with shocking speed.", icon: "💥", type: "fall" },
        { year: "605 BCE",    title: "Nebuchadnezzar Rebuilds Babylon", description: "Babylon rises again as the world's greatest city under Nebuchadnezzar II, who also destroys Jerusalem and deports the Jews.", icon: "🏛️", type: "rise" },
        { year: "c. 575 BCE", title: "Hanging Gardens & the Ishtar Gate", description: "Nebuchadnezzar completes the Ishtar Gate and, according to legend, the Hanging Gardens — one of the Seven Wonders of the Ancient World.", icon: "🌿", type: "cultural" },
        { year: "539 BCE",    title: "Cyrus Conquers Babylon", description: "The Persian king Cyrus the Great captures Babylon without a battle, freeing the Jews and ending 3,000 years of Mesopotamian power.", icon: "🌅", type: "fall" },
      ],
    },
    {
      id: "origins",
      type: "narrative",
      title: "The First Cities",
      icon: "🏙️",
      image: {
        wikiTitle: "Uruk",
        alt: "Ruins of the ancient city of Uruk",
        caption: "Uruk — one of the world's first true cities.",
      },
      paragraphs: [
        "Around 5,000 years ago, in the flat, hot plain of southern Iraq, people learned to control the unpredictable flooding of the Tigris and Euphrates with canals and dikes. Reliable irrigation produced food surpluses, and surpluses produced something new in human history: the city. What follows breaks that revolution into its parts — how the land was tamed, how the city was organised, who lived in it, and how it learned to remember.",
      ],
      subLessons: [
        {
          title: "Taming the rivers: irrigation and the food surplus",
          image: {
            wikiTitle: "Irrigation",
            alt: "Ancient irrigation canals",
            caption: "Canals and dikes turned a flood plain into the world's first breadbasket.",
          },
          paragraphs: [
            "Southern Mesopotamia is a paradox: searingly hot, almost rainless, yet threaded by two great rivers. Left alone, the Tigris and Euphrates flooded violently and unpredictably in spring — too late for planting and often destroying what was already in the ground. The land could not be farmed by rainfall as it could in the hills to the north.",
            "The Sumerians' answer was engineering on a massive scale. They dug branching networks of canals to carry river water far inland, raised dikes and levees to hold back floods, and built basins and sluice gates to store water and release it when crops needed it. This was not a task one family could manage; it required hundreds of people working together and someone to organise them.",
            "The payoff was a food surplus — far more barley, dates and wool than the farmers themselves consumed. That surplus is the hidden foundation of everything else: it freed a portion of the population from growing food, allowing some people to become full-time priests, potters, soldiers, scribes and kings. Civilization, in a sense, is what a surplus makes possible.",
          ],
          terms: [
            { term: "Irrigation", definition: "Supplying farmland with water through canals and channels rather than relying on rainfall." },
            { term: "Surplus", definition: "Food produced beyond what farmers need to survive, which can feed non-farming specialists." },
          ],
        },
        {
          title: "The shape of a Sumerian city",
          image: {
            wikiTitle: "Ziggurat of Ur",
            alt: "The Ziggurat of Ur",
            caption: "The ziggurat towered over the city as the home of its patron god.",
          },
          paragraphs: [
            "A Sumerian city was a dense, walled world of tens of thousands of people — Uruk may have held 50,000 at its height, making it the largest settlement humanity had ever built. Mud-brick houses packed along narrow, winding lanes; markets and workshops spilled into the streets; and beyond the walls stretched the irrigated fields that fed it all.",
            "At the centre rose the ziggurat, a massive stepped temple-tower of mud brick, visible for miles across the flat plain. It was understood as the literal home of the city's patron god — Inanna at Uruk, Nanna the moon god at Ur. The temple was not only religious: it owned vast estates, stored grain, employed workers and acted as the city's economic heart.",
            "Each city was its own state — a 'city-state' — fiercely independent and often at war with its neighbours over land and water. There was no single 'Sumeria'; there was Uruk, Ur, Lagash, Eridu and Nippur, each a separate power with its own ruler, walls and god.",
          ],
          terms: [
            { term: "Ziggurat", definition: "A massive stepped temple-tower of mud brick, the centre of a Mesopotamian city's religious and economic life." },
            { term: "City-state", definition: "An independent city and its surrounding farmland, with its own king and god — the basic Sumerian political unit." },
          ],
        },
        {
          title: "Kings, priests and a new social order",
          paragraphs: [
            "With thousands of strangers living together, Mesopotamia invented something the small village had never needed: a steep social hierarchy. At the top sat the king (the lugal, or 'big man') and the priesthood, who claimed to rule on behalf of the gods. Below them came scribes, merchants and skilled craftsmen; then the mass of farmers and labourers; and at the bottom, slaves, often captives of war.",
            "Kingship itself was a Sumerian innovation. Early leaders may have been war-chiefs chosen in emergencies, but the role hardened into a permanent, inherited office wrapped in religious authority — the king as the gods' steward on earth. The famous 'Sumerian King List' even claimed that 'kingship descended from heaven', listing rulers stretching back into myth.",
            "This new order needed administration. Temples and palaces employed armies of officials to count herds, collect taxes in grain, ration out food, and assign work gangs. Managing a city of tens of thousands was an information problem — and solving it would produce humanity's most important invention.",
          ],
          terms: [
            { term: "Lugal", definition: "Sumerian for 'big man' — a king, the supreme ruler of a city-state." },
            { term: "Hierarchy", definition: "A ranked social order with rulers and priests at the top and labourers and slaves at the bottom." },
          ],
        },
        {
          title: "Cuneiform: how the city learned to remember",
          image: {
            wikiTitle: "Cuneiform",
            alt: "A clay tablet covered in cuneiform writing",
            caption: "Wedge marks pressed into clay — the world's first writing.",
          },
          paragraphs: [
            "Writing was not invented to compose poetry — it was invented for accounting. To track who owed how much grain, scribes first used small clay tokens, then began pressing pictures of the goods into wet clay tablets. Over generations these pictures simplified into bundles of wedge-shaped strokes made with a cut reed: cuneiform, meaning 'wedge-shaped'.",
            "Crucially, the marks gradually stopped standing for things and began standing for sounds. Once symbols could spell out words by their sound, writing could record anything language could say — names, laws, prayers, letters, stories. A system built for barley receipts became capable of capturing thought itself.",
            "The consequences were staggering. Knowledge could now outlive the person who held it; rulers could send orders across distances; agreements could be fixed beyond memory and dispute. Historians draw the line here: everything before writing is 'prehistory', reconstructed from bones and pottery. With Mesopotamia's tablets, human beings begin to speak to us in their own words — and history begins.",
          ],
          terms: [
            { term: "Cuneiform", definition: "'Wedge-shaped' writing pressed into clay with a reed stylus — the world's first writing system." },
            { term: "Scribe", definition: "A trained professional writer who kept records, letters and literature in cuneiform." },
          ],
        },
      ],
      terms: [
        { term: "Ziggurat", definition: "A massive stepped temple-tower of mud brick, the centre of a Mesopotamian city's religious life." },
        { term: "City-state", definition: "An independent city and its surrounding farmland, with its own king and god — the basic Sumerian political unit." },
        { term: "Cuneiform", definition: "'Wedge-shaped' writing pressed into clay, the world's first writing system." },
      ],
      callout: {
        title: "Why it mattered",
        body: "Almost every later civilization inherited Mesopotamian inventions — the city, the written word, the law code, the 60-minute hour — usually without knowing it. This was the laboratory in which 'civilization' was first assembled.",
      },
    },
    {
      id: "empires",
      type: "narrative",
      title: "From City-States to Empires",
      icon: "👑",
      image: {
        wikiTitle: "Akkadian Empire",
        alt: "Map and artefacts of the Akkadian Empire",
        caption: "Sargon of Akkad built the world's first empire around 2334 BCE.",
      },
      paragraphs: [
        "For centuries the Sumerian city-states warred among themselves. Then, around 2334 BCE, a ruler named Sargon of Akkad conquered them all and forged the world's first empire — a single state ruling many cities and peoples under one king.",
        "Power passed down the centuries through a series of great states. Babylon rose under King Hammurabi (c. 1750 BCE), famous for carving nearly 300 laws onto a stone pillar for all to see. Later the Assyrians built a terrifying military empire stretching from Egypt to the Persian Gulf, ruling through professional armies, siege engines and deliberate terror.",
        "Finally Babylon rose again under Nebuchadnezzar II (the Neo-Babylonian Empire), who rebuilt the city with the legendary Ishtar Gate and, by tradition, the Hanging Gardens. In 539 BCE the Persian king Cyrus the Great captured Babylon, ending three millennia of independent Mesopotamian rule.",
      ],
      subLessons: [
        {
          title: "Sargon and the first empire",
          paragraphs: [
            "For centuries the Sumerian city-states fought endless wars over land and water, none able to dominate the rest for long. Then, around 2334 BCE, a remarkable man changed history. Sargon — by legend a gardener's adopted son, set adrift as a baby in a reed basket — rose to power in the city of Akkad and conquered all of Sumer.",
            "What made Sargon's achievement new was not just conquest but consolidation. He united dozens of formerly independent cities under a single ruler, installed loyal governors, standardised administration, and kept a standing army said to dine daily at his table. This was the world's first true empire — one state ruling many cities and peoples.",
            "The Akkadian Empire spread Sargon's Akkadian language across the region and lasted nearly two centuries. Though it eventually fell to internal revolt, drought and invasion, it created a template that every later Mesopotamian power — Babylonian, Assyrian — would seek to revive: the dream of unifying the land between the rivers under one crown.",
          ],
          terms: [
            { term: "Empire", definition: "A single state ruling many different cities and peoples — pioneered by Sargon of Akkad." },
            { term: "Akkadian", definition: "The Semitic language of Sargon's empire that spread across Mesopotamia." },
          ],
        },
        {
          title: "Hammurabi's Babylon and the rule of law",
          image: {
            wikiTitle: "Code of Hammurabi",
            alt: "The stele of the Code of Hammurabi",
            caption: "Hammurabi's laws were carved on a great stone stele for all to see.",
          },
          paragraphs: [
            "Centuries after Akkad fell, the city of Babylon rose to greatness under King Hammurabi, who by around 1750 BCE had defeated his rivals and ruled most of Mesopotamia. He was a tireless administrator, but he is remembered above all for one extraordinary object.",
            "On a black stone pillar over two metres tall, Hammurabi had nearly 300 laws carved for everyone to see. The Code covered trade, property, marriage, wages and crime, and is famous for its principle of retaliation — 'an eye for an eye'. Punishments often varied by social class, revealing a strictly layered society.",
            "The deeper innovation was the idea itself: that law should be written down, public and fixed, rather than depending on the whim of a ruler or judge. It is one of the earliest expressions of the principle, still central to justice today, that everyone is subject to a known set of rules.",
          ],
          terms: [
            { term: "Code of Hammurabi", definition: "One of the earliest written law codes, carved on a stele around 1750 BCE." },
            { term: "Stele", definition: "An upright stone monument, like the one bearing Hammurabi's law code." },
          ],
        },
        {
          title: "The Assyrian war machine and Babylon's last glory",
          image: {
            wikiTitle: "Ishtar Gate",
            alt: "The reconstructed Ishtar Gate of Babylon",
            caption: "Nebuchadnezzar's blue-tiled Ishtar Gate crowned the last great Babylon.",
          },
          paragraphs: [
            "From around 900 BCE the Assyrians of the north built the most fearsome military empire the world had yet seen. With iron weapons, professional soldiers, siege engines and a deliberate policy of terror and mass deportation, they conquered from Egypt to the Persian Gulf and ruled from great capitals like Nineveh.",
            "Assyrian kings were not only warriors. Ashurbanipal assembled a vast library of clay tablets at Nineveh, gathering the literature and learning of Mesopotamia into one of the first great archives — much of what we know of Mesopotamian myth survives because of it.",
            "When Assyria fell in 612 BCE, Babylon blazed up one final time. Under Nebuchadnezzar II the Neo-Babylonian Empire rebuilt the city into the wonder of the age, with the brilliant blue-tiled Ishtar Gate and, by tradition, the Hanging Gardens. But in 539 BCE the Persian king Cyrus the Great took Babylon, ending three millennia of independent Mesopotamian rule.",
          ],
          terms: [
            { term: "Assyrians", definition: "A northern Mesopotamian people who built a feared military empire ruling the whole Near East." },
            { term: "Neo-Babylonian Empire", definition: "Babylon's final golden age under Nebuchadnezzar II, ended by Persia in 539 BCE." },
          ],
        },
      ],
      terms: [
        { term: "Empire", definition: "A single state ruling many different cities and peoples — pioneered by Sargon of Akkad." },
        { term: "Stele", definition: "An upright stone monument, like the one bearing Hammurabi's law code." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Kings & Lawgivers",
      icon: "👤",
      intro: "A few names survive from the dawn of recorded history.",
      figures: [
        {
          name: "Sargon of Akkad",
          role: "Empire-builder",
          lived: "reigned c. 2334–2279 BCE",
          bio: "Rose from humble origins to conquer all of Sumer and beyond, founding the Akkadian Empire — the first multi-ethnic empire in history.",
          image: { wikiTitle: "Sargon of Akkad", alt: "Bronze head thought to depict Sargon" },
        },
        {
          name: "Hammurabi",
          role: "King of Babylon",
          lived: "reigned c. 1792–1750 BCE",
          bio: "United Mesopotamia under Babylon and issued the famous Code of Hammurabi, one of the earliest and most complete written legal codes.",
          image: { wikiTitle: "Hammurabi", alt: "Relief of Hammurabi" },
        },
        {
          name: "Ashurbanipal",
          role: "Assyrian king & scholar",
          lived: "reigned 669–631 BCE",
          bio: "Ruled the Assyrian Empire at its height and assembled the great Library of Nineveh, whose tablets preserved much of what we know of Mesopotamian literature.",
          image: { wikiTitle: "Ashurbanipal", alt: "Relief of Ashurbanipal" },
        },
        {
          name: "Nebuchadnezzar II",
          role: "King of Babylon",
          lived: "reigned 605–562 BCE",
          bio: "Rebuilt Babylon into the wonder of the ancient world, with the blue-tiled Ishtar Gate and the fabled Hanging Gardens, and conquered Jerusalem.",
          image: { wikiTitle: "Nebuchadnezzar II", alt: "Depiction of Nebuchadnezzar II" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Inventions & First Ideas",
      icon: "💡",
      intro: "The sheer number of 'firsts' from Mesopotamia is staggering.",
      achievements: [
        {
          name: "Writing (cuneiform)",
          field: "Communication",
          description: "The first writing system, evolving from accounting marks into a full script able to record any idea.",
          legacy: "The ancestor of recorded literature, law and history itself.",
        },
        {
          name: "The wheel & the plough",
          field: "Technology",
          description: "Mesopotamians were among the first to use the wheel for transport and pottery, and the seed plough for farming.",
          legacy: "Foundations of transport and agriculture used worldwide ever since.",
        },
        {
          name: "Written law",
          field: "Law",
          description: "Hammurabi's Code set out public, fixed punishments — the principle that law should be written down and apply to all.",
          legacy: "An ancestor of every later legal code.",
        },
        {
          name: "Base-60 mathematics",
          field: "Science",
          description: "Babylonians counted in base 60, dividing the hour into 60 minutes and the circle into 360 degrees.",
          legacy: "We still tell time and measure angles their way.",
        },
        {
          name: "Astronomy",
          field: "Science",
          description: "Priest-astronomers tracked the planets and stars with remarkable accuracy, predicting eclipses and creating the zodiac.",
          legacy: "The basis of the calendar and of later Greek astronomy.",
        },
      ],
    },
    {
      id: "legacy",
      type: "narrative",
      title: "Legacy of the Land Between the Rivers",
      icon: "📜",
      image: {
        wikiTitle: "Epic of Gilgamesh",
        alt: "Tablet of the Epic of Gilgamesh",
        caption: "The Epic of Gilgamesh — the world's oldest great work of literature.",
      },
      paragraphs: [
        "Mesopotamia gave the world its first work of great literature, the Epic of Gilgamesh, a poem about a king's search for immortality that includes a flood story strikingly similar to Noah's. Its themes of friendship, loss and mortality still move readers four thousand years later.",
        "Though its cities crumbled into the famous 'tells' (mounds) of the Iraqi desert, Mesopotamia's inventions never died. They flowed into the Bible, into Greek science and into the everyday fabric of modern life — every time we read, sign a contract, check the time, or measure a circle.",
        "Buried and forgotten for millennia, this lost world was only rediscovered in the 19th century when scholars learned to read cuneiform again — reopening, quite literally, the first chapter of the human story.",
      ],
      subLessons: [
        {
          title: "The Epic of Gilgamesh",
          image: {
            wikiTitle: "Epic of Gilgamesh",
            alt: "A tablet of the Epic of Gilgamesh",
            caption: "The oldest great work of literature, written on clay.",
          },
          paragraphs: [
            "Mesopotamia gave the world its first masterpiece of literature: the Epic of Gilgamesh, a poem far older than Homer or the Bible. It tells of Gilgamesh, the proud king of Uruk, and his deep friendship with the wild man Enkidu, with whom he performs great deeds before Enkidu's death shatters him.",
            "Grief sends Gilgamesh on a desperate quest for immortality — a search that ultimately fails, teaching him to accept his own mortality and to find meaning in the lasting works and city he leaves behind. Its themes of friendship, loss and the fear of death still move readers four thousand years later.",
            "The epic also contains a flood story strikingly similar to the tale of Noah, in which a man is warned to build a great boat to survive a divine deluge. This and other parallels reveal how deeply Mesopotamian stories flowed into the later traditions of the Bible.",
          ],
          terms: [
            { term: "Epic of Gilgamesh", definition: "The oldest surviving great work of literature, a Mesopotamian poem about a king and the meaning of mortality." },
            { term: "The flood myth", definition: "A Mesopotamian story of a man surviving a divine flood, echoed later in the tale of Noah." },
          ],
        },
        {
          title: "Inventions we still use every day",
          paragraphs: [
            "So many ordinary features of modern life trace back to Mesopotamia that we use its inventions without ever noticing. The wheel, the plough, the sailboat, irrigation and the brick all spread outward from this region into the wider world.",
            "Its mark on time and mathematics is even more intimate. The Babylonians counted in base 60, and that is why an hour has 60 minutes, a minute 60 seconds, and a circle 360 degrees. Every time we glance at a clock or measure an angle, we are thinking the way Babylonian astronomers did.",
            "Above all there was writing and law. The idea of recording language in durable signs, and the idea of fixed, public, written rules binding ruler and ruled alike, both began here — and underpin almost every civilisation that followed.",
          ],
          terms: [
            { term: "Base-60", definition: "The Babylonian counting system that gives us 60-minute hours and 360-degree circles." },
            { term: "Cradle of civilization", definition: "A nickname for Mesopotamia as the birthplace of cities, writing and law." },
          ],
        },
        {
          title: "Buried, forgotten and rediscovered",
          paragraphs: [
            "For all its achievements, Mesopotamia was eventually swallowed by time. Its mud-brick cities, abandoned and rained upon for centuries, slowly dissolved into great mounds of debris that dot the Iraqi landscape — features archaeologists call 'tells'. The very names of Sumer and Akkad faded from memory.",
            "Even the ability to read cuneiform was lost for nearly two thousand years. The wedge-shaped marks survived on buried tablets and weathered monuments, but no one alive could understand them; the first chapter of recorded human history had fallen silent.",
            "Only in the 19th century did scholars, working from multilingual inscriptions, finally crack the script again. Suddenly the buried world spoke once more — its kings, merchants, scribes and poets addressing us directly across five thousand years, reopening the opening pages of the human story.",
          ],
          terms: [
            { term: "Tell", definition: "An artificial mound formed by the accumulated ruins of an ancient settlement built and rebuilt over centuries." },
            { term: "Decipherment", definition: "The 19th-century scholarly breakthrough that made cuneiform readable again." },
          ],
        },
      ],
      terms: [
        { term: "Epic of Gilgamesh", definition: "The oldest surviving great work of literature, a Mesopotamian poem about a king and the meaning of mortality." },
        { term: "Tell", definition: "An artificial mound formed by the accumulated ruins of an ancient settlement built and rebuilt over centuries." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on the cradle of civilization.",
      questions: [
        {
          q: "What does 'Mesopotamia' mean?",
          options: ["Land of the pharaohs", "Between the rivers", "City of gods", "Land of gold"],
          correct: 1,
          fb: "It's Greek for 'between rivers' — the Tigris and the Euphrates.",
        },
        {
          q: "What was the world's first writing system, developed by the Sumerians?",
          options: ["Hieroglyphics", "The alphabet", "Cuneiform", "Linear B"],
          correct: 2,
          fb: "Cuneiform was pressed into clay tablets with a reed stylus from around 3200 BCE.",
        },
        {
          q: "Who founded the world's first empire around 2334 BCE?",
          options: ["Hammurabi", "Sargon of Akkad", "Nebuchadnezzar", "Gilgamesh"],
          correct: 1,
          fb: "Sargon of Akkad conquered the Sumerian city-states into a single empire.",
        },
        {
          q: "What is the Code of Hammurabi famous as?",
          options: ["A map of Babylon", "An early written law code", "A religious hymn", "A trade treaty"],
          correct: 1,
          fb: "Its ~300 laws were carved on a stele for all to see.",
        },
        {
          q: "A towering Mesopotamian temple was called a…",
          options: ["Pyramid", "Ziggurat", "Pagoda", "Forum"],
          correct: 1,
          fb: "Ziggurats were massive stepped mud-brick temple-towers.",
        },
        {
          q: "Why do we have 60 minutes in an hour and 360 degrees in a circle?",
          options: ["The Romans decided it", "From Babylonian base-60 mathematics", "It's based on the Moon", "From the Greeks"],
          correct: 1,
          fb: "The Babylonians counted in base 60 — and we still keep time their way.",
        },
        {
          q: "The Epic of Gilgamesh is notable as…",
          options: ["The first map", "The world's oldest great work of literature", "A law code", "A king list"],
          correct: 1,
          fb: "This Mesopotamian poem even contains a flood story like Noah's.",
        },
      ],
    },
  ],
};
