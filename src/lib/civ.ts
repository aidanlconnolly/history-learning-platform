import type { Civilization, JourneySection, QuizSection } from "../data/types";
import { civilizations } from "../data/civilizations";

export function getCiv(id: string): Civilization | undefined {
  return civilizations.find((c) => c.id === id);
}

/** Civilizations sorted by when they began (BCE first). */
export function civsByChronology(): Civilization[] {
  return [...civilizations].sort((a, b) => a.startYear - b.startYear);
}

export function isQuiz(section: JourneySection): section is QuizSection {
  return section.type === "quiz";
}

/** The final checkpoint quiz of a journey, if any. */
export function checkpointOf(civ: Civilization): QuizSection | undefined {
  const quizzes = civ.sections.filter(isQuiz);
  return quizzes.find((q) => q.checkpoint) ?? quizzes[quizzes.length - 1];
}

/** Total sections across all journeys — denominator for global progress. */
export function totalSectionCount(): number {
  return civilizations.reduce((sum, c) => sum + c.sections.length, 0);
}

/** Map country name -> civ accent color, for tinting the Atlas map. */
export function countryCivMap(): Map<string, { civId: string; color: string }> {
  const map = new Map<string, { civId: string; color: string }>();
  for (const civ of civilizations) {
    for (const country of civ.modernCountries) {
      // First civ to claim a country wins the tint (older civs listed first
      // after sorting is not guaranteed here, so we keep insertion order).
      if (!map.has(country.toLowerCase())) {
        map.set(country.toLowerCase(), { civId: civ.id, color: civ.color });
      }
    }
  }
  return map;
}
