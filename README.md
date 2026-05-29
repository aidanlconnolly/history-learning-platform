# Chronicle — History Learning Platform

An interactive platform for exploring and learning world history. Built with
React 18 + TypeScript + Vite + Tailwind. All content is static, typed data — no
API key or backend required.

## Features

- **Interactive Timeline** — eras sized proportionally to their length in years;
  click an era to explore its key events.
- **World Map Explorer** — a real geographic world map (`react-simple-maps`); pick
  an era to highlight active regions, click a region to filter events.
- **Quizzes & Progress** — multiple-choice quizzes per era with explanations;
  progress (events explored, streaks, best scores) is tracked in `localStorage`.

## Running locally

`node` lives at `/opt/homebrew/bin/node` in this workspace.

```bash
PATH=/opt/homebrew/bin:$PATH npm install
PATH=/opt/homebrew/bin:$PATH npm run dev     # http://localhost:5750
PATH=/opt/homebrew/bin:$PATH npm run build   # tsc + vite build -> dist/
PATH=/opt/homebrew/bin:$PATH npm run lint
```

## Project structure

- `src/data/` — typed source of truth: `eras`, `events`, `figures`, `regions`, `quizzes`.
- `src/lib/` — pure helpers: `history.ts` (lookups, year formatting), `progress.ts` (streak/score math).
- `src/hooks/` — `useProgress` (localStorage-backed store) + `ProgressContext` (shared across routes).
- `src/components/` & `src/pages/` — UI.

## Adding content

Edit the files in `src/data/`. Each event links to an `eraId` and `regionId`;
each region lists `countries` whose names match the world-atlas TopoJSON
(`properties.name`) so the map can highlight them.

## Deployment

Vite SPA → `dist/` → Vercel. `vercel.json` rewrites all routes to `/index.html`
for client-side routing.
