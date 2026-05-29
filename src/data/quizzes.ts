import type { QuizQuestion } from "./types";

// Quiz questions grouped by era. Detailed eras (classical-antiquity,
// modern-era) carry ~6+ questions; others carry ~3.
export const quizzes: QuizQuestion[] = [
  // Ancient Civilizations
  {
    id: "anc-q1",
    eraId: "ancient-civilizations",
    prompt: "Which early writing system emerged in Sumer?",
    options: ["Hieroglyphics", "Cuneiform", "The Latin alphabet", "Linear B"],
    answerIndex: 1,
    explanation:
      "Cuneiform, pressed into clay with a reed stylus, developed in Sumer around 3200 BCE.",
  },
  {
    id: "anc-q2",
    eraId: "ancient-civilizations",
    prompt: "The Great Pyramid of Giza was built as a tomb for which pharaoh?",
    options: ["Tutankhamun", "Ramesses II", "Khufu", "Akhenaten"],
    answerIndex: 2,
    explanation: "The Great Pyramid was built around 2560 BCE for the pharaoh Khufu (Cheops).",
  },
  {
    id: "anc-q3",
    eraId: "ancient-civilizations",
    prompt: "Hammurabi's Code is best known as an early example of what?",
    options: ["A written legal code", "A calendar", "A map", "A religious epic"],
    answerIndex: 0,
    explanation:
      "Hammurabi's Code set down public, fixed laws, an early statement of the rule of law.",
  },

  // Classical Antiquity (detailed)
  {
    id: "cla-q1",
    eraId: "classical-antiquity",
    prompt: "Which city is credited with developing democracy around 508 BCE?",
    options: ["Sparta", "Rome", "Athens", "Carthage"],
    answerIndex: 2,
    explanation:
      "Reforms in Athens, attributed to Cleisthenes, established an early direct democracy.",
  },
  {
    id: "cla-q2",
    eraId: "classical-antiquity",
    prompt: "Alexander the Great was king of which kingdom?",
    options: ["Persia", "Macedon", "Egypt", "Thebes"],
    answerIndex: 1,
    explanation: "Alexander was king of Macedon before conquering the Persian Empire.",
  },
  {
    id: "cla-q3",
    eraId: "classical-antiquity",
    prompt: "What did Caesar's crossing of the Rubicon signify?",
    options: [
      "The founding of Rome",
      "An act of war against the Senate",
      "A trade agreement",
      "The end of the Punic Wars",
    ],
    answerIndex: 1,
    explanation:
      "Bringing his army into Italy broke Roman law and started the civil war that ended the Republic.",
  },
  {
    id: "cla-q4",
    eraId: "classical-antiquity",
    prompt: "Who became the first Roman emperor?",
    options: ["Julius Caesar", "Nero", "Augustus", "Constantine"],
    answerIndex: 2,
    explanation: "Octavian took the title Augustus in 27 BCE, becoming Rome's first emperor.",
  },
  {
    id: "cla-q5",
    eraId: "classical-antiquity",
    prompt: "The Pax Romana refers to a period of what?",
    options: [
      "Constant civil war",
      "Relative peace across the Roman Empire",
      "Greek independence",
      "Plague in Rome",
    ],
    answerIndex: 1,
    explanation: "The Pax Romana was roughly two centuries of relative stability begun under Augustus.",
  },
  {
    id: "cla-q6",
    eraId: "classical-antiquity",
    prompt: "Which event is a traditional marker for the end of antiquity in the West?",
    options: [
      "The fall of the Western Roman Empire in 476 CE",
      "The first Olympic Games",
      "The Battle of Gaugamela",
      "The crowning of Charlemagne",
    ],
    answerIndex: 0,
    explanation:
      "The deposition of Romulus Augustulus in 476 CE is a common end point for classical antiquity.",
  },

  // The Middle Ages
  {
    id: "mid-q1",
    eraId: "middle-ages",
    prompt: "Who was crowned Emperor of the Romans in 800 CE?",
    options: ["Genghis Khan", "Charlemagne", "Justinian", "William the Conqueror"],
    answerIndex: 1,
    explanation: "Pope Leo III crowned Charlemagne, reviving the imperial title in Western Europe.",
  },
  {
    id: "mid-q2",
    eraId: "middle-ages",
    prompt: "Genghis Khan founded which empire?",
    options: ["The Ottoman Empire", "The Mongol Empire", "The Byzantine Empire", "The Holy Roman Empire"],
    answerIndex: 1,
    explanation: "The Mongol Empire became the largest contiguous land empire in history.",
  },
  {
    id: "mid-q3",
    eraId: "middle-ages",
    prompt: "Roughly what fraction of Europe's population did the Black Death kill?",
    options: ["A tenth", "A third", "Two-thirds", "Almost all"],
    answerIndex: 1,
    explanation: "Estimates suggest the plague killed about a third of Europe's population after 1347.",
  },

  // Renaissance & Exploration
  {
    id: "ren-q1",
    eraId: "renaissance-exploration",
    prompt: "Gutenberg's key innovation was what?",
    options: ["The telescope", "Movable-type printing", "The compass", "Oil painting"],
    answerIndex: 1,
    explanation: "Movable-type printing made books cheap, accelerating literacy and the spread of ideas.",
  },
  {
    id: "ren-q2",
    eraId: "renaissance-exploration",
    prompt: "In 1492, Columbus sailed on behalf of which crown?",
    options: ["Portugal", "England", "Spain", "France"],
    answerIndex: 2,
    explanation: "Columbus sailed for the Spanish crown, opening lasting Europe–Americas contact.",
  },
  {
    id: "ren-q3",
    eraId: "renaissance-exploration",
    prompt: "Martin Luther's Ninety-five Theses launched what movement?",
    options: ["The Renaissance", "The Reformation", "The Enlightenment", "The Crusades"],
    answerIndex: 1,
    explanation: "The 1517 theses split Western Christianity and began the Protestant Reformation.",
  },

  // Enlightenment & Revolutions
  {
    id: "enl-q1",
    eraId: "enlightenment-revolutions",
    prompt: "The American Declaration of Independence was adopted in which year?",
    options: ["1765", "1776", "1789", "1804"],
    answerIndex: 1,
    explanation: "The Declaration was adopted on July 4, 1776.",
  },
  {
    id: "enl-q2",
    eraId: "enlightenment-revolutions",
    prompt: "What event is associated with the start of the French Revolution in 1789?",
    options: [
      "The coronation of Napoleon",
      "The storming of the Bastille",
      "The Congress of Vienna",
      "The Battle of Waterloo",
    ],
    answerIndex: 1,
    explanation: "The storming of the Bastille on July 14, 1789, is the symbolic start of the Revolution.",
  },
  {
    id: "enl-q3",
    eraId: "enlightenment-revolutions",
    prompt: "Enlightenment thinkers most emphasized which idea?",
    options: ["Divine right of kings", "Reason and individual liberty", "Feudal obligation", "Mercantile monopoly"],
    answerIndex: 1,
    explanation: "The Enlightenment championed reason, science, and ideas of liberty and rights.",
  },

  // Industrial & Imperial Age
  {
    id: "ind-q1",
    eraId: "industrial-imperial",
    prompt: "James Watt is best known for improving what?",
    options: ["The cotton gin", "The steam engine", "The telegraph", "The locomotive"],
    answerIndex: 1,
    explanation: "Watt's improved steam engine helped power the Industrial Revolution.",
  },
  {
    id: "ind-q2",
    eraId: "industrial-imperial",
    prompt: "The 'Scramble for Africa' refers to what?",
    options: [
      "African independence movements",
      "European powers colonizing nearly all of Africa",
      "A gold rush",
      "The building of the Suez Canal",
    ],
    answerIndex: 1,
    explanation: "At the 1884 Berlin Conference, European powers divided up almost the entire continent.",
  },
  {
    id: "ind-q3",
    eraId: "industrial-imperial",
    prompt: "Queen Victoria's long reign is associated with the height of which empire?",
    options: ["The French Empire", "The British Empire", "The Russian Empire", "The Ottoman Empire"],
    answerIndex: 1,
    explanation: "Victoria's 63-year reign coincided with the peak of British industrial and imperial power.",
  },

  // Modern Era (detailed)
  {
    id: "mod-q1",
    eraId: "modern-era",
    prompt: "What event triggered the First World War in 1914?",
    options: [
      "The invasion of Poland",
      "The assassination of Archduke Franz Ferdinand",
      "The Russian Revolution",
      "The sinking of the Lusitania",
    ],
    answerIndex: 1,
    explanation: "The assassination in Sarajevo set off the alliance system and led to war.",
  },
  {
    id: "mod-q2",
    eraId: "modern-era",
    prompt: "The 1917 Russian Revolution brought which group to power?",
    options: ["The Mensheviks", "The Bolsheviks", "The Tsarists", "The Whites"],
    answerIndex: 1,
    explanation: "The Bolsheviks seized power and founded the world's first communist state.",
  },
  {
    id: "mod-q3",
    eraId: "modern-era",
    prompt: "The Second World War in Europe began with the invasion of which country?",
    options: ["France", "Poland", "Belgium", "Czechoslovakia"],
    answerIndex: 1,
    explanation: "Germany's invasion of Poland in September 1939 began the war in Europe.",
  },
  {
    id: "mod-q4",
    eraId: "modern-era",
    prompt: "Which leader's nonviolent movement helped India win independence in 1947?",
    options: ["Jawaharlal Nehru", "Mohandas Gandhi", "Winston Churchill", "Subhas Chandra Bose"],
    answerIndex: 1,
    explanation: "Gandhi's philosophy of nonviolent resistance was central to India's independence.",
  },
  {
    id: "mod-q5",
    eraId: "modern-era",
    prompt: "Who became the first person to walk on the Moon in 1969?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
    answerIndex: 2,
    explanation: "Neil Armstrong stepped onto the Moon during the Apollo 11 mission.",
  },
  {
    id: "mod-q6",
    eraId: "modern-era",
    prompt: "The fall of the Berlin Wall in 1989 symbolized what?",
    options: [
      "The start of World War II",
      "The collapse of communist rule in Eastern Europe",
      "German reunification of 1871",
      "The founding of the EU",
    ],
    answerIndex: 1,
    explanation: "Its opening signaled the end of communist control in Eastern Europe and the Cold War.",
  },
];
