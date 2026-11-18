interface PanelHeadingProps {
  title: string;
}

// Etiqueta de panel usada en la sidebar para que todos los bloques
// (perfil, stacks, dependencias) compartan el mismo ritmo y remate.
export function PanelHeading({ title }: Readonly<PanelHeadingProps>) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-tertiary pb-2">
      <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-txt-main">
        {title}
      </h2>
      <span aria-hidden="true" className="size-1.5 shrink-0 bg-primary/70" />
    </div>
  );
}
