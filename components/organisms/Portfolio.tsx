'use client'

import { ChevronLeft, ChevronRight, FolderOpen } from "lucide-react";
import { Modal, PortfolioCard, PortfolioCardProps, ProjectDetails } from "../molecules";
import { useState, useEffect, useRef } from "react";

interface PortfolioProps {
  title: string;
  cards: PortfolioCardProps[];
}

export function Portfolio({ title, cards }: Readonly<PortfolioProps>) {
  const [selectCard, setSelectCard] = useState<PortfolioCardProps | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isModalOpenRef = useRef(false);
  const isPausedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const activeIndexRef = useRef(0);
  const totalCards = cards.length;

  function scrollToCard(index: number) {
    const container = scrollRef.current;
    if (!container) return;

    const slide = container.querySelectorAll('[data-slide]')[index] as HTMLElement;
    if (!slide) return;

    container.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });

    activeIndexRef.current = index;
    setActiveIndex(index);
  }

  function scrollNext() {
    const nextIndex = activeIndexRef.current >= totalCards - 1 ? 0 : activeIndexRef.current + 1;
    scrollToCard(nextIndex);
  }

  function scrollPrev() {
    const prevIndex = activeIndexRef.current <= 0 ? totalCards - 1 : activeIndexRef.current - 1;
    scrollToCard(prevIndex);
  }

  function startAutoScroll() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isPausedRef.current || isModalOpenRef.current) return;
      scrollNext();
    }, 4000);
  }

  function handleManualNav(action: () => void) {
    action();
    startAutoScroll();
  }

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalCards]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    function handleScroll() {
      if (!container) return;
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let minDistance = Infinity;

      container.querySelectorAll('[data-slide]').forEach((el, index) => {
        const slideEl = el as HTMLElement;
        const slideCenter = slideEl.offsetLeft + slideEl.offsetWidth / 2;
        const distance = Math.abs(containerCenter - slideCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      activeIndexRef.current = closest;
      setActiveIndex(closest);
    }

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section>
      <div className="flex flex-row items-center gap-2">
        <FolderOpen className="text-primary" />
        <h2 className="text-txt-title font-mono font-semibold py-4">{title}</h2>
      </div>

      <div className="relative group/carousel">
        <button
          onClick={() => handleManualNav(scrollPrev)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-neutral/80 border border-tertiary p-2 text-primary opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-tertiary hover:text-white cursor-pointer"
          aria-label="Previous project"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleManualNav(scrollNext)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-neutral/80 border border-tertiary p-2 text-primary opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-tertiary hover:text-white cursor-pointer"
          aria-label="Next project"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollRef}
          onMouseEnter={() => { isPausedRef.current = true }}
          onMouseLeave={() => {
            if (!isModalOpenRef.current) {
              isPausedRef.current = false
            }
          }}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {cards?.map((card) => (
            <div
              key={card.title}
              data-slide
              className="min-w-full snap-center flex justify-center px-4 py-5"
            >
              <PortfolioCard
                {...card}
                onBtnClick={() => {
                  setSelectCard(card)
                  isPausedRef.current = true;
                  isModalOpenRef.current = true;
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {cards.map((card, index) => (
            <button
              key={card.title}
              onClick={() => handleManualNav(() => scrollToCard(index))}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === index
                  ? "bg-primary w-6"
                  : "bg-tertiary hover:bg-primary/50"
              }`}
              aria-label={`Go to ${card.title}`}
            />
          ))}
        </div>
      </div>

      <Modal title={selectCard?.title || "Portfolio"} isOpen={!!selectCard}
        onClose={() => {
          setSelectCard(null)
          isPausedRef.current = false;
          isModalOpenRef.current = false;
        }} >
        {selectCard && <ProjectDetails {...selectCard.details} />}
      </Modal>

    </section>
  );
}
