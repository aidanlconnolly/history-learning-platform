import type { HistEvent } from "../data/types";
import { formatYear } from "../lib/history";

type Props = {
  event: HistEvent;
  accent: string;
  viewed: boolean;
  onSelect: (event: HistEvent) => void;
};

export default function EventCard({ event, accent, viewed, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(event)}
      className="group w-full rounded-lg border border-slate-700 bg-slate-800/60 p-4 text-left transition-colors hover:border-slate-500 hover:bg-slate-800"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: accent }}>
          {formatYear(event.year)}
        </span>
        {viewed && (
          <span className="text-xs text-emerald-400" title="Explored">
            ✓ explored
          </span>
        )}
      </div>
      <h3 className="mt-1 font-medium text-white group-hover:text-white">{event.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-slate-400">{event.summary}</p>
    </button>
  );
}
