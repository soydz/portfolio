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
        <Icon className="size-4 shrink-0 text-primary/85" aria-hidden="true" strokeWidth={1.75} />
        <span className="font-mono text-sm text-txt-title">{title}</span>
      </div>
      <p className="pl-6 font-mono text-[13px] leading-relaxed text-txt-main/85">
        {description}
      </p>
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
    <article className="group relative flex h-full min-w-0 flex-col justify-between border border-tertiary bg-neutral p-5 font-mono transition-colors duration-300 hover:border-primary/70 sm:p-6">
      <div className="min-w-0">
        {/* Decoración superior estilo terminal */}
        <div aria-hidden="true" className="absolute right-3 top-3 flex gap-1.5">
          <span className="size-1.5 bg-tertiary transition-colors group-hover:bg-primary" />
          <span className="size-1.5 bg-tertiary" />
          <span className="size-1.5 bg-tertiary" />
        </div>

        <div className="mb-4 flex items-center gap-3 pr-10">
          <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" strokeWidth={1.75} />
          <h3 className="font-mono text-sm font-bold uppercase tracking-tight text-txt-title">
            {title}
          </h3>
        </div>

        <div className="flex flex-col gap-4 py-1">
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

      <div className="mt-5">
        <Separator />
        <div className="mt-3 flex flex-col gap-2">
          {footer.proyects.map((item, index) => (
            <TerminalLink
              key={item.label}
              label={item.label}
              url={item.url}
              numeration={`[${index + 1}]`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
