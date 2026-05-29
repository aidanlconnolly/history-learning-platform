import { useState } from "react";
import { eras } from "../data/eras";
import type { HistEvent } from "../data/types";
import { eventsForEra, formatEraRange, getEra } from "../lib/history";
import { useProgressStore } from "../hooks/ProgressContext";
import Timeline from "../components/Timeline";
import EventCard from "../components/EventCard";
import EventDetail from "../components/EventDetail";

export default function TimelinePage() {
  const { state } = useProgressStore();
  const [selectedEraId, setSelectedEraId] = useState<string>(eras[0].id);
  const [activeEvent, setActiveEvent] = useState<HistEvent | null>(null);

  const era = getEra(selectedEraId)!;
  const events = eventsForEra(selectedEraId);
  const viewed = new Set(state.viewedEventIds);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Interactive Timeline</h1>
        <p className="mt-1 text-slate-400">
          Each band is sized by its length in years. Select an era to explore its key events.
        </p>
      </div>

      <Timeline selectedEraId={selectedEraId} onSelectEra={setSelectedEraId} />

      <div>
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="font-serif text-2xl font-semibold text-white">{era.name}</h2>
          <span className="text-sm font-medium" style={{ color: era.color }}>
            {formatEraRange(era)}
          </span>
        </div>
        <p className="mt-2 max-w-3xl text-slate-300">{era.blurb}</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>

      {activeEvent && (
        <EventDetail
          event={activeEvent}
          accent={getEra(activeEvent.eraId)?.color ?? era.color}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </div>
  );
}
