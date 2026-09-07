'use client'

import { Cpu, History, Rocket, User } from "lucide-react";
import { Separator } from "../atoms";
import { SocialMenu, Nav } from "../molecules";
import { useLanguage } from "@/lib/LanguageContext";

export function SidebarRight() {
  const { t } = useLanguage();

  const navItems = [
    { icon: User, label: t("sidebar.nav.userRoot"), href: "#user_root" },
    { icon: Cpu, label: t("sidebar.nav.techSpecs"), href: "#knowledge_base" },
    { icon: History, label: t("sidebar.nav.logsAcademic"), href: "#academic_log" },
    { icon: Rocket, label: t("sidebar.nav.deployments"), href: "#portfolio_log" },
  ];

  return (
    <div className="sticky top-0 h-auto w-full flex flex-row justify-around items-center lg:h-screen  lg:flex-col lg:w-12 py-10 pr-4">
      <div className="flex flex-row justify-center w-full gap-8 lg:flex-col">
        <Nav items={navItems} />
        <div className="hidden lg:block lg:my-4">
          <Separator />
        </div>
        <SocialMenu
          githubUrl="https://github.com/soydz"
          linkedinUrl="https://www.linkedin.com/in/dubanzuluaga/"
          mailUrl="#transmission_protocol"
        />
      </div>
    </div>
  );
}
