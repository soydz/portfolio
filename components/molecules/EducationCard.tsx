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
    <article className="grid gap-3 p-5 transition-colors hover:bg-tertiary/20 sm:p-6 md:grid-cols-[150px_minmax(0,1fr)] md:gap-6">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs tracking-wide text-primary">{dates}</span>
        <span className="font-mono text-[13px] leading-snug text-txt-main/80">{institution}</span>
      </div>

      <div className="min-w-0">
        <h3 className="text-pretty font-sans text-base font-semibold text-txt-title">
          {degree}
        </h3>
        <p className="mt-2 max-w-prose text-pretty font-sans text-sm leading-relaxed text-txt-main/85">
          {description}
        </p>
      </div>
    </article>
  );
}
