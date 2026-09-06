import { Network, SquareTerminal } from "lucide-react";
import { Button, Separator } from "../atoms";
import {
  InfoRow,
  PersonalInformation,
  SkillMetric,
  ExtraSkill,
  ExtraSkillProps,
  SkillMetricProps,
  PersonalInformationProps,
  InfoRowProps,
} from "../molecules";

// props para el boton de descarga de CV
interface DownloadCVProps {
  label: string;
}

interface SidebarLeftProps {
  personalInfo: { title: string };
  contactInfo: InfoRowProps[];
  languages: SkillMetricProps;
  techStack: SkillMetricProps;
  downloadCV: DownloadCVProps;
  extraSkill: ExtraSkillProps;
}

// contiene: información personal, descarga de CV, idiomas, lenguajes de programación, capacidades adicionales.
export function SidebarLeft({
  personalInfo,
  contactInfo,
  languages,
  techStack,
  downloadCV,
  extraSkill,
}: Readonly<SidebarLeftProps>) {
  return (
    <aside className="w-full mb-20 h-full lg:w-[300] lg:sticky lg:top-0 lg:mb-0 lg:h-screen bg-neutral flex flex-col">
      {/* Header fijo: info personal + CV */}
      <div className="flex-shrink-0 px-8 py-6 mb-4 flex flex-col gap-4">
        <div className="flex flex-col lg:gap-4">
          <PersonalInformation title={personalInfo.title} />
          <div className="lg:w-full">
            {contactInfo.map((info) => (
              <InfoRow key={info.label} label={info.label} value={info.value} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <a href="/CV.pdf" download="CV_Duban_Zuluaga.pdf">
            <Button>{downloadCV.label}</Button>
          </a>
        </div>
      </div>

      {/* Body scrolleable: skills, extras */}
      <div className="flex-1 overflow-y-auto px-8 pb-4 flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <SkillMetric label={languages.label} skills={languages.skills} />
          <SkillMetric label={techStack.label} skills={techStack.skills} />
        </div>

        <ExtraSkill label={extraSkill.label} skills={extraSkill.skills} />

        <Separator />
      </div>

      {/* Icons fijos al fondo */}
      <div className="flex-shrink-0 px-8 pb-4 flex flex-row justify-between">
        <SquareTerminal className="text-gray-600 w-5" />
        <Network className="text-gray-600 w-5" />
      </div>
    </aside>
  );
}
