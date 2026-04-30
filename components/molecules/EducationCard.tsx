import { Separator } from "../atoms";

export interface EducationCardProps {
  institution: string;
  dates: string;
  degree: string;
  description: string;
}

export function EducationCard({
  institution,
  dates,
  degree,
  description,
}: Readonly<EducationCardProps>) {
  return (
    <article className="relative group transition-all duration-300">
      <div className="absolute right-3 top-2">
        <div className="w-2 h-2 rounded-full bg-gray-800 group-hover:bg-[#FF5C4F]" />
      </div>

      <div className="flex flex-col gap-4 p-4 md:flex-row md:gap-0 md:items-center ">
        <div className="flex flex-col gap-2 min-w-1/5">
          <span className="text-sm text-primary font-mono tracking-tighter">{dates}</span>
          <h6 className="text-txt-main font-semibold font-mono tracking-tighter">{institution}</h6>
        </div>
        <div className="flex flex-col gap-2 px-4 ">
          <h4 className="font-bold text-lg uppercase tracking-tighter font-mono">{degree}</h4>
          <p className="text-txt-main font-mono leading-relaxed text-sm">{description}</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-11/12">
          <Separator />
        </div>
      </div>
    </article>
  );
}
