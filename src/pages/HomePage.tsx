import { civsByChronology } from "../lib/civ";
import { civCompletionPct } from "../lib/progress";
import { useProgressStore } from "../hooks/ProgressContext";
import CivCard from "../components/CivCard";

export default function HomePage() {
  const { state } = useProgressStore();
  const civs = civsByChronology();

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-10">
        <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
          The great civilizations.
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-300">
          Choose an empire and take a guided journey through its rise, its rulers, its wars, its
          inventions, and what made it unlike any other — then test what you've learned.
        </p>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-xl font-semibold text-white">
          {civs.length} civilizations to explore
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {civs.map((civ) => (
            <CivCard
              key={civ.id}
              civ={civ}
              pct={civCompletionPct(state, civ.id, civ.sections.length)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
