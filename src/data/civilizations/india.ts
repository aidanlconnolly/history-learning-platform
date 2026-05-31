import type { Civilization } from "../types";

export const india: Civilization = {
  id: "india",
  name: "Ancient India",
  shortName: "India",
  emblem: "🕉️",
  region: "The Indian Subcontinent",
  modernCountries: ["India", "Pakistan", "Bangladesh", "Nepal", "Afghanistan"],
  timespan: "c. 2600 BCE – 550 CE",
  startYear: -2600,
  endYear: 550,
  color: "#ea580c",
  tagline:
    "From the planned cities of the Indus to the Mauryan and Gupta empires — birthplace of zero, of chess, and of two world religions.",
  summary:
    "The Indian subcontinent hosted one of the world's earliest urban cultures (the Indus Valley) and later the great Mauryan and Gupta empires. It gave the world the concept of zero and the decimal numerals we all use, pioneering work in mathematics, astronomy and medicine, and two of its major religions: Hinduism and Buddhism.",
  hero: {
    wikiTitle: "Sanchi",
    alt: "The Great Stupa at Sanchi",
    caption: "The Great Stupa at Sanchi, commissioned by the emperor Ashoka.",
  },
  facts: [
    { label: "Earliest culture", value: "Indus Valley Civilisation" },
    { label: "Great empires", value: "Maurya, Gupta" },
    { label: "Religions born here", value: "Hinduism, Buddhism, Jainism" },
    { label: "Gift to maths", value: "Zero & decimal numerals" },
    { label: "Golden age", value: "Gupta Empire (~320–550 CE)" },
  ],
  majorCities: [
    { name: "Mohenjo-daro",  lat: 27.33, lon:  68.13 },
    { name: "Harappa",       lat: 30.63, lon:  72.86 },
    { name: "Pataliputra",   lat: 25.61, lon:  85.15 },
    { name: "Varanasi",      lat: 25.32, lon:  83.00 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments in Ancient India",
      icon: "⭐",
      intro: "From the world's most advanced Bronze Age cities to the philosophical and mathematical revolutions that shaped all of humanity.",
      milestones: [
        { year: "c. 2600 BCE", title: "Indus Valley Civilisation Peaks", description: "The cities of Harappa and Mohenjo-daro reach their height — with grid-planned streets, sewage systems and standardised weights more sophisticated than contemporary Egypt.", icon: "🏙️", type: "rise" },
        { year: "c. 1900 BCE", title: "Indus Valley Declines", description: "The great Indus cities are mysteriously abandoned — possibly due to climate change, river shifts or migrations.", icon: "💔", type: "fall" },
        { year: "c. 1500 BCE", title: "The Vedic Age Begins", description: "Indo-Aryan peoples bring Sanskrit language and Vedic religion to the subcontinent, composing the Rigveda — the world's oldest religious literature.", icon: "📜", type: "cultural" },
        { year: "c. 800 BCE",  title: "Upanishads Written", description: "Philosophers compose the Upanishads — exploring the nature of consciousness, reality and the self in ideas that still shape world thought.", icon: "🧘", type: "cultural" },
        { year: "c. 563 BCE",  title: "Siddhartha Gautama is Born", description: "The future Buddha is born a prince in what is now Nepal — his teachings will become one of the world's great religions.", icon: "🌸", type: "cultural" },
        { year: "c. 500 BCE",  title: "Mahavira & Jainism", description: "Mahavira codifies Jainism, teaching non-violence (ahimsa) as the supreme moral principle — influencing Gandhi and generations of Indian ethics.", icon: "🕊️", type: "cultural" },
        { year: "327 BCE",     title: "Alexander Reaches India", description: "Alexander the Great's army crosses the Indus, defeats local kings — but mutinies on the banks of the Beas River, the easternmost point of his empire.", icon: "🏹", type: "war" },
        { year: "321 BCE",     title: "Chandragupta Founds the Mauryan Empire", description: "The young Chandragupta Maurya, advised by the brilliant strategist Kautilya, seizes power and founds the first pan-Indian empire.", icon: "👑", type: "rise" },
        { year: "268 BCE",     title: "Ashoka's Bloody Conquest of Kalinga", description: "Ashoka conquers Kalinga in a war that kills 100,000 — and is so horrified that he converts to Buddhism and renounces violence forever.", icon: "⚔️", type: "war" },
        { year: "c. 260 BCE",  title: "Ashoka Spreads Buddhism", description: "Ashoka sends Buddhist missionaries across Asia, inscribes his laws on pillars across the empire and builds thousands of stupas.", icon: "☸️", type: "cultural" },
        { year: "185 BCE",     title: "Mauryan Empire Collapses", description: "The Mauryan dynasty ends with a coup; India again fragments into rival kingdoms for five centuries.", icon: "📉", type: "fall" },
        { year: "c. 320 CE",   title: "Gupta Empire — India's Golden Age", description: "The Gupta Dynasty unifies northern India and ushers in a golden age of science, mathematics, astronomy, literature and art.", icon: "✨", type: "rise" },
        { year: "c. 499 CE",   title: "Aryabhata Calculates Pi & Earth's Rotation", description: "The mathematician Aryabhata correctly calculates the value of pi, the length of the year and that the Earth rotates on its axis.", icon: "🔭", type: "innovation" },
        { year: "c. 500 CE",   title: "Zero is Formalised", description: "Indian mathematicians formalise zero as a number, creating the decimal place-value system — arguably humanity's most important mathematical achievement.", icon: "0️⃣", type: "innovation" },
        { year: "c. 550 CE",   title: "Gupta Empire Falls", description: "Hunnic invasions and internal fragmentation break up the Gupta Empire, ending India's classical golden age.", icon: "💔", type: "fall" },
      ],
    },
    {
      id: "indus",
      type: "narrative",
      title: "The Indus Valley & the Vedas",
      icon: "🏺",
      image: {
        wikiTitle: "Mohenjo-daro",
        alt: "Ruins of Mohenjo-daro",
        caption: "Mohenjo-daro — a meticulously planned city of the Indus Valley.",
      },
      paragraphs: [
        "Around 2600 BCE, along the Indus River, arose one of the world's first great urban civilizations. Cities like Mohenjo-daro and Harappa housed tens of thousands of people in astonishingly modern grids, with brick houses, public baths, granaries and the world's earliest known city-wide sewage and drainage systems.",
        "Remarkably, the Indus people left no palaces, no obvious temples, and little sign of kings or war — a prosperous, orderly society whose writing we still cannot read. Around 1900 BCE, perhaps due to climate change and shifting rivers, their cities were gradually abandoned.",
        "In the centuries that followed, a culture centred on Sanskrit-speaking peoples and the sacred hymns called the Vedas took shape across northern India. From this 'Vedic' world grew Hinduism, its gods and epics (the Mahabharata and Ramayana), and the hierarchical caste system that would shape Indian society for millennia.",
      ],
      subLessons: [
        {
          title: "The planned cities of the Indus",
          image: {
            wikiTitle: "Mohenjo-daro",
            alt: "Ruins of Mohenjo-daro",
            caption: "Mohenjo-daro's grid streets and drains astonish to this day.",
          },
          paragraphs: [
            "Around 2600 BCE, along the Indus River, one of the world's earliest urban civilisations arose alongside Mesopotamia and Egypt. Its great cities — Mohenjo-daro and Harappa — housed tens of thousands of people and were laid out on remarkably modern grid plans.",
            "What sets them apart is their obsession with order and hygiene. Streets ran at right angles; houses were built of standardised baked bricks of uniform size; and nearly every home had a bathroom connected to covered municipal drains — sophisticated sanitation that would not be matched for thousands of years. Mohenjo-daro even boasted a 'Great Bath', perhaps for ritual bathing.",
            "The Indus people traded as far as Mesopotamia, used precise standardised weights, and wrote in a script we still cannot read. Strikingly, archaeologists have found few signs of kings, temples or armies — suggesting a society organised quite unlike the god-king states elsewhere.",
          ],
          terms: [
            { term: "Indus Valley Civilisation", definition: "An early Bronze Age urban culture famous for planned cities and advanced sanitation." },
            { term: "Harappan", definition: "Another name for the Indus civilization, after the city of Harappa." },
          ],
        },
        {
          title: "Decline and the coming of the Vedas",
          paragraphs: [
            "Around 1900 BCE the Indus cities went into decline and were gradually abandoned. There was no single dramatic catastrophe; scholars point instead to climate change, shifting or drying rivers, and the collapse of trade. The script fell out of use and the civilisation was forgotten for nearly four thousand years, rediscovered only in the 1920s.",
            "From around 1500 BCE a new culture took shape across northern India, associated with Indo-Aryan peoples and the Sanskrit language. This 'Vedic Age' is named for the Vedas, sacred hymns composed and memorised by priests and passed down orally for centuries before ever being written.",
            "The Vedas are the foundation of Hinduism and the wellspring of Sanskrit literature. Out of this era came the gods, the great epics — the Mahabharata and Ramayana — and the philosophical ideas that would shape Indian society for millennia.",
          ],
          terms: [
            { term: "Vedas", definition: "The ancient sacred hymns in Sanskrit that form the foundation of Hinduism." },
            { term: "Sanskrit", definition: "The ancient sacred language of the Vedas and of classical Indian literature." },
          ],
        },
        {
          title: "Caste and the birth of new faiths",
          paragraphs: [
            "Vedic society came to be ordered into a hierarchy of hereditary classes, the varnas: priests (Brahmins), warriors and rulers, merchants and farmers, and labourers, with others outside the system entirely. Over time this hardened into the elaborate caste system that governed occupation, marriage and daily life.",
            "Religious life centred on elaborate sacrifices performed by Brahmin priests. But by around 600 BCE, thinkers began to question this ritualism, exploring instead ideas of the soul, rebirth (reincarnation) and liberation gathered in philosophical texts called the Upanishads.",
            "From this ferment emerged two great new religions that rejected priestly authority. Jainism preached radical non-violence toward all living things; and Buddhism, founded by Siddhartha Gautama, offered a path to escape suffering and the cycle of rebirth — a faith that would spread across all of Asia.",
          ],
          terms: [
            { term: "Caste system", definition: "The hereditary social hierarchy that developed in ancient Indian society." },
            { term: "Reincarnation", definition: "The belief in rebirth of the soul, central to Indian religious thought." },
          ],
        },
      ],
      terms: [
        { term: "Indus Valley Civilisation", definition: "An early Bronze Age urban culture famous for planned cities and advanced sanitation." },
        { term: "Vedas", definition: "The ancient sacred hymns in Sanskrit that form the foundation of Hinduism." },
        { term: "Caste system", definition: "The hereditary social hierarchy that developed in ancient Indian society." },
      ],
      callout: {
        title: "Cities ahead of their time",
        body: "Mohenjo-daro had covered drains and private bathrooms over 4,000 years ago — sanitation that much of the world would not match until the modern era. Yet its rulers, religion and even its script remain a mystery.",
      },
    },
    {
      id: "empires",
      type: "narrative",
      title: "The Maurya & Gupta Empires",
      icon: "👑",
      image: {
        wikiTitle: "Ashoka",
        alt: "Depiction of the emperor Ashoka",
        caption: "Ashoka, who turned from conquest to a rule of compassion.",
      },
      paragraphs: [
        "In 321 BCE Chandragupta Maurya founded the first empire to unite most of the subcontinent. Aided by his shrewd adviser Kautilya (author of the Arthashastra, a frank manual of statecraft), the Mauryan Empire built a vast, centralised state.",
        "Its greatest ruler was Ashoka (c. 268–232 BCE). After a war of conquest in Kalinga so bloody that it horrified him, Ashoka renounced violence, embraced Buddhism, and devoted his reign to dharma — moral rule. He carved edicts of tolerance and compassion onto pillars across his empire and sent Buddhist missionaries as far as Sri Lanka and Greece. The lion capital of his pillars is today the emblem of the Republic of India.",
        "After the Mauryas declined, the Gupta Empire (c. 320–550 CE) presided over a golden age of peace, prosperity and dazzling achievement in mathematics, astronomy, literature and art — the era that gave the world the concept of zero.",
      ],
      subLessons: [
        {
          title: "Chandragupta and the Mauryan Empire",
          paragraphs: [
            "In the wake of Alexander the Great's incursion into northwestern India, a young adventurer named Chandragupta Maurya seized power in the kingdom of Magadha and, from 321 BCE, built the first empire to unite most of the subcontinent. He was guided, tradition says, by the cunning minister Kautilya, author of the Arthashastra, a famously frank manual of statecraft.",
            "The Mauryan state was vast and tightly organised, with a large standing army, a network of spies, and a complex bureaucracy taxing agriculture and trade from its capital at Pataliputra, one of the largest cities in the world at the time.",
            "Chandragupta's empire gave India something it had never had: political unity on a grand scale. It would reach its height under his grandson, one of the most remarkable rulers in all of history.",
          ],
          terms: [
            { term: "Mauryan Empire", definition: "The first empire to unite most of the Indian subcontinent, founded by Chandragupta Maurya." },
            { term: "Pataliputra", definition: "The Mauryan capital, among the largest cities in the ancient world." },
          ],
        },
        {
          title: "Ashoka: from conqueror to philosopher-king",
          image: {
            wikiTitle: "Lion Capital of Ashoka",
            alt: "The Lion Capital of Ashoka",
            caption: "Ashoka's lion capital is now India's national emblem.",
          },
          paragraphs: [
            "Ashoka extended the empire by force, until around 261 BCE he conquered the kingdom of Kalinga in a campaign of horrific bloodshed — by his own account, hundreds of thousands were killed, deported or left to die. Confronted by the suffering he had caused, Ashoka was overcome with remorse.",
            "He converted to Buddhism and underwent a profound change, renouncing war and devoting himself to ruling by dharma — moral law, compassion and tolerance. He had edicts carved on rocks and great polished pillars across the empire, urging kindness to people and animals, religious harmony, and just governance.",
            "Ashoka built hospitals, planted shade trees along roads, and sent Buddhist missionaries as far as Sri Lanka and the Greek kingdoms of the west, helping transform Buddhism from a regional sect into a world religion. His lion capital is today the national emblem of India.",
          ],
          terms: [
            { term: "Dharma", definition: "Moral and religious duty; the principle of righteous living and rule that Ashoka championed." },
            { term: "Edicts of Ashoka", definition: "Inscriptions on rocks and pillars proclaiming Ashoka's principles of moral rule." },
          ],
        },
        {
          title: "The Gupta golden age",
          paragraphs: [
            "After the Mauryas declined, centuries of division followed until the Gupta Empire (c. 320–550 CE) ushered in what is remembered as India's classical golden age — an era of extraordinary flourishing in science, mathematics, art and literature.",
            "Gupta mathematicians achieved breakthroughs that would change the world. They formalised the decimal place-value system and treated zero as a number in its own right; the astronomer Aryabhata calculated pi with great accuracy and proposed that the Earth rotates on its axis. These ideas would later pass through the Arab world to Europe.",
            "Culture blossomed alongside science. The poet and playwright Kalidasa produced Sanskrit masterpieces; sculptors and painters created enduring religious art; and great centres of learning drew students from across Asia. Indian religion, art and learning radiated outward along the trade routes to Southeast Asia.",
          ],
          terms: [
            { term: "Gupta Empire", definition: "India's classical golden age of science, mathematics and the arts." },
            { term: "Aryabhata", definition: "The Gupta-era mathematician who computed pi and proposed Earth's rotation." },
          ],
        },
      ],
      terms: [
        { term: "Mauryan Empire", definition: "The first empire to unite most of the Indian subcontinent, founded by Chandragupta Maurya." },
        { term: "Dharma", definition: "Moral and religious duty; the principle of righteous living and rule that Ashoka championed." },
        { term: "Gupta Empire", definition: "India's classical golden age of science, mathematics and the arts." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Emperors, Sages & Scientists",
      icon: "👤",
      intro: "Rulers, a renouncer-prince, and the mathematician who reshaped science.",
      figures: [
        {
          name: "Ashoka the Great",
          role: "Mauryan emperor",
          lived: "c. 304–232 BCE",
          bio: "After the carnage of the Kalinga War he embraced Buddhism and nonviolence, ruling by compassion and spreading the faith across Asia.",
          image: { wikiTitle: "Ashoka", alt: "Statue of Ashoka" },
        },
        {
          name: "Gautama Buddha",
          role: "Founder of Buddhism",
          lived: "c. 563–483 BCE",
          bio: "A prince who renounced his palace to seek the end of suffering, founding Buddhism — a faith that spread across Asia and beyond.",
          image: { wikiTitle: "Gautama Buddha", alt: "Statue of the Buddha" },
        },
        {
          name: "Chandragupta Maurya",
          role: "Empire-founder",
          lived: "c. 350–295 BCE",
          bio: "Rose from obscurity to overthrow the Nanda dynasty and found the Mauryan Empire, uniting most of the subcontinent for the first time.",
          image: { wikiTitle: "Chandragupta Maurya", alt: "Depiction of Chandragupta Maurya" },
        },
        {
          name: "Aryabhata",
          role: "Mathematician & astronomer",
          lived: "476–550 CE",
          bio: "Gupta-era genius who calculated π with precision, proposed that the Earth rotates on its axis, and advanced the place-value number system.",
          image: { wikiTitle: "Aryabhata", alt: "Statue of Aryabhata" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Ideas, Numbers & Faiths",
      icon: "💡",
      intro: "India's contributions to mathematics and religion are woven into daily life worldwide.",
      achievements: [
        {
          name: "Zero & decimal numerals",
          field: "Mathematics",
          description: "Indian mathematicians developed zero as a number and the place-value decimal system we all use.",
          legacy: "Passed via the Arabs to the world as 'Arabic numerals' — the foundation of modern maths.",
        },
        {
          name: "Astronomy",
          field: "Science",
          description: "Aryabhata and others accurately measured the year, explained eclipses, and proposed Earth's rotation.",
          legacy: "Influenced Islamic and later European astronomy.",
        },
        {
          name: "Buddhism & Hinduism",
          field: "Religion",
          description: "India gave rise to Hinduism, Buddhism and Jainism — with Buddhism spreading across East and Southeast Asia.",
          legacy: "Faiths followed by well over a billion people today.",
        },
        {
          name: "Medicine (Ayurveda)",
          field: "Science",
          description: "Physicians like Sushruta described surgery — including early plastic surgery — and a holistic system of medicine.",
          legacy: "Ayurvedic medicine is still practised across South Asia.",
        },
        {
          name: "Chess & games",
          field: "Culture",
          description: "The ancestor of chess, chaturanga, was invented in India, along with games using dice and 'snakes and ladders'.",
          legacy: "Chess spread via Persia to the entire world.",
        },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on the civilizations of ancient India.",
      questions: [
        {
          q: "What was remarkable about Indus Valley cities like Mohenjo-daro?",
          options: ["Their giant pyramids", "Their advanced planning and sanitation", "Their iron weapons", "Their gold temples"],
          correct: 1,
          fb: "They had grid layouts and city-wide drainage over 4,000 years ago.",
        },
        {
          q: "What are the Vedas?",
          options: ["Ancient law codes", "Sacred Hindu hymns", "Mauryan coins", "Buddhist monasteries"],
          correct: 1,
          fb: "The Vedas are the foundational sacred texts of Hinduism.",
        },
        {
          q: "Which emperor embraced Buddhism after the bloody Kalinga War?",
          options: ["Chandragupta", "Ashoka", "Aryabhata", "Kanishka"],
          correct: 1,
          fb: "Horrified by the slaughter, Ashoka turned to nonviolence and dharma.",
        },
        {
          q: "Which world-changing mathematical concept did India give us?",
          options: ["Negative numbers only", "Zero and the decimal system", "Roman numerals", "The abacus"],
          correct: 1,
          fb: "Zero and place-value decimals reached the world as 'Arabic numerals'.",
        },
        {
          q: "Which religions originated in India?",
          options: ["Islam and Christianity", "Hinduism, Buddhism and Jainism", "Zoroastrianism", "Shinto"],
          correct: 1,
          fb: "All three arose in India; Buddhism spread across much of Asia.",
        },
        {
          q: "India's classical golden age occurred under which empire?",
          options: ["The Maurya", "The Gupta", "The Mughal", "The Chola"],
          correct: 1,
          fb: "The Gupta era saw great advances in science, maths and the arts.",
        },
        {
          q: "The game of chess descends from which Indian game?",
          options: ["Pachisi", "Chaturanga", "Go", "Senet"],
          correct: 1,
          fb: "Chaturanga spread via Persia to become chess worldwide.",
        },
      ],
    },
  ],
};
