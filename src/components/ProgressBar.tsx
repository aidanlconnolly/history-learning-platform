type Props = {
  value: number; // 0–100
  color?: string;
  className?: string;
};

export default function ProgressBar({ value, color = "#38bdf8", className = "" }: Props) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-slate-700 ${className}`}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${clamped}%`, backgroundColor: color }}
      />
    </div>
  );
}
