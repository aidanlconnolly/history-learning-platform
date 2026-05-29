import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Civilization, JourneySection } from "../data/types";
import { checkpointOf } from "../lib/civ";
import { civProgress } from "../lib/progress";
import { useProgressStore } from "../hooks/ProgressContext";
import WikiImage from "./WikiImage";
import ProgressBar from "./ProgressBar";
import NarrativeView from "./sections/NarrativeView";
import FiguresView from "./sections/FiguresView";
import ConflictsView from "./sections/ConflictsView";
import AchievementsView from "./sections/AchievementsView";
import QuizView from "./sections/QuizView";

const typeIcon: Record<JourneySection["type"], string> = {
  narrative: "📖",
  figures: "👤",
  conflicts: "⚔️",
  achievements: "💡",
  quiz: "🎯",
};

export default function JourneyPlayer({ civ }: { civ: Civilization }) {
  const { state, markSectionComplete, recordCheckpoint } = useProgressStore();
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = civ.sections;
  const section = sections[activeIndex];
  const done = useMemo(
    () => new Set(civProgress(state, civ.id).sectionsDone),
    [state, civ.id]
  );
  const checkpoint = checkpointOf(civ);

  // Reading a non-quiz section completes it; quizzes complete on answering.
  useEffect(() => {
    if (section.type !== "quiz") markSectionComplete(civ.id, section.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section.id, section.type, civ.id, markSectionComplete]);

  const isQuizPending = section.type === "quiz" && !done.has(section.id);
  const isLast = activeIndex === sections.length - 1;
  const completedCount = sections.filter((s) => done.has(s.id)).length;
  const pct = Math.round((completedCount / sections.length) * 100);

  function handleQuizComplete(score: number, total: number) {
    markSectionComplete(civ.id, section.id);
    if (section.type === "quiz" && section.id === checkpoint?.id) {
      recordCheckpoint(civ.id, score, total);
    }
  }

  return (
    <div className="space-y-6">
      <Link to="/" className="inline-block text-sm text-sky-400 hover:text-sky-300">
        ← All civilizations
      </Link>

      {/* Hero header */}
      <header className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/60">
        <WikiImage image={civ.hero} accent={civ.color} emblem={civ.emblem} rounded={false} ratioClassName="aspect-[21/9]" />
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-3xl">{civ.emblem}</span>
            <h1 className="font-serif text-3xl font-bold text-white">{civ.name}</h1>
          </div>
          <p className="mt-1 text-sm font-medium" style={{ color: civ.color }}>
            {civ.timespan} · {civ.region}
          </p>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-200">{civ.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {civ.facts.map((f) => (
              <span
                key={f.label}
                className="rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-1.5 text-xs"
              >
                <span className="text-slate-400">{f.label}: </span>
                <span className="font-medium text-slate-100">{f.value}</span>
              </span>
            ))}
          </div>

          <div className="mt-5 max-w-md">
            <div className="mb-1 flex justify-between text-xs text-slate-400">
              <span>Journey progress</span>
              <span>{pct}%</span>
            </div>
            <ProgressBar value={pct} color={civ.color} />
          </div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        {/* Table of contents */}
        <nav className="lg:sticky lg:top-20 lg:self-start">
          <ol className="space-y-1">
            {sections.map((s, i) => {
              const isDone = done.has(s.id);
              const active = i === activeIndex;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => setActiveIndex(i)}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      active ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <span className="text-base">{s.icon ?? typeIcon[s.type]}</span>
                    <span className="flex-1">{s.title}</span>
                    {isDone && <span className="text-emerald-400">✓</span>}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Active section */}
        <section className="min-w-0">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
            <span>
              Section {activeIndex + 1} of {sections.length}
            </span>
          </div>
          <h2 className="mb-4 flex items-center gap-2 font-serif text-2xl font-semibold text-white">
            <span>{section.icon ?? typeIcon[section.type]}</span>
            {section.title}
          </h2>

          {section.type === "narrative" && (
            <NarrativeView section={section} accent={civ.color} emblem={civ.emblem} />
          )}
          {section.type === "figures" && (
            <FiguresView section={section} accent={civ.color} emblem={civ.emblem} />
          )}
          {section.type === "conflicts" && (
            <ConflictsView section={section} accent={civ.color} emblem={civ.emblem} />
          )}
          {section.type === "achievements" && (
            <AchievementsView section={section} accent={civ.color} />
          )}
          {section.type === "quiz" && (
            <QuizView section={section} accent={civ.color} onComplete={handleQuizComplete} />
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-5">
            <button
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              disabled={activeIndex === 0}
              className="rounded-md border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 disabled:opacity-40"
            >
              ← Previous
            </button>

            {isLast ? (
              <Link
                to="/progress"
                className="rounded-md px-5 py-2 text-sm font-medium text-white"
                style={{ backgroundColor: civ.color }}
              >
                Finish journey →
              </Link>
            ) : (
              <button
                onClick={() => setActiveIndex((i) => Math.min(sections.length - 1, i + 1))}
                disabled={isQuizPending}
                className="rounded-md px-5 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
                style={{ backgroundColor: civ.color }}
                title={isQuizPending ? "Answer the quiz to continue" : undefined}
              >
                Continue →
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
