import type { Civilization } from "../types";

export const persia: Civilization = {
  id: "persia",
  name: "The Persian Empire",
  shortName: "Persia",
  emblem: "🦁",
  region: "Iran & the Near East",
  modernCountries: ["Iran", "Iraq", "Turkey", "Egypt", "Saudi Arabia", "Israel", "Jordan", "Afghanistan", "Pakistan"],
  timespan: "550 – 330 BCE (Achaemenid)",
  startYear: -550,
  endYear: -330,
  color: "#9333ea",
  tagline:
    "The first true superpower — an empire of many peoples held together not by terror but by tolerance, roads and good administration.",
  summary:
    "The Achaemenid Persian Empire was the largest the world had yet seen, stretching from the Indus to the Aegean and ruling perhaps 40% of humanity. Founded by Cyrus the Great, it pioneered a new model of empire: diverse peoples allowed to keep their own customs and religions, knit together by superb roads, a postal system and a tolerant central administration.",
  hero: {
    wikiTitle: "Apadana",
    alt: "The Apadana audience hall at Persepolis",
    caption: "The Apadana at Persepolis — where delegations from across the empire brought tribute to the King of Kings.",
  },
  facts: [
    { label: "Founder", value: "Cyrus the Great" },
    { label: "Capitals", value: "Persepolis, Susa, Pasargadae" },
    { label: "Peak share", value: "~40% of world population" },
    { label: "Religion", value: "Zoroastrianism" },
    { label: "Ended by", value: "Alexander the Great (330 BCE)" },
  ],
  majorCities: [
    { name: "Persepolis",  lat: 29.93, lon: 52.89 },
    { name: "Susa",        lat: 32.19, lon: 48.25 },
    { name: "Pasargadae",  lat: 30.19, lon: 53.18 },
    { name: "Ecbatana",    lat: 34.80, lon: 48.52 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments in the Persian Empire",
      icon: "⭐",
      intro: "From Cyrus the Great's astonishing rise to Alexander's conquest — the pivotal events of history's first true superpower.",
      milestones: [
        { year: "550 BCE", title: "Cyrus Overthrows the Medes", description: "The Persian king Cyrus rebels against his Median overlords and wins, founding the Achaemenid dynasty and setting off one of history's great conquests.", icon: "🦁", type: "rise" },
        { year: "547 BCE", title: "Lydia Falls — King Croesus Captured", description: "Cyrus defeats the legendarily rich King Croesus of Lydia, seizing western Anatolia and access to the Aegean world.", icon: "💰", type: "conquest" },
        { year: "539 BCE", title: "Babylon Falls Without a Fight", description: "Cyrus enters Babylon as a liberator, frees the Jewish exiles and lets all peoples keep their gods — establishing Persia's tolerant model of empire.", icon: "🕊️", type: "rise" },
        { year: "530 BCE", title: "Cyrus Dies in Battle", description: "Cyrus is killed campaigning against the Massagetae — his legacy is the largest empire the world had ever seen.", icon: "⚔️", type: "fall" },
        { year: "525 BCE", title: "Egypt Conquered", description: "Cambyses II, son of Cyrus, defeats the last independent pharaoh and adds Egypt to the empire, stretching it from the Nile to the Indus.", icon: "🔺", type: "conquest" },
        { year: "522 BCE", title: "Darius Seizes Power", description: "After a period of chaos, Darius I seizes power and records his triumph on a cliff face at Behistun in three languages.", icon: "👑", type: "rise" },
        { year: "c. 518 BCE", title: "Persepolis Construction Begins", description: "Darius begins building Persepolis as the ceremonial capital, where nations of the empire will bring tribute to the King of Kings.", icon: "🏛️", type: "cultural" },
        { year: "513 BCE", title: "Darius Campaigns into Europe", description: "Darius crosses the Bosphorus with a huge army, bridging the Danube — the largest military expedition into Europe yet.", icon: "🌊", type: "conquest" },
        { year: "490 BCE", title: "Marathon — First Greek Defeat of Persia", description: "A Persian expeditionary force is routed by the Athenians at Marathon — a shocking loss that plants seeds of future catastrophe.", icon: "🏃", type: "war" },
        { year: "480 BCE", title: "Xerxes Invades Greece", description: "Xerxes leads perhaps 100,000 men into Greece, burns Athens — but his fleet is destroyed at Salamis and his army crushed at Plataea.", icon: "🔥", type: "war" },
        { year: "465 BCE", title: "Xerxes Assassinated", description: "Xerxes is murdered by his own courtiers, beginning a slow decline of royal authority and increasing court intrigues.", icon: "🗡️", type: "fall" },
        { year: "449 BCE", title: "Peace of Callias", description: "Persia and Athens agree a formal peace, acknowledging Persian withdrawal from the Aegean — ending the Greco-Persian Wars.", icon: "🤝", type: "cultural" },
        { year: "404 BCE", title: "Egypt Breaks Free", description: "Egypt rebels and regains independence for 60 years — a sign of Persia's weakening grip on its most valuable province.", icon: "📉", type: "fall" },
        { year: "334 BCE", title: "Alexander Invades", description: "Alexander the Great crosses into Asia; within three years he defeats Darius III at Gaugamela, the last great battle of the Persian Empire.", icon: "⚔️", type: "war" },
        { year: "330 BCE", title: "Persepolis Burns, Empire Ends", description: "Alexander burns the great palace of Persepolis and Darius III is murdered by his own men — ending 220 years of Achaemenid rule.", icon: "💥", type: "fall" },
      ],
    },
    {
      id: "rise",
      type: "narrative",
      title: "Cyrus & the Rise of Persia",
      icon: "🦁",
      image: {
        wikiTitle: "Cyrus Cylinder",
        alt: "The Cyrus Cylinder",
        caption: "The Cyrus Cylinder, sometimes called an early charter of tolerance.",
      },
      paragraphs: [
        "In 550 BCE a Persian king named Cyrus rebelled against his Median overlords and, within twenty years, conquered the greatest powers of the age — Media, wealthy Lydia (and its king Croesus) and mighty Babylon. He built the largest empire the world had ever seen.",
        "What made Cyrus extraordinary was how he ruled. Rather than enslaving or deporting conquered peoples, he let them keep their languages, customs and gods. Famously, he freed the Jews from their Babylonian exile and let them return to rebuild Jerusalem — for which the Hebrew Bible calls him 'the anointed of the Lord'.",
        "The Cyrus Cylinder, recording his capture of Babylon and his policy of restoring temples and peoples, has been hailed (perhaps generously) as one of the first declarations of human rights. Tolerance, for Cyrus, was not just virtue but strategy: contented subjects rarely rebel.",
      ],
      subLessons: [
        {
          title: "From vassal to world-conqueror",
          paragraphs: [
            "Persia began as a minor kingdom in the southwest of modern Iran, a subject of the more powerful Medes to the north. Around 550 BCE its young king, Cyrus II of the Achaemenid family, rose in revolt, overthrew the Median king and seized his throne — turning the tables on his overlords in a single bold stroke.",
            "What followed was one of the fastest expansions in ancient history. Cyrus marched west and defeated the fabulously wealthy King Croesus of Lydia (in modern Turkey), absorbing the Greek cities of the Aegean coast. Then in 539 BCE he took Babylon, the greatest city of the age, reportedly entering it almost without a fight.",
            "In roughly twenty years Cyrus had forged the largest empire the world had yet seen, stretching from the Aegean to Central Asia. Unlike the brutal conquerors before him, he presented himself not as a destroyer but as a liberator and restorer — a reputation that helped his vast, hastily-assembled realm hold together.",
          ],
          terms: [
            { term: "Achaemenid", definition: "The royal dynasty, named after an ancestor Achaemenes, that founded and ruled the Persian Empire." },
            { term: "Medes", definition: "The Iranian people and kingdom that ruled Persia until Cyrus overthrew them around 550 BCE." },
          ],
        },
        {
          title: "Rule by tolerance, not terror",
          paragraphs: [
            "The empires before Persia — above all Assyria — had held power through fear: massacring rebels, looting temples and deporting whole populations. Cyrus pioneered the opposite strategy. He let conquered peoples keep their own languages, laws, customs and gods, and presented himself as the legitimate restorer of each land's traditions rather than a foreign tyrant.",
            "The most famous example is recorded in the Hebrew Bible: Cyrus freed the Jews, whom the Babylonians had carried into exile, and funded their return to Jerusalem to rebuild their Temple. For this the Bible hails him as 'the anointed of the Lord' — extraordinary praise for a foreign, non-Jewish king.",
            "This was enlightened self-interest as much as kindness. Subjects allowed to keep their identity and worship had far less reason to revolt, and the empire could tap their loyalty, taxes and soldiers. Persia thus invented a durable answer to the central problem of empire: how to rule many different peoples without crushing them.",
          ],
          terms: [
            { term: "Cyrus Cylinder", definition: "A clay cylinder recording Cyrus's tolerant policies, sometimes called an early charter of rights." },
            { term: "Babylonian exile", definition: "The deportation of the Jews to Babylon, ended when Cyrus let them return to Jerusalem." },
          ],
        },
        {
          title: "Zoroaster and the religion of light",
          paragraphs: [
            "The Persians' faith was Zoroastrianism, founded by the prophet Zarathustra (Zoroaster) centuries earlier. It taught something strikingly new: that the universe is the battleground of a single good creator god, Ahura Mazda ('the Wise Lord'), against a hostile spirit of evil and lies, and that each person must choose sides through 'good thoughts, good words, good deeds'.",
            "This was one of the world's first religions centred on a cosmic struggle between good and evil, on individual moral choice, and on a coming final judgement. Fire, kept burning in temples, served as the sacred symbol of Ahura Mazda's purity and light.",
            "Zoroastrian ideas — a supreme good God, an evil adversary, angels and demons, heaven and hell, a final judgement and resurrection — would echo powerfully through Judaism, Christianity and Islam, especially after the Jews' close contact with Persia. It may be the most influential religion most people have never heard of.",
          ],
          terms: [
            { term: "Zoroastrianism", definition: "Persia's monotheistic-leaning religion, founded by Zoroaster, centred on the struggle of good against evil." },
            { term: "Ahura Mazda", definition: "'The Wise Lord', the supreme good creator god of Zoroastrianism, symbolised by sacred fire." },
          ],
        },
      ],
      terms: [
        { term: "Achaemenid", definition: "The royal dynasty, named after an ancestor Achaemenes, that founded and ruled the Persian Empire." },
        { term: "Cyrus Cylinder", definition: "A clay cylinder recording Cyrus's tolerant policies, sometimes called an early charter of rights." },
      ],
      callout: {
        title: "What made Persia different",
        body: "Earlier empires like Assyria ruled by terror and mass deportation. Persia invented 'soft' imperialism — local self-rule, religious tolerance and light-touch administration — a model of governing diversity that influenced everyone from Alexander to Rome.",
      },
    },
    {
      id: "administration",
      type: "narrative",
      title: "Ruling the World",
      icon: "🛣️",
      image: {
        wikiTitle: "Behistun Inscription",
        alt: "The Behistun Inscription of Darius the Great",
        caption: "Darius's Behistun Inscription proclaimed his right to rule in three languages.",
      },
      paragraphs: [
        "Cyrus's successor Darius the Great organised the vast empire into about 20 provinces called satrapies, each run by a governor (satrap) but checked by royal inspectors known as 'the king's eyes and ears'. He standardised coinage, weights and taxes across three continents.",
        "To bind it all together, the Persians built the Royal Road — some 2,500 km from Sardis to Susa — with relay stations of fresh horses. Royal couriers could carry a message across the empire in a week. Herodotus's description of these riders ('neither snow, nor rain, nor heat, nor gloom of night…') became the unofficial motto of the U.S. Postal Service.",
        "The empire's wealth and the brilliance of its administration were displayed at Persepolis, a ceremonial capital where, each new year, delegations from every subject nation are carved bringing tribute — gold, horses, textiles — to the King of Kings.",
      ],
      subLessons: [
        {
          title: "The satrapy system: governing from a distance",
          paragraphs: [
            "An empire spanning three continents could not be ruled from one throne directly, so Darius the Great divided it into roughly twenty provinces called satrapies. Each was run by a satrap — usually a Persian nobleman — who collected taxes, administered justice, raised troops and kept order in the king's name, almost like a viceroy.",
            "The obvious danger was that a powerful satrap, far from the capital, might rebel or carve out his own kingdom. Darius guarded against this with a clever separation of powers: the satrap governed, but the fortress garrison and the tax officials in his province often reported directly to the king, so no single man held all the levers.",
            "On top of this, travelling royal inspectors known as 'the king's eyes and ears' toured the provinces unannounced to check on the satraps and report back. The result was a flexible system that respected local diversity while keeping ultimate control firmly at the centre — a template later empires would study and copy.",
          ],
          terms: [
            { term: "Satrap", definition: "The governor of a Persian province, ruling on the king's behalf with wide but checked powers." },
            { term: "King's eyes and ears", definition: "Royal inspectors who toured the empire to monitor satraps and report directly to the king." },
          ],
        },
        {
          title: "Roads, coins and the machinery of empire",
          paragraphs: [
            "To hold a sprawling empire together, the Persians became master organisers. Darius standardised the systems that made commerce and control possible: a common coinage (the gold daric), uniform weights and measures, and a regular, predictable tax assessment for each satrapy based on what it could afford.",
            "The crown jewel of Persian infrastructure was the Royal Road, running some 2,500 kilometres from Sardis near the Aegean to the capital at Susa. Way-stations stocked with fresh horses let royal couriers relay messages across the whole empire in about a week — a journey that took ordinary travellers three months. Herodotus's praise of these riders ('neither snow, nor rain, nor heat, nor gloom of night stays these couriers') survives today as the unofficial motto of the U.S. Postal Service.",
            "Good roads served armies and tax collectors as much as merchants, but they also knit the empire's many peoples into a single trading world. For the first time, goods and ideas could flow safely from the Aegean to the Indus along protected highways under one law.",
          ],
          terms: [
            { term: "Royal Road", definition: "The great highway with horse-relay stations that allowed rapid communication across the empire." },
            { term: "Daric", definition: "The standardised gold coin introduced by Darius, easing trade and tax across the empire." },
          ],
        },
        {
          title: "Persepolis: the empire carved in stone",
          paragraphs: [
            "Darius built a magnificent new ceremonial capital, Persepolis, as a stage for the empire's power and unity. Set on a vast terraced platform, its halls bristled with towering columns and grand staircases, blending artistic styles borrowed from every corner of the realm — Egyptian, Babylonian, Greek and Median — into a deliberately imperial whole.",
            "Persepolis came alive each spring at the New Year (Nowruz) festival, when delegations from every subject nation streamed in to honour the King of Kings. The famous reliefs lining the Apadana staircase show them in procession — Nubians with ivory, Armenians with horses, Indians with gold — each in their own dress, bringing tribute. It is a portrait of an empire proud of its diversity.",
            "The grandeur had a violent end. In 330 BCE Alexander the Great captured Persepolis and burned the palaces to the ground — whether by drunken accident or as calculated revenge for Persia's earlier invasions of Greece. The scorched ruins still stand, a monument to the empire's lost splendour.",
          ],
          terms: [
            { term: "Persepolis", definition: "The grand ceremonial capital built by Darius, showcasing the wealth and diversity of the empire." },
            { term: "Apadana", definition: "The great audience hall at Persepolis, whose reliefs depict subject peoples bringing tribute." },
          ],
        },
      ],
      terms: [
        { term: "Satrapy", definition: "A province of the Persian Empire, governed by a satrap on the king's behalf." },
        { term: "Royal Road", definition: "The great highway with horse-relay stations that allowed rapid communication across the empire." },
        { term: "King of Kings", definition: "The Persian royal title (Shahanshah), reflecting rule over many subordinate kings." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Kings & a Prophet",
      icon: "👤",
      intro: "The rulers who built the empire — and the prophet who shaped its soul.",
      figures: [
        {
          name: "Cyrus the Great",
          role: "Founder",
          lived: "c. 600–530 BCE",
          bio: "Conqueror of Media, Lydia and Babylon and founder of the empire, remembered for his tolerance and for freeing the Jews from exile.",
          image: { wikiTitle: "Cyrus the Great", alt: "Relief associated with Cyrus the Great" },
        },
        {
          name: "Darius the Great",
          role: "Organiser-king",
          lived: "550–486 BCE",
          bio: "Brought the empire to its administrative peak with satrapies, coinage and the Royal Road, and built Persepolis. He invaded Greece, only to be checked at Marathon.",
          image: { wikiTitle: "Darius the Great", alt: "Relief of Darius the Great" },
        },
        {
          name: "Xerxes I",
          role: "King of Kings",
          lived: "519–465 BCE",
          bio: "Led the enormous second invasion of Greece, winning at Thermopylae but losing his fleet at Salamis — the campaign that fixed Persia's image in the Western imagination.",
          image: { wikiTitle: "Xerxes I", alt: "Relief of Xerxes I" },
        },
        {
          name: "Zoroaster",
          role: "Prophet",
          lived: "fl. c. 1000 BCE (debated)",
          bio: "Founder of Zoroastrianism, which taught a cosmic struggle between good and evil and a final judgement — ideas that influenced Judaism, Christianity and Islam.",
          image: { wikiTitle: "Zoroaster", alt: "Depiction of Zoroaster" },
        },
      ],
    },
    {
      id: "wars",
      type: "conflicts",
      title: "Wars of the Empire",
      icon: "⚔️",
      intro: "Persia's clashes with Greece — and its final fall — are among the most famous wars in history.",
      conflicts: [
        {
          name: "The Greco-Persian Wars",
          years: "499–449 BCE",
          against: "The Greek city-states",
          summary:
            "Darius and then Xerxes tried to subdue the troublesome Greeks. Despite vast armies, the Persians were checked at Marathon, fought the 300 Spartans at Thermopylae, and lost their fleet at Salamis.",
          outcome:
            "Persia failed to conquer Greece — a rare defeat that became central to how Greeks (and later Europeans) saw themselves.",
          image: { wikiTitle: "Battle of Salamis", alt: "Depiction of the Battle of Salamis" },
        },
        {
          name: "Conquest by Alexander",
          years: "334–330 BCE",
          against: "Macedon (Alexander the Great)",
          summary:
            "Alexander invaded with a smaller but superbly drilled army, defeating the Persians at Granicus, Issus and decisively at Gaugamela, then taking Babylon and burning Persepolis.",
          outcome:
            "The Achaemenid Empire fell, and its lands passed to Alexander and his Hellenistic successors.",
          image: { wikiTitle: "Battle of Gaugamela", alt: "Depiction of the Battle of Gaugamela" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Persian Innovations",
      icon: "💡",
      intro: "Persia's genius was less in invention than in organisation — but it left lasting marks.",
      image: {
        wikiTitle: "Naqsh-e Rostam",
        alt: "The carved royal tombs at Naqsh-e Rostam near Persepolis",
        caption: "Naqsh-e Rostam — the cliff-face tombs of Achaemenid kings near Persepolis.",
      },
      achievements: [
        {
          name: "Imperial administration",
          field: "Government",
          description: "The satrapy system, standardised coinage and tolerant rule let one state govern dozens of peoples across three continents.",
          legacy: "A template for multi-ethnic empires from Rome to the British.",
        },
        {
          name: "The postal relay system",
          field: "Communication",
          description: "The Royal Road and its horse relays carried royal messages across 2,500 km in about a week.",
          legacy: "An ancestor of the postal and courier networks of later empires.",
        },
        {
          name: "Qanats (underground canals)",
          field: "Engineering",
          description: "Gently sloping tunnels carried groundwater for miles to fields and cities without evaporation in the desert heat.",
          legacy: "Still in use today and spread across the Middle East and beyond.",
        },
        {
          name: "Zoroastrianism",
          field: "Religion",
          description: "One of the first religions centred on a single supreme god, free will, and a cosmic battle between good and evil.",
          legacy: "Influenced concepts of heaven, hell and judgement in Judaism, Christianity and Islam.",
        },
        {
          name: "Religious tolerance",
          field: "Society",
          description: "Subject peoples kept their gods, laws and customs — a deliberate policy of inclusion.",
          legacy: "An early demonstration that diversity could be a source of strength, not weakness.",
        },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on the world's first superpower.",
      questions: [
        {
          q: "Who founded the Persian (Achaemenid) Empire?",
          options: ["Darius", "Xerxes", "Cyrus the Great", "Zoroaster"],
          correct: 2,
          fb: "Cyrus conquered Media, Lydia and Babylon to build the empire.",
        },
        {
          q: "What was distinctive about how Persia ruled conquered peoples?",
          options: ["Mass enslavement", "Religious and cultural tolerance", "Forced conversion", "Total destruction"],
          correct: 1,
          fb: "Persia let subjects keep their gods and customs — tolerance as strategy.",
        },
        {
          q: "What were the empire's provinces called?",
          options: ["Satrapies", "Themes", "Prefectures", "Cantons"],
          correct: 0,
          fb: "Each satrapy was run by a satrap, watched by the king's inspectors.",
        },
        {
          q: "What was the Royal Road used for?",
          options: ["Religious processions", "Rapid communication across the empire", "Trade with China", "Military parades"],
          correct: 1,
          fb: "Horse relays could carry a message 2,500 km in about a week.",
        },
        {
          q: "Which religion, influential on later faiths, arose in Persia?",
          options: ["Buddhism", "Zoroastrianism", "Jainism", "Shinto"],
          correct: 1,
          fb: "Zoroastrianism's good-vs-evil cosmology shaped Judaism, Christianity and Islam.",
        },
        {
          q: "At which battle did the Greeks destroy Xerxes' fleet?",
          options: ["Marathon", "Gaugamela", "Salamis", "Issus"],
          correct: 2,
          fb: "The naval victory at Salamis turned back Persia's great invasion of Greece.",
        },
        {
          q: "Who finally conquered the Persian Empire in 330 BCE?",
          options: ["The Romans", "Alexander the Great", "The Assyrians", "The Mongols"],
          correct: 1,
          fb: "Alexander defeated Persia at Gaugamela and burned Persepolis.",
        },
      ],
    },
  ],
};
