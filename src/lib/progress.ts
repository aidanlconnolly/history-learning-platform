// Pure progress math — no React, no storage. Imported by useProgress + UI.
// Progress is tracked per civilization journey: which sections are completed
// and the best checkpoint-quiz score.

export type CivProgress = {
  sectionsDone: string[];
  checkpointBest: number | null; // best fraction 0–1, null if never taken
};

export type ProgressState = {
  civs: Record<string, CivProgress>;
  currentStreak: number;
  longestStreak: number;
  lastActiveDay: string | null; // YYYY-MM-DD
};

export function defaultProgress(): ProgressState {
  return { civs: {}, currentStreak: 0, longestStreak: 0, lastActiveDay: null };
}

export function civProgress(state: ProgressState, civId: string): CivProgress {
  return state.civs[civId] ?? { sectionsDone: [], checkpointBest: null };
}

// --- Streaks ---------------------------------------------------------------

export function dayKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function dayDiff(a: string, b: string): number {
  const da = new Date(`${a}T00:00:00`);
  const db = new Date(`${b}T00:00:00`);
  return Math.round((db.getTime() - da.getTime()) / 86_400_000);
}

export function bumpStreak(
  state: ProgressState,
  today: string
): Pick<ProgressState, "currentStreak" | "longestStreak" | "lastActiveDay"> {
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

// --- Derived stats ---------------------------------------------------------

export function civCompletionPct(
  state: ProgressState,
  civId: string,
  totalSections: number
): number {
  if (totalSections === 0) return 0;
  const done = civProgress(state, civId).sectionsDone.length;
  return Math.round((Math.min(done, totalSections) / totalSections) * 100);
}

export function startedCivCount(state: ProgressState): number {
  return Object.values(state.civs).filter((c) => c.sectionsDone.length > 0).length;
}

/** Civilizations whose every section is complete (needs the section counts). */
export function completedCivCount(
  state: ProgressState,
  sectionCounts: Record<string, number>
): number {
  return Object.entries(state.civs).filter(([id, c]) => {
    const total = sectionCounts[id] ?? Infinity;
    return total > 0 && c.sectionsDone.length >= total;
  }).length;
}

export function totalSectionsDone(state: ProgressState): number {
  return Object.values(state.civs).reduce((sum, c) => sum + c.sectionsDone.length, 0);
}

/** Average best checkpoint score across civs that have a recorded score. */
export function averageCheckpoint(state: ProgressState): number | null {
  const scores = Object.values(state.civs)
    .map((c) => c.checkpointBest)
    .filter((s): s is number => s !== null);
  if (scores.length === 0) return null;
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}
