// Source-of-truth domain types for the History Learning Platform.
// Years are integers; negative values are BCE (e.g. -3000 = 3000 BCE).

export type Era = {
  id: string; // kebab-case, e.g. "classical-antiquity"
  name: string;
  startYear: number;
  endYear: number;
  color: string; // hex, used on the timeline band and map legend
  blurb: string;
  detailed: boolean; // richly-authored eras get more events/figures/quiz questions
};

export type Region = {
  id: string;
  name: string;
  // Country names that link this region to map geographies. These must match
  // the `properties.name` values in the world-atlas TopoJSON (Natural Earth names).
  countries: string[];
};

export type HistEvent = {
  id: string;
  eraId: string;
  year: number;
  title: string;
  summary: string;
  regionId: string;
  figureIds?: string[];
};

export type Figure = {
  id: string;
  name: string;
  eraId: string;
  lived: string; // human-readable lifespan, e.g. "356–323 BCE"
  bio: string;
};

export type QuizQuestion = {
  id: string;
  eraId: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};
