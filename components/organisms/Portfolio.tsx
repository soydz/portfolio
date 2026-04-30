'use client'

import { FolderOpen } from "lucide-react";
import { Modal, PortfolioCard, PortfolioCardProps, ProjectDetails } from "../molecules";
import { useState, useEffect, useRef } from "react";

interface PortfolioProps {
  title: string;
  cards: PortfolioCardProps[];
}

export function Portfolio({ title, cards }: Readonly<PortfolioProps>) {
  // guarda la card seleccionada
  const [selectCard, setSelectCard] = useState<PortfolioCardProps | null>(null);

  // se usa Refs en lugar de States porque no queremos que el carrusel se vuelva a renderizar cada vez que se pausa/inicia
  // se usa para controlar si el modal de detalles de cada card esta abierto
  const isModalOpenRef = useRef(false);
  // se usa para controlar la pausa del carrusel
  const isPausedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // función de desplazamiento automatico
    const autoScroll = () => {
      // se detiene si esta pausado o el modal esta abierto
      if (isPausedRef.current || isModalOpenRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;

      // calcula limite maximo del scroll (ancho total - ancho visible)
      const maxScroll = scrollWidth - clientWidth;
      // obtiene el ancho de la tarjeta y le suma el espaciado entre tarjetas (gap-6)
      const card = container.querySelector('.snap-center') as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 24 : clientWidth;

      // ciclo infinito que hace que de la ultima tarjeta salte a la primera
      // si llega al limite, o el siguiente salto lo deja mas alla del limite. con un margen de error de 5px
      if (scrollLeft >= maxScroll - 5 || scrollLeft + cardWidth >= maxScroll - 5) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });

      } else {
        // desplaza la posición actual mas el ancho de una card
        container.scrollTo({
          left: scrollLeft + cardWidth,
          behavior: "smooth",
        });
      }
    };

    // cada 4 segundos se cambia de card
    const interval = setInterval(autoScroll, 4000);

    // al desmostar el componente se limpia el intervalo, para evitar fugas de memoria
    return () => clearInterval(interval);
  }, [])

  return (
    <section>
      <div className="flex flex-row items-center gap-2">
        <FolderOpen className="text-primary" />
        <h2 className="text-txt-title font-mono font-semibold py-4">{title}</h2>
      </div>
      {/* se pausa si el usuario interactua con el mouse o el modal esta abierto */}
      <div
        ref={scrollRef}
        onMouseEnter={() => { isPausedRef.current = true }}
        onMouseLeave={() => {
          if (!isModalOpenRef.current) {
            isPausedRef.current = false
          }
        }}
        className="flex gap-6 overflow-x-auto snap-x scrollbar-hide"
      >
        {/* para el centrado correcto de la card inicial */}
        <div className="xl:min-w-[40%] xl:h-px" />
        {cards?.map((card) => (
          <div key={card.title} className="snap-center">
            <PortfolioCard
              {...card}
              onBtnClick={() => {
                setSelectCard(card)
                isPausedRef.current = true;     // detiene el carrusel
                isModalOpenRef.current = true;  // marca el modal como abierto
              }}
            />
          </div>
        ))}
        {/* para el centrado correcto de la card final */}
        <div className="xl:min-w-[40%] xl:h-px" />
      </div>

      <Modal title={selectCard?.title || "Portfolio"} isOpen={!!selectCard}
        onClose={() => {
          setSelectCard(null)
          isPausedRef.current = false;
          isModalOpenRef.current = false;
        }} >
        {selectCard && <ProjectDetails {...selectCard.details}
        />}
      </Modal>

    </section>
  );
}
