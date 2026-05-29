import { useEffect } from "react";
import type { HistEvent } from "../data/types";
import { formatYear, getFigure, getRegion } from "../lib/history";
import { useProgressStore } from "../hooks/ProgressContext";

type Props = {
  event: HistEvent;
  accent: string;
  onClose: () => void;
};

export default function EventDetail({ event, accent, onClose }: Props) {
  const { markEventViewed } = useProgressStore();
  const region = getRegion(event.regionId);
  const figures = (event.figureIds ?? [])
    .map(getFigure)
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  // Viewing the detail counts as "exploring" the event.
  useEffect(() => {
    markEventViewed(event.id);
  }, [event.id, markEventViewed]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
              style={{ backgroundColor: accent }}
            >
              {formatYear(event.year)}
            </span>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-white">{event.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-md px-2 py-1 text-slate-400 hover:bg-slate-700 hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <p className="mt-4 leading-relaxed text-slate-200">{event.summary}</p>

        {region && (
          <p className="mt-4 text-sm text-slate-400">
            <span className="font-semibold text-slate-300">Where:</span> {region.name}
          </p>
        )}

        {figures.length > 0 && (
          <div className="mt-5 border-t border-slate-700 pt-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Key figures
            </h3>
            <ul className="mt-2 space-y-3">
              {figures.map((f) => (
                <li key={f.id}>
                  <p className="font-medium text-white">
                    {f.name} <span className="text-slate-400">· {f.lived}</span>
                  </p>
                  <p className="text-sm text-slate-300">{f.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
