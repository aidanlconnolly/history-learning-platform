import { useMemo, useState } from "react";
import type { HistEvent } from "../data/types";
import {
  countryRegionMap,
  eventsForEra,
  eventsForRegion,
  getEra,
  getRegion,
} from "../lib/history";
import { useProgressStore } from "../hooks/ProgressContext";
import WorldMap from "../components/WorldMap";
import MapControls from "../components/MapControls";
import EventCard from "../components/EventCard";
import EventDetail from "../components/EventDetail";

export default function MapPage() {
  const { state } = useProgressStore();
  const [selectedEraId, setSelectedEraId] = useState("classical-antiquity");
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [activeEvent, setActiveEvent] = useState<HistEvent | null>(null);

  const era = getEra(selectedEraId)!;
  const countryToRegion = useMemo(() => countryRegionMap(selectedEraId), [selectedEraId]);
  const viewed = new Set(state.viewedEventIds);

  const events = selectedRegionId
    ? eventsForRegion(selectedRegionId, selectedEraId)
    : eventsForEra(selectedEraId);
  const selectedRegion = selectedRegionId ? getRegion(selectedRegionId) : null;

  function selectEra(eraId: string) {
    setSelectedEraId(eraId);
    setSelectedRegionId(null);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">World Map Explorer</h1>
        <p className="mt-1 text-slate-400">
          Pick an era — highlighted regions had pivotal events. Click a region to filter the list.
        </p>
      </div>

      <MapControls selectedEraId={selectedEraId} onSelectEra={selectEra} />

      <WorldMap
        eraColor={era.color}
        countryToRegion={countryToRegion}
        selectedRegionId={selectedRegionId}
        onSelectRegion={setSelectedRegionId}
      />

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-serif text-xl font-semibold text-white">
            {selectedRegion ? `${era.name} · ${selectedRegion.name}` : `${era.name} · all regions`}
          </h2>
          {selectedRegion && (
            <button
              onClick={() => setSelectedRegionId(null)}
              className="text-sm text-sky-400 hover:text-sky-300"
            >
              Clear region filter
            </button>
          )}
        </div>

        {events.length === 0 ? (
          <p className="mt-4 text-slate-400">No events recorded here for this era.</p>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                accent={era.color}
                viewed={viewed.has(event.id)}
                onSelect={setActiveEvent}
              />
            ))}
          </div>
        )}
      </div>

      {activeEvent && (
        <EventDetail event={activeEvent} accent={era.color} onClose={() => setActiveEvent(null)} />
      )}
    </div>
  );
}
