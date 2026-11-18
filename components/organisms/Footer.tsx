import { Heart } from "lucide-react";

interface FooterProps {
  label: string;
  status: string;
  separator: string;
  owner: string;
}

export function Footer({
  label,
  status,
  separator,
  owner,
}: Readonly<FooterProps>) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 border-t border-tertiary pt-6 font-mono text-xs uppercase tracking-[0.16em] text-txt-main/75 sm:flex-row sm:gap-4">
      <div className="flex items-center gap-2">
        <span>{label}</span>
        <span className="text-primary">{status}</span>
      </div>

      <span aria-hidden="true" className="hidden text-tertiary sm:inline">{separator}</span>

      <span>{new Date().getFullYear()}</span>

      <span aria-hidden="true" className="hidden text-tertiary sm:inline">{separator}</span>

      <div className="flex items-center gap-2">
        <Heart className="size-3.5 text-primary/75" aria-hidden="true" />
        <span>{owner}</span>
      </div>
    </div>
  );
}
