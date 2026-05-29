import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const BASE_FILL = "#334155"; // slate-700
const BASE_STROKE = "#1e293b";

type Props = {
  eraColor: string;
  countryToRegion: Map<string, string>; // lowercased country name -> region id
  selectedRegionId: string | null;
  onSelectRegion: (regionId: string | null) => void;
};

export default function WorldMap({
  eraColor,
  countryToRegion,
  selectedRegionId,
  onSelectRegion,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
      <ComposableMap
        projectionConfig={{ scale: 145 }}
        width={900}
        height={420}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup center={[10, 25]} zoom={1} maxZoom={5}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name: string = geo.properties.name ?? "";
                const regionId = countryToRegion.get(name.toLowerCase());
                const isActive = Boolean(regionId);
                const isSelected = regionId != null && regionId === selectedRegionId;

                const fill = isSelected
                  ? eraColor
                  : isActive
                  ? `${eraColor}99` // ~60% opacity tint
                  : BASE_FILL;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() =>
                      regionId && onSelectRegion(isSelected ? null : regionId)
                    }
                    style={{
                      default: {
                        fill,
                        stroke: BASE_STROKE,
                        strokeWidth: 0.4,
                        outline: "none",
                        cursor: isActive ? "pointer" : "default",
                      },
                      hover: {
                        fill: isActive ? eraColor : "#475569",
                        stroke: BASE_STROKE,
                        strokeWidth: 0.4,
                        outline: "none",
                        cursor: isActive ? "pointer" : "default",
                      },
                      pressed: { fill: eraColor, outline: "none" },
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
