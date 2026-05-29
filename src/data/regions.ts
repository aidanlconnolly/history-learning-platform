import type { Region } from "./types";

// Curated regions used to filter events and to tint the world map.
// `countries` values must match the `properties.name` fields in the
// world-atlas TopoJSON (Natural Earth country names).
export const regions: Region[] = [
  { id: "mesopotamia", name: "Mesopotamia & the Near East", countries: ["Iraq", "Syria", "Turkey"] },
  { id: "egypt", name: "Egypt & the Nile", countries: ["Egypt", "Sudan"] },
  { id: "greece", name: "Greece & the Aegean", countries: ["Greece"] },
  { id: "italy", name: "Italy & Rome", countries: ["Italy"] },
  {
    id: "western-europe",
    name: "Western Europe",
    countries: ["France", "Germany", "United Kingdom", "Spain", "Portugal", "Netherlands", "Belgium"],
  },
  { id: "eastern-europe", name: "Eastern Europe & Russia", countries: ["Russia", "Poland", "Ukraine"] },
  { id: "middle-east", name: "Middle East & Persia", countries: ["Iran", "Saudi Arabia", "Israel", "Jordan"] },
  { id: "south-asia", name: "South Asia", countries: ["India", "Pakistan", "Bangladesh"] },
  { id: "east-asia", name: "East Asia", countries: ["China", "Japan", "South Korea", "Mongolia"] },
  { id: "africa", name: "Sub-Saharan Africa", countries: ["Mali", "Ethiopia", "South Africa", "Nigeria", "Ghana"] },
  { id: "north-america", name: "North America", countries: ["United States of America", "Canada", "Mexico"] },
  { id: "south-america", name: "South America", countries: ["Peru", "Bolivia", "Brazil", "Chile"] },
];
