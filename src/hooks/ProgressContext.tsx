import { createContext, useContext, type ReactNode } from "react";
import { useProgress } from "./useProgress";

type ProgressApi = ReturnType<typeof useProgress>;

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const value = useProgress();
  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

/** Access the single shared progress store. */
// eslint-disable-next-line react-refresh/only-export-components
export function useProgressStore(): ProgressApi {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgressStore must be used within a ProgressProvider");
  return ctx;
}
