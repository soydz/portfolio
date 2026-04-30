import { Button } from "../atoms";
import { ProjectDetailsProps } from "./ProjectDetails";

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
  onBtnClick
}: Readonly<PortfolioCardProps>) {
  return (
    <article className="border border-tertiary bg-neutral p-6 w-[85vw] h-full snap-center mb-8 hover:border-primary hover:-translate-y-5 transition-all duration-300 lg:max-w-lg">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-video overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover object-left" />
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-bold font-mono uppercase tracking-tighter text-gradient transition-colors">{title}</h6>
            <p className="text-txt-main/80 text-sm font-mono leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="flex justify-end">
          {/* al onClick se le pasa la funcion, que permitira abrir el modal, con mas información*/}
          <Button variant="outline" size="sm" onClick={onBtnClick}>{textBtn}</Button>
        </div>
      </div>
    </article>
  );
}
