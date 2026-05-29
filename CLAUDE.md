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
- `JourneySection` is a **discriminated union** on `type`: `narrative | figures | conflicts | achievements | quiz`. `JourneyPlayer.tsx` switches on `section.type` to pick a renderer from `src/components/sections/`. Adding a new section kind means: add a variant to the union, add a renderer, and add a case to that switch.
- The journey's final quiz is the **checkpoint**: `checkpointOf()` (`lib/civ.ts`) returns the quiz flagged `checkpoint: true`, else the last quiz. Only the checkpoint's score is recorded as mastery.

To add a civilization: copy an existing file (e.g. `rome.ts`), give every section a unique `id`, set `modernCountries` to country names that match the world-atlas TopoJSON (see Atlas gotcha), and register it in `index.ts`.

## Progress: one shared localStorage store

- `useProgress()` (`hooks/useProgress.ts`) is the single owning hook — loads from `localStorage` (key `history-platform.progress.v2`) on mount, exposes granular updaters, and persists on every change. It is lifted into `ProgressContext` and consumed everywhere via `useProgressStore()`, so all routes share one live store. Don't call `useProgress()` directly in components.
- All progress math is pure and lives in `lib/progress.ts` (streak bumping, completion %, averages) — components and the hook stay logic-free.
- **How completion is recorded** (in `JourneyPlayer.tsx`): non-quiz sections are marked complete on view via an effect keyed on the active section; quiz sections are marked complete only once every question is answered (`QuizView` calls back `onComplete`), and the checkpoint additionally calls `recordCheckpoint` to store the best score. "Continue" is gated/disabled while the current section is an unanswered quiz.
- Bumping the `STORAGE_KEY` version (currently `v2`) is how you intentionally discard incompatible saved state.

## Images: runtime Wikipedia fetch, never bundled

`ImageRef` stores only a `wikiTitle`. `WikiImage.tsx` resolves the article's lead image at runtime from the Wikipedia REST summary API (`/api/rest_v1/page/summary/<title>`, CORS-enabled), with a module-level promise cache so each title is fetched once per session and a themed gradient placeholder on failure/offline. So image quality depends on choosing a `wikiTitle` whose article has a good lead image — there are no local image assets to manage.

## Atlas map gotcha: matching is by country name, and order matters

`MapPage` renders `WorldMap` (`react-simple-maps` + the `world-atlas` countries-110m TopoJSON from a CDN). Geographies are matched to civilizations **by country name** (`geo.properties.name`, lowercased) — *not* ISO codes — against `countryCivMap()` in `lib/civ.ts`. Two consequences:

- `modernCountries` entries must exactly match Natural Earth names (e.g. `"United States of America"`, not `"USA"`).
- When several civilizations list the same country, **the first one in the `civilizations` array wins** the tint. This is why, e.g., `rome.ts` deliberately omits `United Kingdom`/`France` (so Britain and France claim their homelands) and Greece omits Italy. Edit `modernCountries` / array order together when tuning the map.

## Routing & deployment

- Routes are declared in `App.tsx` (react-router): `/`, `/civilization/:id`, `/atlas`, `/progress`, with a catch-all to Home. `CivilizationPage` resolves `:id` via `getCiv()`.
- Deploys to Vercel as a static SPA (`dist/`); `vercel.json` rewrites all paths to `/index.html`. Live at `history-learning-platform.vercel.app`. Because the project folder name contains spaces, Vercel uses the linked project in `.vercel/` (`vercel link --project history-learning-platform`); deploy with `vercel --prod`.
