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
    wikiTitle: "Persepolis",
    alt: "The ruins of Persepolis",
    caption: "Persepolis, the ceremonial capital, built by Darius the Great.",
  },
  facts: [
    { label: "Founder", value: "Cyrus the Great" },
    { label: "Capitals", value: "Persepolis, Susa, Pasargadae" },
    { label: "Peak share", value: "~40% of world population" },
    { label: "Religion", value: "Zoroastrianism" },
    { label: "Ended by", value: "Alexander the Great (330 BCE)" },
  ],
  sections: [
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
