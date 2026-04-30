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
  fileUrl?: string;
}

interface SidebarLeftProps {
  personalInfo: PersonalInformationProps;
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
    <aside className="w-full mb-20 h-full lg:w-[300] lg:sticky lg:top-0 lg:mb-0 lg:h-screen overflow-y-auto bg-neutral py-16 px-8 flex flex-col gap-6">
      <div className="grid grid-col-1 md:grid-cols-2 md:items-center lg:flex lg:flex-col lg:gap-4">
        <PersonalInformation
          avatarUrl={personalInfo.avatarUrl}
          fullName={personalInfo.fullName}
          jobTitle={personalInfo.jobTitle}
        />
        <div className="md:px-6 md:mr-14 lg:px-0 lg:mr-0 lg:w-full">
          {contactInfo.map((info) => (
            <InfoRow key={info.label} label={info.label} value={info.value} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <a href="/CV.pdf" download="CV_Duban_Zuluaga.pdf">
          <Button>{downloadCV.label}</Button>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-col gap-6">
        <div className="w-full">
          <SkillMetric label={languages.label} skills={languages.skills} />
        </div>

        <div className="w-full">
          <SkillMetric label={techStack.label} skills={techStack.skills} />
        </div>
      </div>


      <div className="">
        <ExtraSkill label={extraSkill.label} skills={extraSkill.skills} />
      </div>

      <div className="">
        <Separator />
      </div>

      <div className="flex flex-row justify-between">
        <SquareTerminal className="text-gray-600 w-5" />
        <Network className="text-gray-600 w-5" />
      </div>
    </aside>
  );
}
