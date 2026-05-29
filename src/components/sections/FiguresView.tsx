import type { FiguresSection } from "../../data/types";
import WikiImage from "../WikiImage";

type Props = { section: FiguresSection; accent: string; emblem: string };

export default function FiguresView({ section, accent, emblem }: Props) {
  return (
    <div className="space-y-5">
      {section.intro && <p className="leading-relaxed text-slate-200">{section.intro}</p>}
      <div className="grid gap-5 sm:grid-cols-2">
        {section.figures.map((f) => (
          <article
            key={f.name}
            className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60"
          >
            {f.image && (
              <WikiImage
                image={f.image}
                accent={accent}
                emblem={emblem}
                rounded={false}
                ratioClassName="aspect-[4/3]"
              />
            )}
            <div className="p-4">
              <h3 className="font-serif text-lg font-semibold text-white">{f.name}</h3>
              <p className="text-sm font-medium" style={{ color: accent }}>
                {f.role} · {f.lived}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
