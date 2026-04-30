import { LucideIcon } from "lucide-react";

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
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="uppercase text-txt-main font-semibold font-mono">{label}</h3>
        <hr className="text-txt-main/50" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div key={skill.label} className="flex flex-col items-center justify-center gap-3">
              <Icon className="size-5 text-primary" />
              <span key={skill.label} className="text-sm text-center">{skill.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
