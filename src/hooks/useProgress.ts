import { useCallback, useEffect, useRef, useState } from "react";
import {
  bumpStreak,
  civProgress,
  dayKey,
  defaultProgress,
  type ProgressState,
} from "../lib/progress";

const STORAGE_KEY = "history-platform.progress.v2";

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { ...defaultProgress(), ...parsed, civs: parsed.civs ?? {} };
  } catch {
    return defaultProgress();
  }
}

/**
 * Single owning hook for all learning progress (per-civilization journeys).
 * Loads on mount, exposes granular updaters, persists on every change.
 * Pure math lives in lib/progress.ts.
 */
export function useProgress() {
  const [state, setState] = useState<ProgressState>(load);
  const hydrated = useRef(false);

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable — ignore */
    }
  }, [state]);

  const markSectionComplete = useCallback((civId: string, sectionId: string) => {
    setState((prev) => {
      const cur = civProgress(prev, civId);
      if (cur.sectionsDone.includes(sectionId)) return prev;
      const today = dayKey();
      return {
        ...prev,
        civs: {
          ...prev.civs,
          [civId]: { ...cur, sectionsDone: [...cur.sectionsDone, sectionId] },
        },
        ...bumpStreak(prev, today),
      };
    });
  }, []);

  const recordCheckpoint = useCallback((civId: string, score: number, total: number) => {
    setState((prev) => {
      const cur = civProgress(prev, civId);
      const fraction = total > 0 ? score / total : 0;
      const checkpointBest = Math.max(cur.checkpointBest ?? 0, fraction);
      const today = dayKey();
      return {
        ...prev,
        civs: { ...prev.civs, [civId]: { ...cur, checkpointBest } },
        ...bumpStreak(prev, today),
      };
    });
  }, []);

  const resetProgress = useCallback(() => setState(defaultProgress()), []);

  return { state, markSectionComplete, recordCheckpoint, resetProgress };
}
