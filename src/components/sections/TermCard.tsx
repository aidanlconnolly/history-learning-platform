import { useState } from "react";
import type { KeyTerm } from "../../data/types";

/** A flip-to-reveal glossary card. */
export default function TermCard({ term, accent }: { term: KeyTerm; accent: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className="w-full rounded-lg border border-slate-700 bg-slate-800/60 p-3 text-left transition-colors hover:border-slate-500"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-white" style={{ color: accent }}>
          {term.term}
        </span>
        <span className="text-xs text-slate-500">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-1.5 text-sm text-slate-300">{term.definition}</p>}
    </button>
  );
}
