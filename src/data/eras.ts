import type { Era } from "./types";

// Broad survey of world history, Ancient -> Modern.
// `detailed: true` eras (Classical Antiquity, Modern Era) carry richer
// events/figures/quiz coverage. Listed chronologically.
export const eras: Era[] = [
  {
    id: "ancient-civilizations",
    name: "Ancient Civilizations",
    startYear: -3500,
    endYear: -800,
    color: "#d97706", // amber
    blurb:
      "The first cities, writing systems, and states emerge along great rivers — from Sumer and the Nile to the Indus and the Yellow River.",
    detailed: false,
  },
  {
    id: "classical-antiquity",
    name: "Classical Antiquity",
    startYear: -800,
    endYear: 500,
    color: "#7c3aed", // violet
    blurb:
      "Greek city-states, the conquests of Alexander, and the rise and fall of Rome lay foundations for law, philosophy, and government that endure today.",
    detailed: true,
  },
  {
    id: "middle-ages",
    name: "The Middle Ages",
    startYear: 500,
    endYear: 1400,
    color: "#0891b2", // cyan
    blurb:
      "Empires rise across Eurasia — Byzantine, Islamic caliphates, Tang China, and feudal Europe — linked by trade, faith, and the spread of ideas.",
    detailed: false,
  },
  {
    id: "renaissance-exploration",
    name: "Renaissance & Exploration",
    startYear: 1400,
    endYear: 1650,
    color: "#16a34a", // green
    blurb:
      "A rebirth of art and learning in Europe coincides with global voyages that connect continents — and reshape them — for the first time.",
    detailed: false,
  },
  {
    id: "enlightenment-revolutions",
    name: "Enlightenment & Revolutions",
    startYear: 1650,
    endYear: 1850,
    color: "#dc2626", // red
    blurb:
      "Reason, science, and ideas of liberty fuel revolutions in America and France and topple old orders across the Atlantic world.",
    detailed: false,
  },
  {
    id: "industrial-imperial",
    name: "Industrial & Imperial Age",
    startYear: 1750,
    endYear: 1914,
    color: "#b45309", // dark amber
    blurb:
      "Steam, steel, and factories transform economies while European empires expand across Africa and Asia on an unprecedented scale.",
    detailed: false,
  },
  {
    id: "modern-era",
    name: "The Modern Era",
    startYear: 1914,
    endYear: 2000,
    color: "#2563eb", // blue
    blurb:
      "Two world wars, decolonization, the Cold War, and a technological revolution remake the global order at breakneck speed.",
    detailed: true,
  },
];
