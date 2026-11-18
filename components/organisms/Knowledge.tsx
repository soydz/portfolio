import { Library } from "lucide-react";
import { KnowledgeCard, KnowledgeCardProps, SectionHeading } from "../molecules";

interface KnowledgeProps {
  title: string;
  cards: KnowledgeCardProps[];
}

export function Knowledge({ title, cards }: Readonly<KnowledgeProps>) {
  return (
    <section className="min-w-0">
      <SectionHeading icon={Library} title={title} />

      {/* 2x2 en escritorio: evita la cuarta card huérfana al final de la fila */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <KnowledgeCard
            key={card.title}
            title={card.title}
            icon={card.icon}
            cardRows={card.cardRows}
            footer={card.footer}
          />
        ))}
      </div>
    </section>
  );
}
