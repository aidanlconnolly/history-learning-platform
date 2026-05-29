import { eras } from "../data/eras";
import { totalEventCount } from "../lib/history";
import {
  averageScore,
  bestScoreForEra,
  explorationPct,
  totalQuizzesTaken,
} from "../lib/progress";
import { useProgressStore } from "../hooks/ProgressContext";
import ProgressBar from "../components/ProgressBar";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}

export default function ProgressPage() {
  const { state, resetProgress } = useProgressStore();

  const explored = state.viewedEventIds.length;
  const total = totalEventCount();
  const pct = explorationPct(explored, total);
  const avg = averageScore(state.attempts);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-serif text-3xl font-bold text-white">Your Progress</h1>
          <p className="mt-1 text-slate-400">Saved locally on this device.</p>
        </div>
        {(explored > 0 || state.attempts.length > 0) && (
          <button
            onClick={() => {
              if (confirm("Reset all progress? This cannot be undone.")) resetProgress();
            }}
            className="rounded-md border border-slate-600 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800"
          >
            Reset progress
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Current streak" value={`${state.currentStreak} 🔥`} />
        <Stat label="Longest streak" value={`${state.longestStreak}`} />
        <Stat label="Quizzes taken" value={`${totalQuizzesTaken(state.attempts)}`} />
        <Stat label="Avg. quiz score" value={avg === null ? "—" : `${Math.round(avg * 100)}%`} />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between text-sm text-slate-300">
          <span>Events explored</span>
          <span>
            {explored} / {total} ({pct}%)
          </span>
        </div>
        <ProgressBar value={pct} />
      </div>

      <div>
        <h2 className="font-serif text-xl font-semibold text-white">Mastery by era</h2>
        <div className="mt-4 space-y-3">
          {eras.map((era) => {
            const best = bestScoreForEra(state.attempts, era.id);
            const value = best === null ? 0 : best * 100;
            return (
              <div key={era.id}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-slate-200">{era.name}</span>
                  <span className="text-slate-400">{best === null ? "Not attempted" : `${Math.round(value)}%`}</span>
                </div>
                <ProgressBar value={value} color={era.color} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
