import { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const BASE_FILL = "#334155"; // slate-700
const BASE_STROKE = "#1e293b";

type Props = {
  // lowercased country name -> { civId, color }
  countryCiv: Map<string, { civId: string; color: string }>;
  onSelectCiv: (civId: string) => void;
  onHoverCiv?: (civId: string | null) => void;
};

export default function WorldMap({ countryCiv, onSelectCiv, onHoverCiv }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
      <ComposableMap projectionConfig={{ scale: 150 }} width={900} height={440} style={{ width: "100%", height: "auto" }}>
        <ZoomableGroup center={[10, 25]} zoom={1} maxZoom={5}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name: string = geo.properties.name ?? "";
                const entry = countryCiv.get(name.toLowerCase());
                const isCiv = Boolean(entry);
                const isHovered = entry != null && entry.civId === hovered;
                const fill = !entry
                  ? BASE_FILL
                  : isHovered
                  ? entry.color
                  : `${entry.color}aa`;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => entry && onSelectCiv(entry.civId)}
                    onMouseEnter={() => {
                      if (entry) {
                        setHovered(entry.civId);
                        onHoverCiv?.(entry.civId);
                      }
                    }}
                    onMouseLeave={() => {
                      setHovered(null);
                      onHoverCiv?.(null);
                    }}
                    style={{
                      default: { fill, stroke: BASE_STROKE, strokeWidth: 0.4, outline: "none", cursor: isCiv ? "pointer" : "default" },
                      hover: { fill: entry ? entry.color : "#475569", stroke: BASE_STROKE, strokeWidth: 0.4, outline: "none", cursor: isCiv ? "pointer" : "default" },
                      pressed: { fill: entry?.color ?? "#475569", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
