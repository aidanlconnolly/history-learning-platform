import type { AchievementsSection } from "../../data/types";
import WikiImage from "../WikiImage";

type Props = { section: AchievementsSection; accent: string; emblem?: string };

export default function AchievementsView({ section, accent, emblem }: Props) {
  return (
    <div className="space-y-5">
      {section.image && (
        <WikiImage
          image={section.image}
          accent={accent}
          emblem={emblem}
          ratioClassName="aspect-[16/7]"
          rounded
        />
      )}
      {section.intro && <p className="leading-relaxed text-slate-200">{section.intro}</p>}
      <div className="grid gap-4 sm:grid-cols-2">
        {section.achievements.map((a) => (
          <article key={a.name} className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
            <span
              className="inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white"
              style={{ backgroundColor: accent }}
            >
              {a.field}
            </span>
            <h3 className="mt-2 font-semibold text-white">{a.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">{a.description}</p>
            <p className="mt-2 text-sm text-slate-400">
              <span className="font-medium text-slate-300">Legacy: </span>
              {a.legacy}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
