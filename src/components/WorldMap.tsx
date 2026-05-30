import { useRef, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import type { Civilization } from "../data/types";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WATER_BG   = "#0b1f38";
const LAND_BASE  = "#2a3a28";
const LAND_HOVER = "#3d5238";
const BORDER     = "#1a2d1a";

type CityPin = { name: string; lat: number; lon: number; civId: string; color: string };

type Props = {
  countryCiv: Map<string, { civId: string; color: string }>;
  civs: Civilization[];
  onSelectCiv: (civId: string) => void;
  onHoverCiv?: (civId: string | null) => void;
};

export default function WorldMap({ countryCiv, civs, onSelectCiv, onHoverCiv }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hoveredCiv = hovered ? civs.find((c) => c.id === hovered) ?? null : null;

  // Flatten all city pins from all civs
  const cityPins: CityPin[] = civs.flatMap((civ) =>
    (civ.majorCities ?? []).map((city) => ({
      ...city,
      civId: civ.id,
      color: civ.color,
    }))
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseLeave() {
    setTooltip(null);
    setHovered(null);
    onHoverCiv?.(null);
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl border border-blue-900/40"
      style={{ background: WATER_BG }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle water texture gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, #0d2a4a 0%, transparent 70%), radial-gradient(ellipse at 20% 20%, #06172e 0%, transparent 60%)",
        }}
      />

      <ComposableMap
        projectionConfig={{ scale: 150 }}
        width={900}
        height={440}
        style={{ width: "100%", height: "auto", position: "relative", zIndex: 1 }}
      >
        <ZoomableGroup center={[10, 25]} zoom={1} maxZoom={5}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name: string = geo.properties.name ?? "";
                const entry = countryCiv.get(name.toLowerCase());
                const isCiv = Boolean(entry);
                const isHov = entry != null && entry.civId === hovered;
                const fill = !entry
                  ? isHov ? LAND_HOVER : LAND_BASE
                  : isHov
                  ? entry.color
                  : `${entry.color}99`;

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
                    style={{
                      default: { fill, stroke: BORDER, strokeWidth: 0.4, outline: "none", cursor: isCiv ? "pointer" : "default", transition: "fill 150ms" },
                      hover:   { fill: entry ? entry.color : LAND_HOVER, stroke: BORDER, strokeWidth: 0.4, outline: "none", cursor: isCiv ? "pointer" : "default" },
                      pressed: { fill: entry?.color ?? LAND_HOVER, outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* City markers */}
          {cityPins.map((city, idx) => {
            const isActive = city.civId === hovered;
            return (
              <Marker key={`${city.civId}-${idx}`} coordinates={[city.lon, city.lat]}>
                <circle
                  r={isActive ? 4 : 2.5}
                  fill={city.color}
                  stroke="#fff"
                  strokeWidth={0.7}
                  opacity={isActive ? 1 : 0.55}
                  style={{ transition: "all 150ms" }}
                />
                {isActive && (
                  <text
                    x={6}
                    y={-4}
                    fontSize={7}
                    fill="#f1f5f9"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                    style={{ pointerEvents: "none" }}
                  >
                    {city.name}
                  </text>
                )}
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* Hover tooltip card */}
      {hoveredCiv && tooltip && (
        <div
          className="pointer-events-none absolute z-20 w-56"
          style={{
            left: tooltip.x + 14,
            top: tooltip.y - 10,
            transform: tooltip.x > 650 ? "translateX(-110%)" : "translateX(0)",
          }}
        >
          <div
            className="rounded-xl border bg-slate-900/95 p-3 shadow-2xl backdrop-blur-sm"
            style={{ borderColor: hoveredCiv.color + "80" }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xl">{hoveredCiv.emblem}</span>
              <span className="font-serif text-sm font-semibold text-white leading-tight">{hoveredCiv.name}</span>
            </div>
            <p className="text-[11px] font-medium mb-1" style={{ color: hoveredCiv.color }}>
              {hoveredCiv.timespan}
            </p>
            <p className="text-[11px] text-slate-400 mb-2">{hoveredCiv.region}</p>
            <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">{hoveredCiv.tagline}</p>
            <p className="mt-2 text-[10px] font-semibold text-slate-500">Click to explore →</p>
          </div>
        </div>
      )}
    </div>
  );
}
