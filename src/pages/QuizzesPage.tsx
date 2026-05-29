import { useState } from "react";
import { eras } from "../data/eras";
import { quizzes } from "../data/quizzes";
import { getEra } from "../lib/history";
import { bestScoreForEra } from "../lib/progress";
import { useProgressStore } from "../hooks/ProgressContext";
import Quiz from "../components/Quiz";
import QuizResult from "../components/QuizResult";

function questionsForEra(eraId: string) {
  return quizzes.filter((q) => q.eraId === eraId);
}

export default function QuizzesPage() {
  const { state, recordQuizAttempt } = useProgressStore();
  const [eraId, setEraId] = useState<string | null>(null);
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);
  const [attemptKey, setAttemptKey] = useState(0); // bump to remount Quiz on retry

  // Era picker
  if (!eraId) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold text-white">Quizzes</h1>
          <p className="mt-1 text-slate-400">Choose an era to test your knowledge.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eras.map((era) => {
            const count = questionsForEra(era.id).length;
            const best = bestScoreForEra(state.attempts, era.id);
            return (
              <button
                key={era.id}
                onClick={() => {
                  setEraId(era.id);
                  setResult(null);
                  setAttemptKey((k) => k + 1);
                }}
                className="rounded-xl border border-slate-700 bg-slate-800/60 p-5 text-left transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: era.color }}
                />
                <h2 className="mt-2 font-semibold text-white">{era.name}</h2>
                <p className="mt-1 text-sm text-slate-400">{count} questions</p>
                {best !== null && (
                  <p className="mt-2 text-xs font-medium text-emerald-400">
                    Best: {Math.round(best * 100)}%
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const era = getEra(eraId)!;
  const questions = questionsForEra(eraId);

  return (
    <div className="space-y-5">
      <button
        onClick={() => {
          setEraId(null);
          setResult(null);
        }}
        className="text-sm text-sky-400 hover:text-sky-300"
      >
        ← All eras
      </button>
      <h1 className="font-serif text-2xl font-bold text-white">{era.name} Quiz</h1>

      {result ? (
        <QuizResult
          score={result.score}
          total={result.total}
          accent={era.color}
          onRetry={() => {
            setResult(null);
            setAttemptKey((k) => k + 1);
          }}
          onBack={() => {
            setEraId(null);
            setResult(null);
          }}
        />
      ) : (
        <Quiz
          key={attemptKey}
          questions={questions}
          accent={era.color}
          onComplete={(score, total) => {
            recordQuizAttempt(eraId, score, total);
            setResult({ score, total });
          }}
        />
      )}
    </div>
  );
}
