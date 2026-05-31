// Domain types for the History Learning Platform.
//
// The platform is organized around CIVILIZATIONS. Each civilization is a
// self-contained, interactive learning JOURNEY made of ordered SECTIONS.
// Sections are a discriminated union so the JourneyPlayer can render each type
// and gate progress uniformly (inspired by the lesson-page model in the
// italian-tutor project, adapted for long-form history content).

/** A single pivotal moment in a civilization's history. */
export type Milestone = {
  year: string;
  title: string;
  description: string;
  icon?: string;
  /** Visual weight / colour coding. */
  type?: "rise" | "conquest" | "war" | "cultural" | "innovation" | "fall";
};

/** An ordered timeline of key moments — the opening overview for each journey. */
export type MilestonesSection = {
  id: string;
  type: "milestones";
  title: string;
  icon?: string;
  intro?: string;
  milestones: Milestone[];
};

/** A reference to an image, resolved at runtime from a Wikipedia article's lead image. */
export type ImageRef = {
  /** Wikipedia article title whose lead image best illustrates this moment. */
  wikiTitle: string;
  alt: string;
  caption?: string;
};

export type KeyTerm = { term: string; definition: string };

/**
 * A focused deep-dive that expands one facet of a narrative lesson. Rendered
 * inline as a titled sub-section beneath the lesson's intro paragraphs, so a
 * single lesson (e.g. "The First Cities") can break into 3–4 detailed parts.
 */
export type SubLesson = {
  title: string;
  /** Each string is one paragraph. */
  paragraphs: string[];
  image?: ImageRef;
  /** Glossary terms specific to this sub-lesson, surfaced as flip-cards. */
  terms?: KeyTerm[];
};

/** Long-form narrative: the core "read" section. */
export type NarrativeSection = {
  id: string;
  type: "narrative";
  title: string;
  icon?: string;
  /** Each string is one paragraph — the lesson's overview / intro. */
  paragraphs: string[];
  /** Detailed sub-lessons that expand the lesson into 3–4 focused parts. */
  subLessons?: SubLesson[];
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
  image?: ImageRef;
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
  | MilestonesSection
  | NarrativeSection
  | FiguresSection
  | ConflictsSection
  | AchievementsSection
  | QuizSection;

export type Fact = { label: string; value: string };

export type CityPin = {
  name: string;
  /** Latitude (positive = N) */
  lat: number;
  /** Longitude (positive = E) */
  lon: number;
};

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
  /** Major historical cities shown as pins on the Atlas map. */
  majorCities?: CityPin[];
  sections: JourneySection[]; // the ordered learning journey
};
