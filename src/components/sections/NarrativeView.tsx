import type { NarrativeSection } from "../../data/types";
import WikiImage from "../WikiImage";
import TermCard from "./TermCard";

type Props = { section: NarrativeSection; accent: string; emblem: string };

export default function NarrativeView({ section, accent, emblem }: Props) {
  return (
    <div className="space-y-5">
      {section.image && (
        <WikiImage image={section.image} accent={accent} emblem={emblem} ratioClassName="aspect-[16/9]" />
      )}

      <div className="space-y-4 leading-relaxed text-slate-200">
        {section.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {section.callout && (
        <div
          className="rounded-xl border-l-4 bg-slate-800/60 p-4"
          style={{ borderColor: accent }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: accent }}>
            {section.callout.title}
          </p>
          <p className="mt-1 text-slate-200">{section.callout.body}</p>
        </div>
      )}

      {section.terms && section.terms.length > 0 && (
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Key terms
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {section.terms.map((t) => (
              <TermCard key={t.term} term={t} accent={accent} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
