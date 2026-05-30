import type { MilestonesSection, Milestone } from "../../data/types";

const typeStyle: Record<NonNullable<Milestone["type"]>, { dot: string; badge: string; label: string }> = {
  rise:       { dot: "bg-amber-400",   badge: "bg-amber-900/40 text-amber-300 border-amber-700/50",       label: "Rise"       },
  conquest:   { dot: "bg-orange-400",  badge: "bg-orange-900/40 text-orange-300 border-orange-700/50",    label: "Conquest"   },
  war:        { dot: "bg-red-400",     badge: "bg-red-900/40 text-red-300 border-red-700/50",             label: "War"        },
  cultural:   { dot: "bg-sky-400",     badge: "bg-sky-900/40 text-sky-300 border-sky-700/50",             label: "Culture"    },
  innovation: { dot: "bg-emerald-400", badge: "bg-emerald-900/40 text-emerald-300 border-emerald-700/50", label: "Innovation" },
  fall:       { dot: "bg-slate-400",   badge: "bg-slate-800/60 text-slate-400 border-slate-600/50",       label: "Decline"    },
};

const defaultStyle = { dot: "bg-violet-400", badge: "bg-violet-900/40 text-violet-300 border-violet-700/50", label: "Event" };

type Props = { section: MilestonesSection; accent: string };

export default function MilestonesView({ section, accent }: Props) {
  return (
    <div>
      {section.intro && (
        <p className="mb-8 text-slate-300 leading-relaxed">{section.intro}</p>
      )}

      <div className="relative">
        {/* Vertical spine */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-0.5"
          style={{ background: `linear-gradient(to bottom, ${accent}80, ${accent}20)` }}
        />

        <ol className="space-y-0">
          {section.milestones.map((m, idx) => {
            const style = m.type ? typeStyle[m.type] : defaultStyle;
            const isLast = idx === section.milestones.length - 1;
            return (
              <li key={idx} className={`relative flex gap-5 ${isLast ? "pb-0" : "pb-6"}`}>
                {/* Timeline dot */}
                <div className="relative z-10 mt-1 flex-shrink-0">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${style.dot}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-slate-400 tabular-nums">
                      {m.year}
                    </span>
                    {m.type && (
                      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${style.badge}`}>
                        {m.icon && <span className="mr-1">{m.icon}</span>}
                        {style.label}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-white leading-snug">
                    {m.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <p className="mt-8 text-xs text-slate-500 border-t border-slate-800 pt-4">
        {section.milestones.length} key moments · Continue below to explore each era in depth
      </p>
    </div>
  );
}
