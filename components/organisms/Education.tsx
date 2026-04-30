import { GraduationCap } from "lucide-react";
import { EducationCard, EducationCardProps } from "../molecules";

interface EducationProps {
  title: string;
  cards: EducationCardProps[];
}

export function Education({ title, cards }: Readonly<EducationProps>) {
  return (
    <section>
      <div className="flex flex-row gap-2 items-center">
        <GraduationCap className="text-primary" />
        <h2 className="text-txt-title font-mono font-semibold py-4">{title}</h2>
      </div>
      <div className="flex flex-col gap-6 bg-neutral">
        {cards.map((card) => (
          <EducationCard
            key={card.degree}
            institution={card.institution}
            dates={card.dates}
            degree={card.degree}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
