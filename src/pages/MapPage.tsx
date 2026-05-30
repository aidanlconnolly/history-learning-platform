import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { civsByChronology, countryCivMap } from "../lib/civ";
import WorldMap from "../components/WorldMap";

export default function MapPage() {
  const navigate = useNavigate();
  const civs = useMemo(() => civsByChronology(), []);
  const countryCiv = useMemo(() => countryCivMap(), []);
  const [hoveredCiv, setHoveredCiv] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Atlas of Civilizations</h1>
        <p className="mt-1 text-slate-400">
          Hover a region to preview a civilization — click to begin its journey.
        </p>
      </div>

      <WorldMap
        countryCiv={countryCiv}
        civs={civs}
        onSelectCiv={(id) => navigate(`/civilization/${id}`)}
        onHoverCiv={setHoveredCiv}
      />

      {/* Legend pills */}
      <div className="flex flex-wrap gap-2">
        {civs.map((civ) => (
          <button
            key={civ.id}
            onMouseEnter={() => setHoveredCiv(civ.id)}
            onMouseLeave={() => setHoveredCiv(null)}
            onClick={() => navigate(`/civilization/${civ.id}`)}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm text-slate-200 transition-colors hover:bg-slate-800 ${
              hoveredCiv === civ.id ? "bg-slate-800" : ""
            }`}
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
