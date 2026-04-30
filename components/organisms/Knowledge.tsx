import { Library } from "lucide-react";
import { KnowledgeCard, KnowledgeCardProps } from "../molecules";

interface KnowledgeProps {
  title: string;
  cards: KnowledgeCardProps[];
}

export function Knowledge({ title, cards }: Readonly<KnowledgeProps>) {
  return (
    <section className="min-w-0">
      <div className="flex flex-row items-center gap-2">
        <Library className="text-primary"/>
        <h2 className="text-txt-title font-mono font-semibold uppercase py-4">{title}</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6 ">
        {/* renderiza cada card con su contenido */}
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
