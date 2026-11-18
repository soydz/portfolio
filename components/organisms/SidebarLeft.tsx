'use client'

import { BrainCircuit, BookOpen, ChevronDown, Container, GitBranch, ShieldCheck, Terminal, Workflow } from "lucide-react";
import { useState } from "react";
import { buttonStyles, PanelHeading } from "../atoms";
import {
  InfoRow,
  ProficiencyMetric,
  ExtraSkill,
} from "../molecules";
import { useLanguage } from "@/lib/LanguageContext";

export function SidebarLeft() {
  const { t, locale } = useLanguage();
  // En móvil las specs arrancan plegadas para que el hero quede a la vista.
  const [specsOpen, setSpecsOpen] = useState(false);

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-tertiary bg-neutral xl:sticky xl:top-0 xl:h-screen xl:w-[280px] xl:border-b-0 xl:border-r 2xl:w-[300px]">
      {/* Header: info personal + CV */}
      <div className="flex shrink-0 flex-col gap-5 px-4 py-6 sm:px-6 xl:px-8 xl:py-8">
        <PanelHeading title={t("sidebar.userProfile")} />

        <div className="grid grid-cols-1 gap-y-1 sm:max-w-md">
          <InfoRow label={t("sidebar.region")} value={t("sidebar.regionValue")} />
          <InfoRow label={t("sidebar.mode")} value={t("sidebar.modeValue")} />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center xl:flex-col xl:items-stretch">
          <a
            href={locale === "es" ? "/CV-Español.pdf" : "/CV-English.pdf"}
            download={locale === "es" ? "CV_Duban_Zuluaga_ES.pdf" : "CV_Duban_Zuluaga_EN.pdf"}
            className={buttonStyles({ className: "w-full sm:w-auto xl:w-full" })}
          >
            {t("sidebar.downloadCV")}
          </a>

          <button
            type="button"
            onClick={() => setSpecsOpen((open) => !open)}
            aria-expanded={specsOpen}
            aria-controls="system-specs"
            className="flex w-full items-center justify-between gap-3 border border-tertiary px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-txt-main transition-colors hover:border-primary/60 hover:text-txt-title sm:w-auto xl:hidden"
          >
            {specsOpen ? t("sidebar.hideSpecs") : t("sidebar.showSpecs")}
            <ChevronDown
              className={`size-4 text-primary transition-transform ${specsOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Body: skills y dependencias */}
      <div
        id="system-specs"
        className={`${specsOpen ? "flex" : "hidden"} flex-col gap-6 px-4 pb-8 sm:px-6 xl:flex xl:flex-1 xl:overflow-y-auto xl:px-8 xl:pb-6`}
      >
        <ProficiencyMetric
          label={t("sidebar.languages")}
          steps={6}
          items={[
            { label: t("sidebar.spanish"), level: t("sidebar.levelNative"), filled: 6 },
            { label: t("sidebar.english"), level: t("sidebar.levelTechnical"), filled: 2 },
          ]}
        />
        <ProficiencyMetric
          label={t("sidebar.developmentStack")}
          steps={4}
          items={[
            { label: "Java", level: t("sidebar.levelAdvanced"), filled: 3 },
            { label: "TypeScript", level: t("sidebar.levelIntermediate"), filled: 2 },
          ]}
        />

        <ExtraSkill
          label={t("sidebar.additionalDeps")}
          skills={[
            { label: "Git & GitFlow", icon: GitBranch },
            { label: "Linux (Bash)", icon: Terminal },
            { label: "Containers (Podman/Docker)", icon: Container },
            { label: "Agile (Scrum/Kanban)", icon: Workflow },
            { label: "Analytical Thinking", icon: BrainCircuit },
            { label: "Self-taught Learner", icon: BookOpen },
            { label: "SQA Mindset", icon: ShieldCheck },
          ]}
        />
      </div>
    </aside>
  );
}
