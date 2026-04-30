import { ProgressBar } from "../atoms";

interface MetricSkill {
  label: string;
  percentage: number;
}

export interface SkillMetricProps {
  label: string;
  skills: MetricSkill[];
}

// las barras de llenado usando porcentaje
export function SkillMetric({ label, skills }: Readonly<SkillMetricProps>) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <h3 className="uppercase text-txt-main font-semibold font-mono">{label}</h3>
        <hr className="text-txt-main/50" />
      </div>
      <div>
        {skills.map((skill) => (
          <div key={skill.label} className="py-1.5">
            <div className="flex justify-between">
              <span>{skill.label}</span>
              <span className="text-txt-accent">{skill.percentage} %</span>
            </div>
            <ProgressBar percentage={skill.percentage}  />
          </div>
        ))}
      </div>
    </div>
  );
}
