import { Button } from "../atoms";
import { ProjectDetailsProps } from "./ProjectDetails";
import Image from "next/image";

export interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  textBtn: string;
  onBtnClick?: () => void;
  details: ProjectDetailsProps;
}

export function PortfolioCard({
  title,
  description,
  imageUrl,
  textBtn,
  onBtnClick,
  details,
}: Readonly<PortfolioCardProps>) {
  const techPreview = details.stack.slice(0, 4).join(" / ");

  return (
    <article className="group flex h-full w-full max-w-3xl flex-col border border-tertiary bg-neutral transition-all duration-300 hover:border-primary/70 hover:shadow-[0_18px_50px_-30px_rgba(255,92,79,0.5)]">
      <div className="relative aspect-video w-full overflow-hidden border-b border-tertiary bg-tertiary/30">
        <Image
          src={imageUrl}
          alt={title}
          width={768}
          height={432}
          sizes="(max-width: 1023px) 92vw, 768px"
          className="h-full w-full object-cover object-left transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-6">
        <h3 className="text-pretty font-mono text-base font-bold uppercase tracking-tight text-primary">
          {title}
        </h3>
        <p className="text-pretty font-sans text-sm leading-relaxed text-txt-main/85">
          {description}
        </p>
        <p className="mt-1 break-words font-mono text-xs uppercase tracking-wide text-txt-main/80">
          {techPreview}
        </p>
      </div>

      <div className="flex justify-end border-t border-tertiary/60 p-4">
        {/* al onClick se le pasa la funcion, que permitira abrir el modal, con mas información*/}
        <Button variant="outline" size="sm" onClick={onBtnClick}>
          {textBtn}
        </Button>
      </div>
    </article>
  );
}
