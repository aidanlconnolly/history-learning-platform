import { useEffect, useState } from "react";
import type { QuizSection } from "../../data/types";
import ProgressBar from "../ProgressBar";

type Props = {
  section: QuizSection;
  accent: string;
  /** Called once when every question has been answered. */
  onComplete: (score: number, total: number) => void;
};

export default function QuizView({ section, accent, onComplete }: Props) {
  const total = section.questions.length;
  // answers[i] = chosen option index, or undefined if unanswered
  const [answers, setAnswers] = useState<(number | undefined)[]>(() =>
    new Array(total).fill(undefined)
  );

  const answeredCount = answers.filter((a) => a !== undefined).length;
  const score = answers.reduce<number>(
    (sum, a, i) => (a === section.questions[i].correct ? sum + 1 : sum),
    0
  );
  const done = answeredCount === total;

  // Report completion exactly once, when the last answer lands.
  const [reported, setReported] = useState(false);
  useEffect(() => {
    if (done && !reported) {
      setReported(true);
      onComplete(score, total);
    }
  }, [done, reported, score, total, onComplete]);

  function choose(qi: number, oi: number) {
    setAnswers((prev) => {
      if (prev[qi] !== undefined) return prev; // lock after first answer
      const next = [...prev];
      next[qi] = oi;
      return next;
    });
  }

  function optionClasses(qi: number, oi: number): string {
    const chosen = answers[qi];
    if (chosen === undefined) return "border-slate-600 hover:border-slate-400 hover:bg-slate-700/60";
    const correct = section.questions[qi].correct;
    if (oi === correct) return "border-emerald-500 bg-emerald-500/15 text-emerald-100";
    if (oi === chosen) return "border-rose-500 bg-rose-500/15 text-rose-100";
    return "border-slate-700 opacity-60";
  }

  return (
    <div className="space-y-5">
      {section.intro && <p className="leading-relaxed text-slate-200">{section.intro}</p>}

      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>
          {answeredCount} / {total} answered
        </span>
        <span>
          Score: {score}/{total}
        </span>
      </div>
      <ProgressBar value={(answeredCount / total) * 100} color={accent} />

      <ol className="space-y-5">
        {section.questions.map((q, qi) => {
          const chosen = answers[qi];
          return (
            <li key={qi} className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
              <p className="font-medium text-white">
                {qi + 1}. {q.q}
              </p>
              <div className="mt-3 space-y-2">
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => choose(qi, oi)}
                    disabled={chosen !== undefined}
                    className={`w-full rounded-lg border px-3 py-2 text-left text-sm text-slate-100 transition-colors ${optionClasses(
                      qi,
                      oi
                    )}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {chosen !== undefined && q.fb && (
                <p className="mt-3 rounded-lg bg-slate-900/60 p-3 text-sm text-slate-300">
                  <span className="font-semibold" style={{ color: accent }}>
                    {chosen === q.correct ? "Correct. " : "Not quite. "}
                  </span>
                  {q.fb}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {done && (
        <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-center">
          <p className="font-serif text-2xl font-bold text-white">
            {score}/{total}
          </p>
          <p className="text-sm text-slate-400">
            {section.checkpoint ? "Checkpoint complete" : "Section quiz complete"} ·{" "}
            {Math.round((score / total) * 100)}%
          </p>
        </div>
      )}
    </div>
  );
}
