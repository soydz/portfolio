import { LucideIcon } from "lucide-react";
import { Separator } from "../atoms";
import { TerminalLink } from "./TerminalLink";

interface KnowledgeCardProject {
  label: string;
  url: string;
}

interface KnowledgeCardRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface KnowledgeCardProps {
  icon: LucideIcon;
  title: string;
  cardRows: KnowledgeCardRowProps[];
  footer: {
    title: string;
    proyects: KnowledgeCardProject[];
  };
}

function KnowledgeCardRow({
  icon,
  title,
  description,
}: Readonly<KnowledgeCardRowProps>) {
  const Icon = icon;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Icon className="text-primary/85 size-4" />
        <span className="text-txt-title font-mono text-sm">{title}</span>
      </div>
      <p className="text-txt-main/70 text-sm pl-6 font-mono leading-relaxed">{description}</p>
    </div>
  );
}

export function KnowledgeCard({
  icon,
  title,
  cardRows,
  footer,
}: Readonly<KnowledgeCardProps>) {
  const Icon = icon;
  return (
    <article className="flex flex-col justify-between h-full min-w-0 group relative bg-neutral border border-tertiary p-6 rounded-sm hover:border-primary transition-all duration-300 font-mono">
      <div className="min-w-0">
        {/* Decoración superior estilo terminal */}
        <div className="absolute top-2 right-3 flex gap-1">
          <div className="w-2 h-2 rounded-full bg-tertiary group-hover:bg-primary" />
          <div className="w-2 h-2 rounded-full bg-tertiary" />
        </div>

        <div className="flex flex-row items-center gap-3 mb-3">
          <div className="text-primary">
            <Icon />
          </div>
          <h3 className="font-mono font-bold uppercase text-txt-title tracking-tighter">{title}</h3>
        </div>

        <div className="flex flex-col gap-4 py-2">
          {cardRows.map((row) => (
            <KnowledgeCardRow
              key={row.title}
              icon={row.icon}
              title={row.title}
              description={row.description}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Separator />
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <h6 className="text-txt-main font-mono uppercase text-sm">{footer.title}</h6>
        <div className="flex flex-col gap-2 text-sm ">
          {footer.proyects.map((item, index) => (
            <TerminalLink key={item.label} label={item.label} url={item.url} numeration={`[${index + 1}]`} />
          ))}
        </div>
      </div>
    </article>
  );
}
