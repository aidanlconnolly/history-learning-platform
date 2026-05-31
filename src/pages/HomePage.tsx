import { Link } from "react-router-dom";
import { civsByChronology } from "../lib/civ";
import { civCompletionPct } from "../lib/progress";
import { useProgressStore } from "../hooks/ProgressContext";
import type { Civilization } from "../data/types";
import ProgressBar from "../components/ProgressBar";
import WikiImage from "../components/WikiImage";

type Era = {
  name: string;
  subtitle: string;
  icon: string;
  filter: (c: Civilization) => boolean;
};

const ERAS: Era[] = [
  { name: "Ancient World",           subtitle: "Before 800 BCE",   icon: "🌅", filter: (c) => c.startYear < -800 },
  { name: "Classical Era",           subtitle: "800 BCE – 500 CE", icon: "🏛️", filter: (c) => c.startYear >= -800 && c.startYear < 0 },
  { name: "Medieval & Imperial Age", subtitle: "500 – 1500 CE",    icon: "⚔️", filter: (c) => c.startYear >= 0 && c.startYear < 1500 },
  { name: "Modern Empires",          subtitle: "1500 CE onwards",  icon: "🌍", filter: (c) => c.startYear >= 1500 },
];

function formatYear(year: number): string {
  return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
}

function CivCard({ civ, pct }: { civ: Civilization; pct: number }) {
  return (
    <Link
      to={`/civilization/${civ.id}`}
      className="group block rounded-2xl overflow-hidden border border-slate-700/80 hover:border-slate-500 transition-all duration-200 shadow-lg hover:shadow-2xl"
    >
      {/* Hero image with overlay */}
      <div className="relative">
        {/* Image — strip caption so it doesn't render below */}
        <WikiImage
          image={{ wikiTitle: civ.hero.wikiTitle, alt: civ.hero.alt }}
          accent={civ.color}
          emblem={civ.emblem}
          rounded={false}
          ratioClassName="aspect-[16/7]"
        />

        {/* Multi-stop gradient: transparent top → heavy dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent pointer-events-none" />

        {/* Faint color tint at top edge */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: `linear-gradient(180deg, ${civ.color} 0%, transparent 40%)` }}
        />

        {/* Progress badge top-right */}
        {pct > 0 && (
          <div className="absolute top-3 right-3">
            {pct === 100 ? (
              <span className="flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
                ✓ Complete
              </span>
            ) : (
              <span
                className="flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur-sm"
                style={{ borderColor: `${civ.color}60`, backgroundColor: `${civ.color}20`, color: civ.color }}
              >
                {pct}% explored
              </span>
            )}
          </div>
        )}

        {/* Name + timespan over image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end gap-3">
            <span className="text-3xl drop-shadow-lg leading-none">{civ.emblem}</span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white leading-tight drop-shadow-lg group-hover:text-white">
                {civ.name}
              </h3>
              <p className="mt-0.5 text-xs font-semibold tracking-wide drop-shadow" style={{ color: civ.color }}>
                {civ.timespan} · {civ.region}
              </p>
            </div>
          </div>
        </div>

        {/* Colored bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: civ.color }} />
      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-900/90">
        <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">{civ.tagline}</p>

        <div className="mt-3 flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <ProgressBar value={pct} color={civ.color} />
            <p className="mt-1 text-[11px] text-slate-500 tabular-nums">
              {pct > 0 && pct < 100 ? `${pct}% · ` : ""}{civ.sections.length} lessons
            </p>
          </div>
          <p
            className="shrink-0 text-sm font-semibold group-hover:underline"
            style={{ color: civ.color }}
          >
            {pct === 0 ? "Begin →" : pct === 100 ? "Review →" : "Continue →"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const { state } = useProgressStore();
  const civs = civsByChronology();

  const totalCivs = civs.length;
  const completedCivs = civs.filter(
    (c) => civCompletionPct(state, c.id, c.sections.length) === 100
  ).length;

  return (
    <div className="space-y-12">
      {/* Hero header */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-700">
        {/* Background: tiny thumbnails of the first 3 civs blurred together */}
        <div className="absolute inset-0 grid grid-cols-3 opacity-20">
          {civs.slice(0, 3).map((c) => (
            <WikiImage
              key={c.id}
              image={{ wikiTitle: c.hero.wikiTitle, alt: c.hero.alt }}
              accent={c.color}
              emblem={c.emblem}
              rounded={false}
              ratioClassName="h-full"
              className="h-full [&>div]:h-full"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-800/60" />

        <div className="relative z-10 p-8 sm:p-12">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            The great civilizations.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
            {totalCivs} empires in chronological order — from the first cities of Mesopotamia
            to the British Empire. Each is a guided journey through rise, rulers, wars and legacy.
          </p>
          {completedCivs > 0 && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              ✓ {completedCivs} of {totalCivs} civilizations completed
            </p>
          )}
        </div>
      </section>

      {/* Learning path — era by era */}
      {ERAS.map((era) => {
        const eraCivs = civs.filter(era.filter);
        if (eraCivs.length === 0) return null;

        return (
          <section key={era.name}>
            {/* Era header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{era.icon}</span>
              <div>
                <h2 className="font-serif text-xl font-bold text-white">{era.name}</h2>
                <p className="text-xs text-slate-500 font-medium tracking-wide">{era.subtitle}</p>
              </div>
              <div className="flex-1 h-px bg-slate-700 ml-2" />
            </div>

            {/* Roadmap path */}
            <div className="relative pl-12">
              {/* Spine */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-700/80" />

              <ol className="space-y-6">
                {eraCivs.map((civ) => {
                  const pct = civCompletionPct(state, civ.id, civ.sections.length);
                  return (
                    <li key={civ.id} className="relative">
                      {/* Node on spine */}
                      <div className="absolute -left-8 top-0 flex flex-col items-center z-10">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 bg-slate-950 transition-all"
                          style={{
                            borderColor: pct > 0 ? civ.color : "#475569",
                            boxShadow: pct > 0 ? `0 0 16px ${civ.color}50` : "none",
                          }}
                        >
                          {pct === 100 ? (
                            <span style={{ color: civ.color }}>✓</span>
                          ) : (
                            <span className="text-base leading-none">{civ.emblem}</span>
                          )}
                        </div>
                        <div className="mt-1.5 text-[10px] font-mono text-slate-500 whitespace-nowrap">
                          {formatYear(civ.startYear)}
                        </div>
                      </div>

                      {/* Visual card */}
                      <CivCard civ={civ} pct={pct} />
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>
        );
      })}
    </div>
  );
}
