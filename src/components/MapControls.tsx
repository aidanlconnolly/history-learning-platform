import { eras } from "../data/eras";

type Props = {
  selectedEraId: string;
  onSelectEra: (eraId: string) => void;
};

export default function MapControls({ selectedEraId, onSelectEra }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {eras.map((era) => {
        const active = era.id === selectedEraId;
        return (
          <button
            key={era.id}
            onClick={() => onSelectEra(era.id)}
            style={active ? { backgroundColor: era.color, borderColor: era.color } : { borderColor: era.color }}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              active ? "text-white" : "text-slate-200 hover:bg-slate-800"
            }`}
          >
            {era.name}
          </button>
        );
      })}
    </div>
  );
}
