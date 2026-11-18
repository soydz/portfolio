import { PanelHeading } from "../atoms";

export interface ProficiencyItem {
  label: string;
  level: string;
  // Posición dentro de la escala. Para idiomas es CEFR (A1 → C2);
  // para el stack técnico es Familiar → Expert.
  filled: number;
}

export interface ProficiencyMetricProps {
  label: string;
  items: ProficiencyItem[];
  steps?: number;
}

export function ProficiencyMetric({ label, items, steps = 6 }: Readonly<ProficiencyMetricProps>) {
  return (
    <div className="flex flex-col gap-4">
      <PanelHeading title={label} />
      <ul className="flex flex-col gap-4">
        {items.map((item) => {
          const filled = Math.min(Math.max(item.filled, 0), steps);

          return (
            <li key={item.label}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm text-foreground">{item.label}</span>
                <span className="text-right font-mono text-[11px] uppercase tracking-[0.08em] text-txt-main/80">
                  {item.level}
                </span>
              </div>
              <div aria-hidden="true" className="mt-2 flex gap-1">
                {Array.from({ length: steps }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-1 flex-1 ${index < filled ? "bg-primary" : "bg-tertiary"}`}
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
