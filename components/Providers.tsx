'use client'

import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import { Globe } from "lucide-react";

function LanguageSwitcher() {
  const { locale, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-20 right-12 z-50 flex items-center gap-2 bg-neutral border border-tertiary p-2 text-primary hover:bg-tertiary hover:text-white transition-all cursor-pointer"
      aria-label="Toggle language"
    >
      <Globe size={18} />
      <span className="font-mono text-xs">{locale === "en" ? "ES" : "EN"}</span>
    </button>
  );
}

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <LanguageProvider>
      {children}
      <LanguageSwitcher />
    </LanguageProvider>
  );
}
