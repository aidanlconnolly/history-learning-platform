// Pure progress math — no React, no storage. Imported by useProgress and components.

export type QuizAttempt = {
  eraId: string;
  score: number; // number correct
  total: number; // number of questions
  at: number; // epoch ms
};

export type ProgressState = {
  viewedEventIds: string[];
  attempts: QuizAttempt[];
  currentStreak: number;
  longestStreak: number;
  lastActiveDay: string | null; // YYYY-MM-DD of last activity
};

export function defaultProgress(): ProgressState {
  return {
    viewedEventIds: [],
    attempts: [],
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDay: null,
  };
}

/** Local-time day key, e.g. "2026-05-29". */
export function dayKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Whole-day difference between two YYYY-MM-DD keys (b - a). */
export function dayDiff(a: string, b: string): number {
  const da = new Date(`${a}T00:00:00`);
  const db = new Date(`${b}T00:00:00`);
  return Math.round((db.getTime() - da.getTime()) / 86_400_000);
}

/**
 * Recompute streak fields given the last active day and "today".
 * Same day -> unchanged; consecutive day -> +1; gap -> reset to 1.
 */
export function bumpStreak(state: ProgressState, today: string): Pick<ProgressState, "currentStreak" | "longestStreak" | "lastActiveDay"> {
  if (state.lastActiveDay === today) {
    return {
      currentStreak: state.currentStreak,
      longestStreak: state.longestStreak,
      lastActiveDay: today,
    };
  }
  const gap = state.lastActiveDay ? dayDiff(state.lastActiveDay, today) : Infinity;
  const currentStreak = gap === 1 ? state.currentStreak + 1 : 1;
  return {
    currentStreak,
    longestStreak: Math.max(state.longestStreak, currentStreak),
    lastActiveDay: today,
  };
}

/** Percentage (0–100) of all events the user has viewed. */
export function explorationPct(viewedCount: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((viewedCount / total) * 100);
}

/** Best score (correct/total as a fraction 0–1) for an era, or null if untaken. */
export function bestScoreForEra(attempts: QuizAttempt[], eraId: string): number | null {
  const forEra = attempts.filter((a) => a.eraId === eraId && a.total > 0);
  if (forEra.length === 0) return null;
  return Math.max(...forEra.map((a) => a.score / a.total));
}

export function totalQuizzesTaken(attempts: QuizAttempt[]): number {
  return attempts.length;
}

/** Average score across all attempts as a fraction 0–1, or null if none. */
export function averageScore(attempts: QuizAttempt[]): number | null {
  const scored = attempts.filter((a) => a.total > 0);
  if (scored.length === 0) return null;
  const sum = scored.reduce((acc, a) => acc + a.score / a.total, 0);
  return sum / scored.length;
}
