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
}: Readonly<PortfolioCardProps>) {
  return (
    <article className="border border-tertiary bg-neutral w-full max-w-2xl h-full hover:border-primary hover:-translate-y-5 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              width={640}
              height={360}
              sizes="(max-width: 1023px) 85vw, 512px"
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <h6 className="font-bold font-mono uppercase tracking-tighter text-gradient transition-colors">
              {title}
            </h6>
            <p className="text-txt-main/80 text-sm font-mono leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-end pb-6 pr-6">
          {/* al onClick se le pasa la funcion, que permitira abrir el modal, con mas información*/}
          <Button variant="outline" size="sm" onClick={onBtnClick}>
            {textBtn}
          </Button>
        </div>
      </div>
    </article>
  );
}
