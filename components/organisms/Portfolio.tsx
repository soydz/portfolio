'use client'

import { ChevronLeft, ChevronRight, FolderOpen } from "lucide-react";
import { Modal, PortfolioCard, PortfolioCardProps, ProjectDetails, SectionHeading } from "../molecules";
import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface PortfolioProps {
  title: string;
  cards: PortfolioCardProps[];
}

const AUTOPLAY_MS = 7000;

export function Portfolio({ title, cards }: Readonly<PortfolioProps>) {
  const { t } = useLanguage();
  const [selectCard, setSelectCard] = useState<PortfolioCardProps | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isModalOpenRef = useRef(false);
  const isPausedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const activeIndexRef = useRef(0);
  const totalCards = cards.length;

  const scrollToCard = useCallback((index: number) => {
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
  }, []);

  const scrollNext = useCallback(() => {
    const nextIndex = activeIndexRef.current >= totalCards - 1 ? 0 : activeIndexRef.current + 1;
    scrollToCard(nextIndex);
  }, [totalCards, scrollToCard]);

  const scrollPrev = useCallback(() => {
    const prevIndex = activeIndexRef.current <= 0 ? totalCards - 1 : activeIndexRef.current - 1;
    scrollToCard(prevIndex);
  }, [totalCards, scrollToCard]);

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (document.hidden || isPausedRef.current || isModalOpenRef.current) return;
      scrollNext();
    }, AUTOPLAY_MS);
  }, [scrollNext]);

  const handleManualNav = useCallback((action: () => void) => {
    action();
    startAutoScroll();
  }, [startAutoScroll]);

  useEffect(() => {
    // Respeta a quien pidió menos movimiento: sin autoplay, navegación manual.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoScroll]);

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
      <SectionHeading icon={FolderOpen} title={title} />

      <div
        className="group/carousel relative"
        onFocusCapture={() => { isPausedRef.current = true }}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            isPausedRef.current = isModalOpenRef.current;
          }
        }}
      >
        <div
          ref={scrollRef}
          onMouseEnter={() => { isPausedRef.current = true }}
          onMouseLeave={() => {
            if (!isModalOpenRef.current) {
              isPausedRef.current = false
            }
          }}
          className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto"
        >
          {cards?.map((card) => (
            <div
              key={card.title}
              data-slide
              className="flex min-w-full snap-center justify-center px-0 py-1 sm:px-6"
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

        {/* Controles bajo la card: nunca se superponen al contenido */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={() => handleManualNav(scrollPrev)}
            aria-label={t("portfolio.previous")}
            className="flex size-9 items-center justify-center border border-tertiary text-primary transition-colors hover:border-primary hover:bg-primary hover:text-neutral"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <div className="flex items-center gap-1">
            {cards.map((card, index) => (
              <button
                key={card.title}
                onClick={() => handleManualNav(() => scrollToCard(index))}
                className="group/dot flex h-6 items-center px-1"
                aria-label={`${t("portfolio.goTo")} ${index + 1}: ${card.title}`}
                aria-current={activeIndex === index}
              >
                <span
                  className={`block h-1 transition-all duration-300 ${
                    activeIndex === index
                      ? "w-7 bg-primary"
                      : "w-4 bg-tertiary group-hover/dot:bg-txt-main/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => handleManualNav(scrollNext)}
            aria-label={t("portfolio.next")}
            className="flex size-9 items-center justify-center border border-tertiary text-primary transition-colors hover:border-primary hover:bg-primary hover:text-neutral"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
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
