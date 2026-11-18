import { LucideIcon } from "lucide-react";
import { PanelHeading } from "../atoms";

interface ExtraSkill {
  label: string;
  icon: LucideIcon;
}

export interface ExtraSkillProps {
  label: string;
  skills: ExtraSkill[];
}

export function ExtraSkill({ label, skills }: Readonly<ExtraSkillProps>) {
  return (
    <div className="flex flex-col gap-4">
      <PanelHeading title={label} />
      <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 xl:grid-cols-1">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div key={skill.label} className="flex items-start gap-2.5">
              <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" strokeWidth={1.75} />
              <span className="text-xs leading-snug text-txt-main/85">{skill.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
