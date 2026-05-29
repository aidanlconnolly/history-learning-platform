import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { civsByChronology, countryCivMap, getCiv } from "../lib/civ";
import WorldMap from "../components/WorldMap";

export default function MapPage() {
  const navigate = useNavigate();
  const countryCiv = useMemo(() => countryCivMap(), []);
  const [hoveredCiv, setHoveredCiv] = useState<string | null>(null);
  const civs = civsByChronology();
  const hovered = hoveredCiv ? getCiv(hoveredCiv) : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Atlas of Civilizations</h1>
        <p className="mt-1 text-slate-400">
          Each tinted region marks the heartland of a civilization. Hover to identify it, click to
          begin its journey.
        </p>
      </div>

      <WorldMap countryCiv={countryCiv} onSelectCiv={(id) => navigate(`/civilization/${id}`)} onHoverCiv={setHoveredCiv} />

      <div className="min-h-[1.5rem] text-center text-sm text-slate-400">
        {hovered ? (
          <span>
            <span className="mr-1">{hovered.emblem}</span>
            <span className="font-medium text-slate-200">{hovered.name}</span> · {hovered.timespan}
          </span>
        ) : (
          "Hover a region to identify the civilization"
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {civs.map((civ) => (
          <button
            key={civ.id}
            onMouseEnter={() => setHoveredCiv(civ.id)}
            onMouseLeave={() => setHoveredCiv(null)}
            onClick={() => navigate(`/civilization/${civ.id}`)}
            className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm text-slate-200 transition-colors hover:bg-slate-800"
            style={{ borderColor: civ.color }}
          >
            <span>{civ.emblem}</span>
            {civ.shortName}
          </button>
        ))}
      </div>
    </div>
  );
}
