import type { HistEvent } from "./types";

// Key events, each linked to an era and a region. Detailed eras
// (classical-antiquity, modern-era) carry more entries.
export const events: HistEvent[] = [
  // Ancient Civilizations
  {
    id: "sumer-writing",
    eraId: "ancient-civilizations",
    year: -3200,
    title: "Cuneiform writing emerges in Sumer",
    summary:
      "Scribes in the city-states of southern Mesopotamia develop cuneiform, among the world's earliest writing systems, to record trade and administration.",
    regionId: "mesopotamia",
  },
  {
    id: "great-pyramid",
    eraId: "ancient-civilizations",
    year: -2560,
    title: "The Great Pyramid of Giza is completed",
    summary:
      "Built as a tomb for the pharaoh Khufu, it remained the tallest human-made structure for nearly 4,000 years.",
    regionId: "egypt",
  },
  {
    id: "code-hammurabi",
    eraId: "ancient-civilizations",
    year: -1754,
    title: "Hammurabi's Code is inscribed",
    summary:
      "The Babylonian king sets down nearly 300 laws on a stone stele, an early statement of the idea that rules should be public and fixed.",
    regionId: "mesopotamia",
    figureIds: ["hammurabi"],
  },

  // Classical Antiquity (detailed)
  {
    id: "first-olympics",
    eraId: "classical-antiquity",
    year: -776,
    title: "The first recorded Olympic Games",
    summary:
      "Held at Olympia in honor of Zeus, the games become a unifying ritual across the often-warring Greek city-states.",
    regionId: "greece",
  },
  {
    id: "athenian-democracy",
    eraId: "classical-antiquity",
    year: -508,
    title: "Athens adopts democracy",
    summary:
      "Reforms attributed to Cleisthenes give citizens direct say in government, a landmark in the history of self-rule.",
    regionId: "greece",
    figureIds: ["pericles"],
  },
  {
    id: "alexander-empire",
    eraId: "classical-antiquity",
    year: -331,
    title: "Alexander defeats Persia at Gaugamela",
    summary:
      "Alexander's victory shatters the Achaemenid Empire and carries Greek culture across the Near East to the edge of India.",
    regionId: "middle-east",
    figureIds: ["alexander"],
  },
  {
    id: "caesar-rubicon",
    eraId: "classical-antiquity",
    year: -49,
    title: "Caesar crosses the Rubicon",
    summary:
      "By marching his army into Italy in defiance of the Senate, Caesar ignites a civil war that ends the Roman Republic.",
    regionId: "italy",
    figureIds: ["julius-caesar"],
  },
  {
    id: "roman-empire",
    eraId: "classical-antiquity",
    year: -27,
    title: "Augustus founds the Roman Empire",
    summary:
      "Octavian takes the title Augustus, becoming Rome's first emperor and beginning two centuries of relative peace, the Pax Romana.",
    regionId: "italy",
    figureIds: ["augustus"],
  },
  {
    id: "fall-rome",
    eraId: "classical-antiquity",
    year: 476,
    title: "The fall of the Western Roman Empire",
    summary:
      "The deposition of the last Western emperor, Romulus Augustulus, marks a traditional end point of antiquity in Europe.",
    regionId: "italy",
  },

  // The Middle Ages
  {
    id: "charlemagne-crowned",
    eraId: "middle-ages",
    year: 800,
    title: "Charlemagne crowned Emperor",
    summary:
      "Pope Leo III crowns Charlemagne Emperor of the Romans, binding the Frankish realm to the Church and reviving the imperial idea in the West.",
    regionId: "western-europe",
    figureIds: ["charlemagne"],
  },
  {
    id: "mongol-empire",
    eraId: "middle-ages",
    year: 1206,
    title: "Genghis Khan unites the Mongols",
    summary:
      "Proclaimed Great Khan, he forges a steppe confederation that will build the largest contiguous empire in history.",
    regionId: "east-asia",
    figureIds: ["genghis-khan"],
  },
  {
    id: "black-death",
    eraId: "middle-ages",
    year: 1347,
    title: "The Black Death reaches Europe",
    summary:
      "Plague spreading along trade routes kills perhaps a third of Europe's population, upending economies and societies.",
    regionId: "western-europe",
  },

  // Renaissance & Exploration
  {
    id: "printing-press",
    eraId: "renaissance-exploration",
    year: 1440,
    title: "Gutenberg's printing press",
    summary:
      "Movable-type printing makes books cheap and plentiful, accelerating literacy, science, and the spread of new ideas.",
    regionId: "western-europe",
  },
  {
    id: "columbus-voyage",
    eraId: "renaissance-exploration",
    year: 1492,
    title: "Columbus reaches the Americas",
    summary:
      "Sailing for Spain, Columbus opens lasting contact between the hemispheres, triggering the Columbian Exchange.",
    regionId: "north-america",
    figureIds: ["columbus"],
  },
  {
    id: "reformation",
    eraId: "renaissance-exploration",
    year: 1517,
    title: "Luther sparks the Reformation",
    summary:
      "Martin Luther's Ninety-five Theses challenge the Catholic Church, splitting Western Christianity and reshaping European politics.",
    regionId: "western-europe",
  },

  // Enlightenment & Revolutions
  {
    id: "us-independence",
    eraId: "enlightenment-revolutions",
    year: 1776,
    title: "American Declaration of Independence",
    summary:
      "Thirteen colonies declare independence from Britain, grounding the new nation in Enlightenment ideals of liberty and consent.",
    regionId: "north-america",
    figureIds: ["washington"],
  },
  {
    id: "french-revolution",
    eraId: "enlightenment-revolutions",
    year: 1789,
    title: "The French Revolution begins",
    summary:
      "The storming of the Bastille opens a revolution that abolishes the monarchy and proclaims the rights of man.",
    regionId: "western-europe",
    figureIds: ["napoleon"],
  },

  // Industrial & Imperial Age
  {
    id: "steam-engine",
    eraId: "industrial-imperial",
    year: 1769,
    title: "Watt patents the steam engine",
    summary:
      "James Watt's improved steam engine powers factories, mines, and railways, driving the Industrial Revolution.",
    regionId: "western-europe",
  },
  {
    id: "scramble-africa",
    eraId: "industrial-imperial",
    year: 1884,
    title: "The Scramble for Africa",
    summary:
      "At the Berlin Conference, European powers carve up nearly the entire African continent among themselves.",
    regionId: "africa",
    figureIds: ["victoria"],
  },

  // Modern Era (detailed)
  {
    id: "wwi",
    eraId: "modern-era",
    year: 1914,
    title: "The First World War begins",
    summary:
      "The assassination of Archduke Franz Ferdinand triggers a continental war that kills millions and topples four empires.",
    regionId: "western-europe",
  },
  {
    id: "russian-revolution",
    eraId: "modern-era",
    year: 1917,
    title: "The Russian Revolution",
    summary:
      "The Bolsheviks seize power, founding the world's first communist state and reshaping 20th-century politics.",
    regionId: "eastern-europe",
  },
  {
    id: "wwii",
    eraId: "modern-era",
    year: 1939,
    title: "The Second World War begins",
    summary:
      "Germany's invasion of Poland sparks a global conflict that will claim tens of millions of lives and remake the world order.",
    regionId: "western-europe",
    figureIds: ["churchill"],
  },
  {
    id: "india-independence",
    eraId: "modern-era",
    year: 1947,
    title: "India gains independence",
    summary:
      "After decades of nonviolent struggle, India wins freedom from British rule, accelerating global decolonization.",
    regionId: "south-asia",
    figureIds: ["gandhi"],
  },
  {
    id: "moon-landing",
    eraId: "modern-era",
    year: 1969,
    title: "Apollo 11 lands on the Moon",
    summary:
      "Neil Armstrong becomes the first human to walk on the Moon, a peak of the Cold War space race.",
    regionId: "north-america",
  },
  {
    id: "civil-rights",
    eraId: "modern-era",
    year: 1963,
    title: "The March on Washington",
    summary:
      "Martin Luther King Jr.'s 'I Have a Dream' speech galvanizes the U.S. civil-rights movement.",
    regionId: "north-america",
    figureIds: ["mlk"],
  },
  {
    id: "berlin-wall",
    eraId: "modern-era",
    year: 1989,
    title: "The fall of the Berlin Wall",
    summary:
      "The wall's opening signals the collapse of communist rule in Eastern Europe and the approaching end of the Cold War.",
    regionId: "eastern-europe",
  },
];
