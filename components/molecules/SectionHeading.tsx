import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
}

// Encabezado único para todas las secciones de la página: icono, label
// monoespaciado y una regla que ordena el ritmo vertical.
export function SectionHeading({ icon: Icon, title }: Readonly<SectionHeadingProps>) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" strokeWidth={1.75} />
      <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-txt-title">
        {title}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-tertiary" />
      <span aria-hidden="true" className="font-mono text-xs text-primary/40">{"//"}</span>
    </div>
  );
}
