import { useState } from "react";
import type { QuizQuestion } from "../data/types";
import ProgressBar from "./ProgressBar";

type Props = {
  questions: QuizQuestion[];
  accent: string;
  onComplete: (score: number, total: number) => void;
};

export default function Quiz({ questions, accent, onComplete }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const question = questions[index];
  const revealed = selected !== null;
  const isLast = index === questions.length - 1;

  function choose(optionIndex: number) {
    if (revealed) return;
    setSelected(optionIndex);
    if (optionIndex === question.answerIndex) setScore((s) => s + 1);
  }

  function next() {
    if (isLast) {
      onComplete(score, questions.length);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function optionClasses(i: number): string {
    if (!revealed) return "border-slate-600 hover:border-slate-400 hover:bg-slate-700/60";
    if (i === question.answerIndex) return "border-emerald-500 bg-emerald-500/15 text-emerald-100";
    if (i === selected) return "border-rose-500 bg-rose-500/15 text-rose-100";
    return "border-slate-700 opacity-60";
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-6">
      <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <span>Score: {score}</span>
      </div>
      <ProgressBar value={((index + (revealed ? 1 : 0)) / questions.length) * 100} color={accent} className="mb-5" />

      <h2 className="text-lg font-medium text-white">{question.prompt}</h2>

      <div className="mt-4 space-y-2">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => choose(i)}
            disabled={revealed}
            className={`w-full rounded-lg border px-4 py-3 text-left text-slate-100 transition-colors ${optionClasses(i)}`}
          >
            {option}
          </button>
        ))}
      </div>

      {revealed && (
        <div className="mt-5 rounded-lg bg-slate-900/70 p-4">
          <p className="text-sm font-semibold" style={{ color: accent }}>
            {selected === question.answerIndex ? "Correct!" : "Not quite."}
          </p>
          <p className="mt-1 text-sm text-slate-300">{question.explanation}</p>
          <button
            onClick={next}
            className="mt-4 rounded-md px-4 py-2 text-sm font-medium text-white"
            style={{ backgroundColor: accent }}
          >
            {isLast ? "See results" : "Next question"}
          </button>
        </div>
      )}
    </div>
  );
}
