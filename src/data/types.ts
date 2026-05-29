// Domain types for the History Learning Platform.
//
// The platform is organized around CIVILIZATIONS. Each civilization is a
// self-contained, interactive learning JOURNEY made of ordered SECTIONS.
// Sections are a discriminated union so the JourneyPlayer can render each type
// and gate progress uniformly (inspired by the lesson-page model in the
// italian-tutor project, adapted for long-form history content).

/** A reference to an image, resolved at runtime from a Wikipedia article's lead image. */
export type ImageRef = {
  /** Wikipedia article title whose lead image best illustrates this moment. */
  wikiTitle: string;
  alt: string;
  caption?: string;
};

export type KeyTerm = { term: string; definition: string };

/** Long-form narrative: the core "read" section. */
export type NarrativeSection = {
  id: string;
  type: "narrative";
  title: string;
  icon?: string;
  /** Each string is one paragraph. */
  paragraphs: string[];
  image?: ImageRef;
  /** Glossary terms surfaced as interactive flip-cards. */
  terms?: KeyTerm[];
  /** Highlighted "what made them different" / "did you know" aside. */
  callout?: { title: string; body: string };
};

export type Figure = {
  name: string;
  role: string;
  lived: string;
  bio: string;
  image?: ImageRef;
};

export type FiguresSection = {
  id: string;
  type: "figures";
  title: string;
  icon?: string;
  intro?: string;
  figures: Figure[];
};

export type Conflict = {
  name: string;
  years: string;
  against: string;
  summary: string;
  outcome: string;
  image?: ImageRef;
};

export type ConflictsSection = {
  id: string;
  type: "conflicts";
  title: string;
  icon?: string;
  intro?: string;
  conflicts: Conflict[];
};

export type Achievement = {
  name: string;
  field: string;
  description: string;
  legacy: string;
};

export type AchievementsSection = {
  id: string;
  type: "achievements";
  title: string;
  icon?: string;
  intro?: string;
  achievements: Achievement[];
};

export type MCQuestion = {
  q: string;
  options: string[];
  /** index of the correct option */
  correct: number;
  /** feedback shown after answering */
  fb?: string;
};

export type QuizSection = {
  id: string;
  type: "quiz";
  title: string;
  icon?: string;
  intro?: string;
  questions: MCQuestion[];
  /** When true, this is the journey's final checkpoint (records mastery). */
  checkpoint?: boolean;
};

export type JourneySection =
  | NarrativeSection
  | FiguresSection
  | ConflictsSection
  | AchievementsSection
  | QuizSection;

export type Fact = { label: string; value: string };

export type Civilization = {
  id: string; // kebab-case, e.g. "rome"
  name: string; // "The Roman Empire"
  shortName: string; // "Rome"
  emblem: string; // emoji used in cards/headers
  region: string; // human-readable home region
  /** Modern country names (match world-atlas TopoJSON) for the Atlas map. */
  modernCountries: string[];
  timespan: string; // "753 BCE – 476 CE"
  startYear: number; // negative = BCE; used for ordering
  endYear: number;
  color: string; // hex accent
  tagline: string; // short hook
  summary: string; // 2–3 sentence overview
  hero: ImageRef;
  facts: Fact[]; // quick-reference facts in the header
  sections: JourneySection[]; // the ordered learning journey
};
