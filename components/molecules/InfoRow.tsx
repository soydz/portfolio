export interface InfoRowProps {
  label: string;
  value: string;
}

export function InfoRow({ label, value }: Readonly<InfoRowProps>) {
  return (
    <div className="flex items-baseline justify-between gap-3 font-mono text-xs">
      <span className="uppercase tracking-wide text-txt-main/80">{label}</span>
      <span className="text-right text-txt-main">{value}</span>
    </div>
  );
}
