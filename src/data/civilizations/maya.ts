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
  sections: [
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
