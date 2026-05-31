# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Chronicle is a React 18 + TS + Vite + Tailwind SPA for learning world history as interactive, per-civilization "journeys". There is no backend and no API key: written content is static typed data, and images are fetched at runtime from Wikipedia. (A workspace-level `CLAUDE.md` one directory up covers conventions shared across all projects here.)

## Commands

`node` is at `/opt/homebrew/bin/node`, not on `PATH` — prefix every npm command:

```bash
PATH=/opt/homebrew/bin:$PATH npm install
PATH=/opt/homebrew/bin:$PATH npm run dev      # Vite dev server on http://localhost:5750
PATH=/opt/homebrew/bin:$PATH npm run build    # tsc (typecheck) + vite build -> dist/
PATH=/opt/homebrew/bin:$PATH npm run lint     # eslint, --max-warnings 0 (warnings fail)
```

There is no test suite. `npm run build` is the real correctness gate — it runs `tsc` under strict mode (`noUnusedLocals`/`noUnusedParameters`: prefix intentionally-unused identifiers with `_`). Lint runs at zero-tolerance for warnings; the `react-refresh/only-export-components` rule is suppressed with an inline disable where `ProgressContext.tsx` exports both a component and the `useProgressStore` hook.

## Content is data: the JourneySection model

The whole app is driven by typed content in `src/data/`. Understanding `types.ts` is the key to everything else.

- A `Civilization` (header metadata + an ordered `sections[]`) is the unit of content. Each lives in its own file under `src/data/civilizations/` and **must be registered in `src/data/civilizations/index.ts`** (import + add to the `civilizations` array) to appear anywhere.
- `JourneySection` is a **discriminated union** on `type`: `milestones | narrative | figures | conflicts | achievements | quiz`. `JourneyPlayer.tsx` switches on `section.type` to pick a renderer from `src/components/sections/`. Adding a new section kind means: add a variant to the union, add a renderer, and add a case to that switch.
- The journey's final quiz is the **checkpoint**: `checkpointOf()` (`lib/civ.ts`) returns the quiz flagged `checkpoint: true`, else the last quiz. Only the checkpoint's score is recorded as mastery.
- Every civilization's `sections[]` begins with a `milestones` section (id `"key-moments"`) — a timeline of 14–16 pivotal events shown via `MilestonesView`. This is the first screen users see when opening a journey.

### Adding a civilization

Copy an existing file (e.g. `rome.ts`), give every section a unique `id`, set `modernCountries` to country names that match the world-atlas TopoJSON (see Atlas gotcha), add `majorCities` pins, prepend a `key-moments` milestones section, and register in `index.ts`.

### Section types quick reference

| type | renderer | notes |
|---|---|---|
| `milestones` | `MilestonesView` | Timeline; each milestone has `year`, `title`, `description`, optional `icon` and `type` (`rise \| conquest \| war \| cultural \| innovation \| fall`) |
| `narrative` | `NarrativeView` | Intro `paragraphs`, optional `subLessons[]` (numbered deep-dive sub-sections), optional `image`, `terms` flip-cards, `callout` aside |
| `figures` | `FiguresView` | Array of `Figure` objects, each with optional `image` |
| `conflicts` | `ConflictsView` | Array of `Conflict` objects, each with optional `image` |
| `achievements` | `AchievementsView` | Grid of `Achievement` cards; section has optional `image` banner |
| `quiz` | `QuizView` | MC questions; flag `checkpoint: true` on the final quiz |

## Civilization data fields

```ts
Civilization {
  // ...metadata...
  majorCities?: CityPin[];   // rendered as dots on the Atlas map
  sections: JourneySection[];
}

CityPin { name: string; lat: number; lon: number }
```

`majorCities` coordinates are `[lat, lon]` in decimal degrees (positive = N/E). They are passed from `MapPage` → `WorldMap` and rendered via `react-simple-maps` `Marker` components, highlighted when the civilization is hovered.

### Sub-lessons within narrative sections

`NarrativeSection` supports an optional `subLessons?: SubLesson[]` array. Each `SubLesson` has a `title`, `paragraphs[]`, optional `image: ImageRef`, and optional `terms: KeyTerm[]`. `NarrativeView` renders them after the intro paragraphs as numbered, accent-left-bordered sub-sections — each with its own image, paragraphs, and term flip-cards.

Pattern used across all 15 civilizations: keep `paragraphs` as a short 1-sentence intro, then add 3 `subLessons` entries with 3 paragraphs and 2 terms each. The `subLessons` block sits immediately before the section's `terms:` array in the data file.

## Progress: one shared localStorage store

- `useProgress()` (`hooks/useProgress.ts`) is the single owning hook — loads from `localStorage` (key `history-platform.progress.v2`) on mount, exposes granular updaters, and persists on every change. It is lifted into `ProgressContext` and consumed everywhere via `useProgressStore()`, so all routes share one live store. Don't call `useProgress()` directly in components.
- All progress math is pure and lives in `lib/progress.ts` (streak bumping, completion %, averages) — components and the hook stay logic-free.
- **How completion is recorded** (in `JourneyPlayer.tsx`): non-quiz sections are marked complete on view via an effect keyed on the active section; quiz sections are marked complete only once every question is answered (`QuizView` calls back `onComplete`), and the checkpoint additionally calls `recordCheckpoint` to store the best score. "Continue" is gated/disabled while the current section is an unanswered quiz.
- Bumping the `STORAGE_KEY` version (currently `v2`) is how you intentionally discard incompatible saved state.

## Images: runtime Wikipedia fetch, never bundled

`ImageRef` stores only a `wikiTitle`. `WikiImage.tsx` resolves the article's lead image at runtime from the Wikipedia REST summary API (`/api/rest_v1/page/summary/<title>`, CORS-enabled), with a module-level promise cache so each title is fetched once per session and a themed gradient placeholder on failure/offline.

**Image reliability gotcha**: not all Wikipedia article titles return an `originalimage` or `thumbnail` via the summary API. Broad topic articles (e.g. `"Persepolis"`, `"Machu Picchu"`) often fail; specific monument/site articles (e.g. `"Apadana"`, `"Sacsayhuamán"`, `"Colosseum"`, `"Parthenon"`) reliably return photos. When an image isn't loading, switch to a more specific article title. The homepage loads all 15 hero images simultaneously — titles that work individually may fail under concurrent load; test with a hard reload.

## Atlas map

`MapPage` → `WorldMap` (`react-simple-maps` + `world-atlas` countries-110m TopoJSON from CDN).

**`WorldMap` props**: `countryCiv` (country→civ map), `civs` (full array for hover tooltip data), `onSelectCiv`, `onHoverCiv`. Hovering a country shows a floating snippet card with the civilization's emblem, name, timespan, tagline and a "click to explore" prompt. City pins from `civ.majorCities` are rendered as `<Marker>` elements and grow/label on hover.

**Country matching gotcha**: geographies are matched **by country name** (`geo.properties.name`, lowercased) — *not* ISO codes — against `countryCivMap()` in `lib/civ.ts`.
- `modernCountries` entries must exactly match Natural Earth names (e.g. `"United States of America"`, not `"USA"`).
- When several civilizations list the same country, **the first one in the `civilizations` array wins** the tint. Edit `modernCountries` / array order together when tuning the map.

## Homepage: era-grouped roadmap

`HomePage.tsx` groups civilizations into four eras by `startYear`:

| Era | Filter |
|---|---|
| Ancient World | `startYear < -800` |
| Classical Era | `-800 ≤ startYear < 0` |
| Medieval & Imperial Age | `0 ≤ startYear < 1500` |
| Modern Empires | `startYear ≥ 1500` |

Each civilization renders as a `CivCard` with a full hero photo (`WikiImage`, `aspect-[16/7]`), gradient overlay, name/timespan overlaid on the image, progress badge, and a footer with tagline + progress bar. The timeline spine and date-stamped nodes are positioned using `pl-12` padding on the list + `absolute -left-8` on each node.

## Journey player: roadmap sidebar

`JourneyPlayer.tsx` renders a sticky left sidebar (`lg:grid-cols-[240px_1fr]`) showing all sections as a vertical roadmap: numbered circles connected by lines. Completed sections show a filled circle in the civilization's accent color with ✓; the active section is an outlined circle in accent color; future sections are grey outlines. Section type is shown as a sub-label below each title.

## Routing & deployment

- Routes are declared in `App.tsx` (react-router): `/`, `/civilization/:id`, `/atlas`, `/progress`, with a catch-all to Home. `CivilizationPage` resolves `:id` via `getCiv()`.
- Deploys to Vercel as a static SPA (`dist/`); `vercel.json` rewrites all paths to `/index.html`. Live at `history-learning-platform.vercel.app`. Because the project folder name contains spaces, Vercel uses the linked project in `.vercel/` (`vercel link --project history-learning-platform`); deploy with `vercel --prod`.
