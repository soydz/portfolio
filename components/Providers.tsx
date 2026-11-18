'use client'

import { LanguageProvider } from "@/lib/LanguageContext";

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
