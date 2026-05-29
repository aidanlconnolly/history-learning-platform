import { eras } from "../data/eras";
import TimelineEra from "./TimelineEra";

type Props = {
  selectedEraId: string | null;
  onSelectEra: (eraId: string) => void;
};

// Total span used to size each era segment proportionally to its duration.
const spanStart = Math.min(...eras.map((e) => e.startYear));
const spanEnd = Math.max(...eras.map((e) => e.endYear));
const totalSpan = spanEnd - spanStart;

export default function Timeline({ selectedEraId, onSelectEra }: Props) {
  return (
    <div className="timeline-scroll overflow-x-auto pb-3">
      <div className="flex min-w-[760px] gap-1.5">
        {eras.map((era) => {
          const widthPct = ((era.endYear - era.startYear) / totalSpan) * 100;
          return (
            <TimelineEra
              key={era.id}
              era={era}
              widthPct={widthPct}
              selected={selectedEraId === era.id}
              onSelect={onSelectEra}
            />
          );
        })}
      </div>
    </div>
  );
}
