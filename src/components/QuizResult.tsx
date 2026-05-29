type Props = {
  score: number;
  total: number;
  accent: string;
  onRetry: () => void;
  onBack: () => void;
};

function message(pct: number): string {
  if (pct === 100) return "Perfect score! A true scholar of the era.";
  if (pct >= 75) return "Great work — you know this period well.";
  if (pct >= 50) return "Solid effort. A review and you'll have it.";
  return "A good start — explore the timeline and try again.";
}

export default function QuizResult({ score, total, accent, onRetry, onBack }: Props) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-8 text-center">
      <p className="text-sm uppercase tracking-wide text-slate-400">Your result</p>
      <p className="mt-2 font-serif text-5xl font-bold" style={{ color: accent }}>
        {score}/{total}
      </p>
      <p className="mt-1 text-slate-300">{pct}%</p>
      <p className="mx-auto mt-4 max-w-sm text-slate-300">{message(pct)}</p>
      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={onRetry}
          className="rounded-md px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: accent }}
        >
          Try again
        </button>
        <button
          onClick={onBack}
          className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700"
        >
          Choose another era
        </button>
      </div>
    </div>
  );
}
