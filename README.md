# Chronicle — History Learning Platform

An interactive platform for learning world history through deep, guided
**civilization journeys**. Built with React 18 + TypeScript + Vite + Tailwind.
All written content is static, typed data; images are pulled at runtime from
Wikipedia (no API key or backend required).

## What it is

Fourteen great civilizations — Mesopotamia, Egypt, Greece, Persia, Rome, Imperial
China, Ancient India, the Maya, the Aztec, the Inca, the Mongols, the Ottomans,
the Kingdom of France and the British Empire — each presented as a multi-section,
interactive learning journey:

- **Narrative sections** on origins, society & government, daily life, decline and
  legacy, with key-term flip-cards and "what made them different" callouts.
- **Figures** — illustrated profiles of the rulers, thinkers and conquerors.
- **Wars & conquests** — expandable cards with the conflict, outcome and an image.
- **Inventions & achievements** — what each civilization gave the world.
- **Checkpoint quizzes** — multiple-choice with instant feedback; scores recorded.

Progress (sections explored, per-civilization completion, best quiz scores and a
daily streak) is tracked in `localStorage`. An **Atlas** map tints each
civilization's heartland and links straight into its journey.

## Images

Images resolve at runtime via the public Wikipedia REST summary API
(`/page/summary/<title>`), cached per session. Each `ImageRef` stores a
`wikiTitle`; `WikiImage` fetches the article's lead image and falls back to a
themed placeholder if offline or unavailable. The map geography uses the
`world-atlas` TopoJSON CDN. Both require network access; everything else is
fully offline.

## Running locally

`node` lives at `/opt/homebrew/bin/node` in this workspace.

```bash
PATH=/opt/homebrew/bin:$PATH npm install
PATH=/opt/homebrew/bin:$PATH npm run dev     # http://localhost:5750
PATH=/opt/homebrew/bin:$PATH npm run build   # tsc + vite build -> dist/
PATH=/opt/homebrew/bin:$PATH npm run lint
```

## Project structure

- `src/data/types.ts` — `Civilization` + the discriminated `JourneySection` union.
- `src/data/civilizations/` — one file per civilization (the content), plus `index.ts`.
- `src/lib/` — `civ.ts` (lookups, map tinting) and `progress.ts` (streak/completion math).
- `src/hooks/` — `useProgress` (localStorage store) + `ProgressContext` (shared across routes).
- `src/components/` — `JourneyPlayer`, `WikiImage`, `CivCard`, and the section renderers in `sections/`.
- `src/pages/` — `HomePage` (gallery), `CivilizationPage` (journey), `MapPage` (Atlas), `ProgressPage`.

## Adding a civilization

Create `src/data/civilizations/<id>.ts` exporting a `Civilization`, then import it
in `index.ts`. Set `modernCountries` to country names matching the world-atlas
TopoJSON so the Atlas can highlight it, and give each section a unique `id`.

## Deployment

Vite SPA → `dist/` → Vercel. `vercel.json` rewrites all routes to `/index.html`
for client-side routing.
