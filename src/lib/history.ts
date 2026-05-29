import type { Era, Figure, HistEvent, Region } from "../data/types";
import { eras } from "../data/eras";
import { events } from "../data/events";
import { figures } from "../data/figures";
import { regions } from "../data/regions";

// --- Year formatting -------------------------------------------------------

/** Format a signed year as a human-readable BCE/CE string, e.g. -776 -> "776 BCE". */
export function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year} CE`;
}

/** Compact range label for an era, e.g. "800 BCE – 500 CE". */
export function formatEraRange(era: Era): string {
  return `${formatYear(era.startYear)} – ${formatYear(era.endYear)}`;
}

// --- Lookups ---------------------------------------------------------------

export function getEra(eraId: string): Era | undefined {
  return eras.find((e) => e.id === eraId);
}

export function getRegion(regionId: string): Region | undefined {
  return regions.find((r) => r.id === regionId);
}

export function getFigure(figureId: string): Figure | undefined {
  return figures.find((f) => f.id === figureId);
}

// --- Derived selectors -----------------------------------------------------

/** Events for an era, sorted chronologically. */
export function eventsForEra(eraId: string): HistEvent[] {
  return events
    .filter((e) => e.eraId === eraId)
    .sort((a, b) => a.year - b.year);
}

/** Events in a region (optionally narrowed to one era), sorted chronologically. */
export function eventsForRegion(regionId: string, eraId?: string): HistEvent[] {
  return events
    .filter((e) => e.regionId === regionId && (!eraId || e.eraId === eraId))
    .sort((a, b) => a.year - b.year);
}

export function figuresForEra(eraId: string): Figure[] {
  return figures.filter((f) => f.eraId === eraId);
}

/** Region ids that have at least one event in the given era. */
export function activeRegionIds(eraId: string): Set<string> {
  return new Set(events.filter((e) => e.eraId === eraId).map((e) => e.regionId));
}

/**
 * Map country name -> region id for every region active in the given era.
 * Used to tint and click-target map geographies (keyed on the TopoJSON
 * `properties.name`). Names are lower-cased for case-insensitive matching.
 */
export function countryRegionMap(eraId: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const regionId of activeRegionIds(eraId)) {
    const region = getRegion(regionId);
    if (!region) continue;
    for (const country of region.countries) map.set(country.toLowerCase(), regionId);
  }
  return map;
}

/** Total number of events (used as the denominator for "explored" progress). */
export function totalEventCount(): number {
  return events.length;
}
