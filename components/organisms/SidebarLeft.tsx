'use client'

import { BookOpen, BrainCircuit, Container, GitBranch, Languages, Network, ShieldCheck, SquareTerminal, Terminal, Workflow } from "lucide-react";
import { Button, Separator } from "../atoms";
import {
  InfoRow,
  PersonalInformation,
  SkillMetric,
  ExtraSkill,
} from "../molecules";
import { useLanguage } from "@/lib/LanguageContext";

export function SidebarLeft() {
  const { t, locale } = useLanguage();

  return (
    <aside className="w-full mb-20 h-full lg:w-[300] lg:sticky lg:top-0 lg:mb-0 lg:h-screen bg-neutral flex flex-col">
      {/* Header fijo: info personal + CV */}
      <div className="flex-shrink-0 px-8 py-6 mb-4 flex flex-col gap-4">
        <div className="flex flex-col lg:gap-4">
          <PersonalInformation title={t("sidebar.userProfile")} />
          <div className="lg:w-full">
            <InfoRow label={t("sidebar.region")} value={t("sidebar.regionValue")} />
            <InfoRow label={t("sidebar.mode")} value={t("sidebar.modeValue")} />
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <a href={locale === "es" ? "/CV-Español.pdf" : "/CV-English.pdf"} download={locale === "es" ? "CV_Duban_Zuluaga_ES.pdf" : "CV_Duban_Zuluaga_EN.pdf"}>
            <Button>{t("sidebar.downloadCV")}</Button>
          </a>
        </div>
      </div>

      {/* Body scrolleable: skills, extras */}
      <div className="flex-1 overflow-y-auto px-8 pb-4 flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <SkillMetric
            label={t("sidebar.linguisticStack")}
            skills={[
              { label: "Spanish", percentage: 100 },
              { label: "English", percentage: 30 },
            ]}
          />
          <SkillMetric
            label={t("sidebar.developmentStack")}
            skills={[
              { label: "Java", percentage: 75 },
              { label: "TypeScript", percentage: 45 },
            ]}
          />
        </div>

        <ExtraSkill
          label={t("sidebar.additionalDeps")}
          skills={[
            { label: "Git & GitFlow", icon: GitBranch },
            { label: "Linux (Bash)", icon: Terminal },
            { label: "Containers (Podman/Docker)", icon: Container },
            { label: "English (Technical/A2)", icon: Languages },
            { label: "Agile (Scrum/Kanban)", icon: Workflow },
            { label: "Analytical Thinking", icon: BrainCircuit },
            { label: "Self-taught Learner", icon: BookOpen },
            { label: "SQA Mindset", icon: ShieldCheck },
          ]}
        />

        <Separator />
      </div>

      {/* Icons fijos al fondo */}
      <div className="flex-shrink-0 px-8 pb-4 flex flex-row justify-between">
        <SquareTerminal className="text-gray-600 w-5" />
        <Network className="text-gray-600 w-5" />
      </div>
    </aside>
  );
}
