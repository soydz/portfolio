import { Heart } from "lucide-react";

interface FooterProps {
  label: string;
  status: string;
  separator: string;
  date: string;
  owner: string;
}

export function Footer({
  label,
  status,
  separator,
  date,
  owner,
}: Readonly<FooterProps>) {
  return (
    <footer className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-6 lg:mb-12">
      <div className="flex gap-2">
        <span>{label}</span>
        <span className="text-primary/75 animate-pulse">{status}</span>
      </div>

      <div className="flex gap-2">
        <span>{separator}</span>
        <span>{new Date().getFullYear()}</span>
        <span>{separator}</span>
      </div>

      <div className="flex gap-2">
        <Heart className="text-primary/75" />
        <span>{owner}</span>
      </div>
    </footer>
  );
}
