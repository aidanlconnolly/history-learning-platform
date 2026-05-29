import { Link } from "react-router-dom";
import type { Civilization } from "../data/types";
import WikiImage from "./WikiImage";
import ProgressBar from "./ProgressBar";

type Props = { civ: Civilization; pct: number };

export default function CivCard({ civ, pct }: Props) {
  return (
    <Link
      to={`/civilization/${civ.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60 transition-colors hover:border-slate-500"
    >
      <WikiImage image={civ.hero} accent={civ.color} emblem={civ.emblem} rounded={false} ratioClassName="aspect-[16/9]" />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{civ.emblem}</span>
          <h2 className="font-serif text-lg font-semibold text-white">{civ.name}</h2>
        </div>
        <p className="text-xs font-medium" style={{ color: civ.color }}>
          {civ.timespan} · {civ.region}
        </p>
        <p className="mt-2 flex-1 text-sm text-slate-400">{civ.tagline}</p>
        <div className="mt-3">
          <div className="mb-1 flex justify-between text-[11px] text-slate-500">
            <span>{pct > 0 ? `${pct}% explored` : `${civ.sections.length} sections`}</span>
            {pct === 100 && <span className="text-emerald-400">✓ complete</span>}
          </div>
          <ProgressBar value={pct} color={civ.color} />
        </div>
      </div>
    </Link>
  );
}
