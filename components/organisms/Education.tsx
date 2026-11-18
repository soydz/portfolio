import { GraduationCap } from "lucide-react";
import { EducationCard, EducationCardProps, SectionHeading } from "../molecules";

interface EducationProps {
  title: string;
  cards: EducationCardProps[];
}

export function Education({ title, cards }: Readonly<EducationProps>) {
  return (
    <section>
      <SectionHeading icon={GraduationCap} title={title} />

      <div className="divide-y divide-tertiary border border-tertiary bg-neutral">
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
