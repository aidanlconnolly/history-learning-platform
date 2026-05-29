import { Link } from "react-router-dom";
import { civsByChronology, totalSectionCount } from "../lib/civ";
import {
  averageCheckpoint,
  civCompletionPct,
  civProgress,
  completedCivCount,
  startedCivCount,
  totalSectionsDone,
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
  const civs = civsByChronology();

  const sectionCounts = Object.fromEntries(civs.map((c) => [c.id, c.sections.length]));
  const totalSections = totalSectionCount();
  const doneSections = totalSectionsDone(state);
  const overallPct = totalSections > 0 ? Math.round((doneSections / totalSections) * 100) : 0;
  const avg = averageCheckpoint(state);
  const hasProgress = doneSections > 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-serif text-3xl font-bold text-white">Your Progress</h1>
          <p className="mt-1 text-slate-400">Saved locally on this device.</p>
        </div>
        {hasProgress && (
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
        <Stat label="Journeys started" value={`${startedCivCount(state)}`} />
        <Stat label="Journeys completed" value={`${completedCivCount(state, sectionCounts)}`} />
        <Stat label="Avg. checkpoint" value={avg === null ? "—" : `${Math.round(avg * 100)}%`} />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between text-sm text-slate-300">
          <span>Sections explored</span>
          <span>
            {doneSections} / {totalSections} ({overallPct}%)
          </span>
        </div>
        <ProgressBar value={overallPct} />
      </div>

      <div>
        <h2 className="font-serif text-xl font-semibold text-white">By civilization</h2>
        <div className="mt-4 space-y-3">
          {civs.map((civ) => {
            const pct = civCompletionPct(state, civ.id, civ.sections.length);
            const best = civProgress(state, civ.id).checkpointBest;
            return (
              <Link
                key={civ.id}
                to={`/civilization/${civ.id}`}
                className="block rounded-lg border border-slate-800 p-3 transition-colors hover:border-slate-600 hover:bg-slate-800/40"
              >
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-200">
                    <span>{civ.emblem}</span>
                    {civ.name}
                  </span>
                  <span className="text-slate-400">
                    {pct}%{best !== null && ` · best quiz ${Math.round(best * 100)}%`}
                  </span>
                </div>
                <ProgressBar value={pct} color={civ.color} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
