import type { Civilization } from "../types";

export const greece: Civilization = {
  id: "greece",
  name: "Ancient Greece",
  shortName: "Greece",
  emblem: "🏛️",
  region: "Aegean, Greece & the Eastern Mediterranean",
  modernCountries: ["Greece", "Turkey", "Cyprus", "Italy"],
  timespan: "c. 800 – 146 BCE",
  startYear: -800,
  endYear: -146,
  color: "#6d28d9",
  tagline:
    "Not one kingdom but hundreds of fierce little city-states — and the birthplace of democracy, philosophy, theatre and science.",
  summary:
    "Ancient Greece was never a single empire but a constellation of independent city-states (poleis) bound by a common language, religion and the Olympic Games. From this competitive, fragmented world came an explosion of ideas — democracy, philosophy, drama, history, mathematics and medicine — whose influence on the modern world is hard to overstate.",
  hero: {
    wikiTitle: "Parthenon",
    alt: "The Parthenon on the Athenian Acropolis",
    caption: "The Parthenon (447–432 BCE), temple of Athena atop the Acropolis.",
  },
  facts: [
    { label: "Form", value: "Independent city-states (poleis)" },
    { label: "Leading cities", value: "Athens, Sparta, Thebes, Corinth" },
    { label: "Language", value: "Ancient Greek" },
    { label: "Famous for", value: "Democracy, philosophy, theatre" },
    { label: "Golden age", value: "5th century BCE Athens" },
  ],
  sections: [
    {
      id: "origins",
      type: "narrative",
      title: "Origins & the Polis",
      icon: "🌅",
      image: {
        wikiTitle: "Knossos",
        alt: "The ruins of the palace of Knossos on Crete",
        caption: "Knossos on Crete — heart of the Bronze Age Minoan civilization.",
      },
      paragraphs: [
        "Greek civilization had deep Bronze Age roots in the Minoans of Crete (famous for the labyrinth-like palace of Knossos) and the warlike Mycenaeans of the mainland, whose world inspired Homer's epics. Around 1200 BCE this Bronze Age order collapsed, plunging Greece into a 'Dark Age' of poverty and lost writing.",
        "Out of that recovery, from about 800 BCE, emerged the defining unit of Greek life: the polis, or city-state. Each polis — Athens, Sparta, Thebes, Corinth and hundreds of others — was a fiercely independent community with its own laws, government, army and patron god. Land-hungry Greeks also founded colonies from Spain to the Black Sea, spreading their culture across the Mediterranean 'like frogs around a pond'.",
        "What united these rivals was not politics but culture: a shared language, the poems of Homer, the oracle at Delphi, and pan-Hellenic festivals like the Olympic Games (traditionally dated from 776 BCE), where even warring cities competed in peace.",
      ],
      terms: [
        { term: "Polis", definition: "An independent Greek city-state — the political, religious and social centre of Greek life." },
        { term: "Hellenes", definition: "What the Greeks called themselves; 'Greek' comes from the Roman name for them." },
        { term: "Colony", definition: "A new, independent city founded by settlers from a 'mother city', spreading Greek culture abroad." },
      ],
      callout: {
        title: "What made Greece different",
        body: "Where Egypt and Persia were vast, centralised monarchies, Greece was deliberately fragmented and competitive. That very disunity — hundreds of self-governing communities arguing, experimenting and competing — helped spark its extraordinary creativity.",
      },
    },
    {
      id: "athens-sparta",
      type: "narrative",
      title: "Athens, Sparta & Democracy",
      icon: "⚖️",
      image: {
        wikiTitle: "Acropolis of Athens",
        alt: "The Acropolis of Athens",
        caption: "The Acropolis — civic and religious centre of democratic Athens.",
      },
      paragraphs: [
        "Two cities embodied opposite Greek ideals. Sparta was a militarised society where boys entered brutal state training at age seven and citizens were forbidden to do any work but soldiering — supported by a vast population of enslaved 'helots'. Its army was the most feared in Greece.",
        "Athens took a radically different path. Reforms by Cleisthenes in 508 BCE created the world's first democracy (demokratia, 'rule by the people'). Adult male citizens debated and voted directly in the Assembly, served on juries of hundreds, and filled most offices by lottery rather than election — to prevent the rich from monopolising power.",
        "Athenian democracy was limited: women, slaves and foreigners (the majority of the population) were excluded. Yet the principle that ordinary citizens, not kings or priests, should govern themselves was revolutionary — and under the statesman Pericles it funded a golden age of art, architecture and drama.",
      ],
      terms: [
        { term: "Demokratia", definition: "'Rule by the people' — Athens' system of direct citizen government." },
        { term: "Helots", definition: "The enslaved population that farmed Spartan land, freeing Spartan citizens to train for war." },
        { term: "Ostracism", definition: "An Athenian vote to exile a citizen for ten years, used to check anyone growing too powerful." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Thinkers, Leaders & Conquerors",
      icon: "👤",
      intro:
        "A remarkable concentration of statesmen, philosophers and a world-conquering king.",
      figures: [
        {
          name: "Pericles",
          role: "Athenian statesman",
          lived: "c. 495–429 BCE",
          bio: "Led Athens at the height of its power, championing democracy and funding the Parthenon. His funeral oration is a timeless statement of democratic ideals.",
          image: { wikiTitle: "Pericles", alt: "Bust of Pericles" },
        },
        {
          name: "Socrates",
          role: "Philosopher",
          lived: "c. 470–399 BCE",
          bio: "Father of Western philosophy, who taught by relentless questioning (the 'Socratic method'). Tried and executed by Athens for 'corrupting the youth', he wrote nothing himself.",
          image: { wikiTitle: "Socrates", alt: "Bust of Socrates" },
        },
        {
          name: "Aristotle",
          role: "Philosopher & scientist",
          lived: "384–322 BCE",
          bio: "Pupil of Plato and tutor to Alexander the Great. He studied nearly everything — logic, biology, politics, ethics, physics — and shaped Western thought for two thousand years.",
          image: { wikiTitle: "Aristotle", alt: "Bust of Aristotle" },
        },
        {
          name: "Alexander the Great",
          role: "King of Macedon",
          lived: "356–323 BCE",
          bio: "Conquered the mighty Persian Empire and reached India before he was 33, spreading Greek culture across three continents and launching the Hellenistic age.",
          image: { wikiTitle: "Alexander the Great", alt: "Bust of Alexander the Great" },
        },
      ],
    },
    {
      id: "wars",
      type: "conflicts",
      title: "Wars That Defined Greece",
      icon: "⚔️",
      intro:
        "Greek freedom was won against a superpower — and then squandered in a war among themselves.",
      conflicts: [
        {
          name: "The Greco-Persian Wars",
          years: "499–449 BCE",
          against: "The Persian Empire",
          summary:
            "The mighty Persian Empire twice invaded Greece. A small Athenian force stunned the world at Marathon (490 BCE); ten years later 300 Spartans made their legendary stand at Thermopylae, and the Greek fleet destroyed Persia's navy at Salamis.",
          outcome:
            "Against all odds the divided Greeks repelled the largest empire on earth — a victory that gave Athens confidence to enter its golden age.",
          image: { wikiTitle: "Battle of Thermopylae", alt: "Depiction of the Battle of Thermopylae" },
        },
        {
          name: "The Peloponnesian War",
          years: "431–404 BCE",
          against: "Sparta (vs Athens)",
          summary:
            "A ruinous 27-year war between the Athenian and Spartan alliances for dominance of Greece, chronicled by the historian Thucydides. Plague, betrayal and a disastrous Athenian expedition to Sicily marked its course.",
          outcome:
            "Sparta won, ending Athenian supremacy — but the war exhausted all the Greek cities and left them vulnerable to outside conquest.",
        },
        {
          name: "The Conquests of Alexander",
          years: "334–323 BCE",
          against: "The Persian Empire",
          summary:
            "Alexander of Macedon led a Greek-Macedonian army east, smashing the Persians at Issus and Gaugamela, taking Egypt and Babylon, and pressing on to the Indus before his troops turned back.",
          outcome:
            "The largest empire the world had yet seen — and the spread of Greek language and culture from Egypt to Afghanistan in the 'Hellenistic' age.",
          image: { wikiTitle: "Battle of Gaugamela", alt: "Depiction of the Battle of Gaugamela" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Ideas That Changed the World",
      icon: "💡",
      intro:
        "Greece's lasting empire was one of ideas — many of them invented or first systematised here.",
      achievements: [
        {
          name: "Philosophy",
          field: "Thought",
          description:
            "Socrates, Plato and Aristotle asked how we should live, what we can know and how to reason — founding entire fields of inquiry from ethics to logic.",
          legacy: "Western philosophy has been called 'a series of footnotes to Plato'.",
        },
        {
          name: "Democracy",
          field: "Government",
          description:
            "Athens created the first system in which ordinary citizens governed themselves directly, debating and voting on the laws.",
          legacy: "The model and the very word for modern democratic government.",
        },
        {
          name: "Theatre",
          field: "Arts",
          description:
            "Greek festivals gave birth to tragedy and comedy as art forms, with playwrights like Sophocles and Aristophanes performed in vast stone theatres.",
          legacy: "Drama, the stage, and concepts like 'protagonist' and 'catharsis' are all Greek.",
        },
        {
          name: "Mathematics & geometry",
          field: "Science",
          description:
            "Pythagoras, Euclid and Archimedes turned mathematics into a rigorous, proof-based discipline.",
          legacy: "Euclid's Elements was the standard geometry textbook for over 2,000 years.",
        },
        {
          name: "History & medicine",
          field: "Science",
          description:
            "Herodotus and Thucydides invented history as critical inquiry; Hippocrates sought natural rather than divine causes for disease.",
          legacy: "Doctors still swear a version of the Hippocratic Oath.",
        },
      ],
    },
    {
      id: "legacy",
      type: "narrative",
      title: "The Hellenistic World & Legacy",
      icon: "🌍",
      image: {
        wikiTitle: "Library of Alexandria",
        alt: "Artistic depiction of the Library of Alexandria",
        caption: "The Library of Alexandria, jewel of the Hellenistic age of learning.",
      },
      paragraphs: [
        "Alexander's sudden death in 323 BCE split his empire among his generals, creating the great Hellenistic kingdoms — Ptolemaic Egypt, the Seleucid Empire and others. For three centuries Greek became the common language of the eastern Mediterranean, and cities like Alexandria, with its famous Library and Lighthouse, became dazzling centres of science and scholarship.",
        "Politically, Greece's independence ended when Rome absorbed the mainland (146 BCE) and the last Hellenistic kingdom, Egypt, in 30 BCE. But the conquerors were themselves conquered by Greek culture: educated Romans spoke Greek, copied Greek art and studied Greek philosophy.",
        "Through Rome — and later the Renaissance, when Greek texts were rediscovered — Greek ideas became the bedrock of Western civilization. Our democracy, science, philosophy, theatre, architecture and much of our vocabulary all trace back to those quarrelsome little city-states.",
      ],
      terms: [
        { term: "Hellenistic", definition: "The era after Alexander when Greek culture spread across the Near East and blended with local traditions." },
        { term: "Alexandria", definition: "The Egyptian city founded by Alexander that became the greatest centre of learning in the ancient world." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Eight questions across Greek history. Channel your inner philosopher.",
      questions: [
        {
          q: "What was a 'polis'?",
          options: ["A Greek god", "An independent city-state", "A type of warship", "A philosophy school"],
          correct: 1,
          fb: "The polis — like Athens or Sparta — was the fiercely independent city-state at the heart of Greek life.",
        },
        {
          q: "Which city created the world's first democracy?",
          options: ["Sparta", "Thebes", "Athens", "Corinth"],
          correct: 2,
          fb: "Cleisthenes' reforms in 508 BCE made Athens the first direct democracy.",
        },
        {
          q: "What was distinctive about Spartan society?",
          options: ["It was a merchant republic", "It was built entirely around military training", "It banned warfare", "It was ruled by philosophers"],
          correct: 1,
          fb: "Spartan citizens trained for war from childhood, supported by enslaved helots.",
        },
        {
          q: "At which battle did 300 Spartans make their famous stand against Persia?",
          options: ["Marathon", "Salamis", "Thermopylae", "Gaugamela"],
          correct: 2,
          fb: "Thermopylae (480 BCE) became legendary, though the decisive naval victory came at Salamis.",
        },
        {
          q: "Who taught by relentless questioning and was executed by Athens?",
          options: ["Aristotle", "Socrates", "Pericles", "Homer"],
          correct: 1,
          fb: "Socrates' questioning method founded Western philosophy; Athens executed him in 399 BCE.",
        },
        {
          q: "Which war between Athens and Sparta exhausted Greece?",
          options: ["The Trojan War", "The Greco-Persian Wars", "The Peloponnesian War", "The Punic Wars"],
          correct: 2,
          fb: "The 27-year Peloponnesian War ended Athenian supremacy and weakened all of Greece.",
        },
        {
          q: "Alexander the Great was king of which kingdom?",
          options: ["Athens", "Persia", "Macedon", "Egypt"],
          correct: 2,
          fb: "Alexander of Macedon conquered Persia and spread Greek culture across three continents.",
        },
        {
          q: "What do we call the era when Greek culture spread across the Near East after Alexander?",
          options: ["The Classical age", "The Hellenistic age", "The Bronze Age", "The Byzantine age"],
          correct: 1,
          fb: "The Hellenistic age saw Greek become the common language from Egypt to Afghanistan.",
        },
      ],
    },
  ],
};
