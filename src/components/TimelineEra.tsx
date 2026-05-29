import type { Era } from "../data/types";
import { formatEraRange } from "../lib/history";

type Props = {
  era: Era;
  widthPct: number;
  selected: boolean;
  onSelect: (eraId: string) => void;
};

export default function TimelineEra({ era, widthPct, selected, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(era.id)}
      style={{ width: `${widthPct}%`, backgroundColor: era.color }}
      className={`group relative flex min-w-[120px] flex-col justify-between overflow-hidden rounded-md px-3 py-3 text-left text-white transition-all ${
        selected ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900" : "opacity-80 hover:opacity-100"
      }`}
      title={`${era.name} (${formatEraRange(era)})`}
    >
      <span className="text-sm font-semibold leading-tight drop-shadow">{era.name}</span>
      <span className="mt-2 text-[11px] font-medium text-white/85">{formatEraRange(era)}</span>
    </button>
  );
}
