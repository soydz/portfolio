'use client'

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext";

// con el onClick se desplaza al inicio de la pagina
export function BackToTop() {
    const [visible, setVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t("footer.backToTop")}
            className={`fixed bottom-6 right-3 z-40 hidden size-11 place-items-center border border-tertiary bg-neutral/90 text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-neutral xl:grid ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
        >
            <ArrowUp className="size-5" aria-hidden="true" />
        </button>
    )
}
