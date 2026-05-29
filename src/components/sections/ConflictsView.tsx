import { useState } from "react";
import type { Conflict, ConflictsSection } from "../../data/types";
import WikiImage from "../WikiImage";

function ConflictCard({
  conflict,
  accent,
  emblem,
  defaultOpen,
}: {
  conflict: Conflict;
  accent: string;
  emblem: string;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 p-4 text-left"
      >
        <div>
          <h3 className="font-semibold text-white">{conflict.name}</h3>
          <p className="text-sm" style={{ color: accent }}>
            {conflict.years} · vs {conflict.against}
          </p>
        </div>
        <span className="shrink-0 text-slate-500">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="space-y-3 px-4 pb-4">
          {conflict.image && (
            <WikiImage image={conflict.image} accent={accent} emblem={emblem} ratioClassName="aspect-[16/9]" />
          )}
          <p className="text-sm leading-relaxed text-slate-300">{conflict.summary}</p>
          <p className="rounded-lg bg-slate-900/60 p-3 text-sm text-slate-200">
            <span className="font-semibold" style={{ color: accent }}>
              Outcome:{" "}
            </span>
            {conflict.outcome}
          </p>
        </div>
      )}
    </div>
  );
}

type Props = { section: ConflictsSection; accent: string; emblem: string };

export default function ConflictsView({ section, accent, emblem }: Props) {
  return (
    <div className="space-y-4">
      {section.intro && <p className="leading-relaxed text-slate-200">{section.intro}</p>}
      <div className="space-y-3">
        {section.conflicts.map((c, i) => (
          <ConflictCard key={c.name} conflict={c} accent={accent} emblem={emblem} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  );
}
