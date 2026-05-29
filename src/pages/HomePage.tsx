import { Link } from "react-router-dom";
import { eras } from "../data/eras";
import { totalEventCount } from "../lib/history";
import { explorationPct } from "../lib/progress";
import { useProgressStore } from "../hooks/ProgressContext";
import ProgressBar from "../components/ProgressBar";

const features = [
  {
    to: "/timeline",
    title: "Interactive Timeline",
    body: "Travel from the first cities to the modern age. Click any era to uncover the events that shaped it.",
    emoji: "📜",
  },
  {
    to: "/map",
    title: "World Map Explorer",
    body: "See where history happened. Pick an era and the map lights up the regions in play.",
    emoji: "🗺️",
  },
  {
    to: "/quizzes",
    title: "Quizzes & Progress",
    body: "Test what you've learned, build a streak, and track your mastery across every era.",
    emoji: "🎯",
  },
];

export default function HomePage() {
  const { state } = useProgressStore();
  const pct = explorationPct(state.viewedEventIds.length, totalEventCount());

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-12">
        <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
          Explore the story of the world.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Chronicle is an interactive way to learn world history — {eras.length} eras, {totalEventCount()} pivotal
          events, and the people who lived them, on a timeline and a map.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/timeline"
            className="rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white hover:bg-sky-400"
          >
            Start exploring
          </Link>
          <Link
            to="/quizzes"
            className="rounded-lg border border-slate-600 px-5 py-2.5 font-medium text-slate-200 hover:bg-slate-800"
          >
            Take a quiz
          </Link>
        </div>

        <div className="mt-8 max-w-md">
          <div className="mb-1.5 flex items-center justify-between text-sm text-slate-400">
            <span>History explored</span>
            <span>{pct}%</span>
          </div>
          <ProgressBar value={pct} />
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-3">
        {features.map((f) => (
          <Link
            key={f.to}
            to={f.to}
            className="group rounded-xl border border-slate-700 bg-slate-800/60 p-6 transition-colors hover:border-slate-500 hover:bg-slate-800"
          >
            <div className="text-3xl">{f.emoji}</div>
            <h2 className="mt-3 text-lg font-semibold text-white">{f.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{f.body}</p>
            <span className="mt-3 inline-block text-sm font-medium text-sky-400 group-hover:text-sky-300">
              Open →
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
