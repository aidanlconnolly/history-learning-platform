import { useCallback, useEffect, useRef, useState } from "react";
import {
  bumpStreak,
  dayKey,
  defaultProgress,
  type ProgressState,
} from "../lib/progress";

const STORAGE_KEY = "history-platform.progress.v1";

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { ...defaultProgress(), ...parsed };
  } catch {
    return defaultProgress();
  }
}

/**
 * Single owning hook for all learning progress. Mirrors the workspace
 * localStorage + custom-hook pattern: loads on mount, exposes granular
 * updaters, and persists on every change. Pure math lives in lib/progress.ts.
 */
export function useProgress() {
  const [state, setState] = useState<ProgressState>(load);
  // Skip the very first save so we don't immediately rewrite what we just loaded.
  const hydrated = useRef(false);

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage full or unavailable — ignore */
    }
  }, [state]);

  const markEventViewed = useCallback((eventId: string) => {
    setState((prev) => {
      if (prev.viewedEventIds.includes(eventId)) return prev;
      const today = dayKey();
      return {
        ...prev,
        viewedEventIds: [...prev.viewedEventIds, eventId],
        ...bumpStreak(prev, today),
      };
    });
  }, []);

  const recordQuizAttempt = useCallback(
    (eraId: string, score: number, total: number) => {
      setState((prev) => {
        const today = dayKey();
        return {
          ...prev,
          attempts: [...prev.attempts, { eraId, score, total, at: Date.now() }],
          ...bumpStreak(prev, today),
        };
      });
    },
    []
  );

  const resetProgress = useCallback(() => {
    setState(defaultProgress());
  }, []);

  return { state, markEventViewed, recordQuizAttempt, resetProgress };
}
