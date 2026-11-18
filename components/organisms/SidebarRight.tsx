'use client'

import { Cpu, Globe, History, Rocket, User } from "lucide-react";
import { SocialMenu, Nav } from "../molecules";
import { useLanguage } from "@/lib/LanguageContext";

export function SidebarRight() {
  const { t, locale, toggleLanguage } = useLanguage();

  const navItems = [
    { icon: User, label: t("sidebar.nav.userRoot"), href: "#user_root" },
    { icon: Cpu, label: t("sidebar.nav.techSpecs"), href: "#knowledge_base" },
    { icon: History, label: t("sidebar.nav.logsAcademic"), href: "#academic_log" },
    { icon: Rocket, label: t("sidebar.nav.deployments"), href: "#portfolio_log" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tertiary bg-neutral/95 backdrop-blur-sm xl:sticky xl:inset-auto xl:top-0 xl:h-screen xl:w-14 xl:shrink-0 xl:border-l xl:border-t-0 xl:bg-transparent xl:backdrop-blur-none">
      <div className="flex items-center justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1.5 xl:h-full xl:flex-col xl:justify-between xl:px-0 xl:pb-20 xl:pt-8">
        <Nav items={navItems} />

        <div className="flex items-center gap-1 xl:flex-col">
          <SocialMenu
            githubUrl="https://github.com/soydz"
            linkedinUrl="https://www.linkedin.com/in/dubanzuluaga/"
            mailUrl="#transmission_protocol"
          />

          <div aria-hidden="true" className="my-1 hidden h-px w-6 bg-tertiary xl:block" />

          {/* Selector de idioma: vive en el mismo rail que la navegación */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t("sidebar.switchLanguage")}
            className="group relative flex size-10 items-center justify-center text-txt-main/70 transition-colors hover:text-primary xl:size-11"
          >
            <Globe className="hidden size-5 xl:block xl:size-[22px]" strokeWidth={1.75} aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold tracking-widest xl:hidden">
              {locale === "en" ? "ES" : "EN"}
            </span>
            <span
              data-tooltip
              className="pointer-events-none absolute bottom-full left-1/2 mb-1 hidden -translate-x-1/2 whitespace-nowrap bg-primary px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral xl:bottom-auto xl:left-auto xl:right-full xl:top-1/2 xl:mb-0 xl:mr-2 xl:-translate-y-1/2 xl:translate-x-0 xl:group-hover:block xl:group-focus-visible:block"
            >
              {`lang: ${locale === "en" ? "ES" : "EN"}`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
