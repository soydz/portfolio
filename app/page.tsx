'use client'

import { BackToTop, Contact } from "@/components/molecules";
import {
  Education,
  Header,
  Knowledge,
  Portfolio,
  Footer,
} from "@/components/organisms";
import { Binary, Boxes, Cloud, Command, Container, Cpu, Database, FileBracesCorner, LayoutDashboard, Microchip, Monitor, Orbit, Server, Terminal, Workflow, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-20 flex-1 min-w-0 bg-background px-10 relative">
      <header id="user_root">
        <Header
          titleModal={t("header.titleModal")}
          profile={{
            fullName: "Duban Zuluaga",
            jobTitle: t("header.jobTitle"),
            avatarUrl: "/images/header-soydz.webp",
            description: t("header.description"),
            labelBtn: t("header.labelBtn"),
            modalData: {
              human: {
                hobbies: t("header.modal.hobbies"),
                motivation: t("header.modal.motivation"),
                curiosities: t("header.modal.curiosities"),
                philosophy: t("header.modal.philosophy"),
                soundtrack: t("header.modal.soundtrack"),
              },
              strengths: [
                { label: "Backend_Core", value: "Java / Spring Boot" },
                { label: "Frontend_Sense", value: "TypeScript / ReactJS" },
                { label: "Infra_Logic", value: "Docker/Podman / Kubernetes" },
                { label: "System_Mindset", value: "OS / Hardware / Optimization" },
              ]
            }
          }
          }
        />
      </header>


      <article id="knowledge_base">
        <Knowledge
          title={t("knowledge.title")}
          cards={[
            {
              icon: Server,
              title: t("knowledge.backend"),
              cardRows: [
                {
                  title: t("knowledge.backend.stack"),
                  icon: Cpu,
                  description: "Java, Spring Boot",
                },
                {
                  title: t("knowledge.backend.interfaces"),
                  icon: Zap,
                  description: t("knowledge.backend.interfacesDesc"),
                },
                {
                  title: t("knowledge.backend.persistence"),
                  icon: Database,
                  description: t("knowledge.backend.persistenceDesc"),
                },
              ],
              footer: {
                proyects: [
                  {
                    label: "pt_supermercado",
                    url: "https://github.com/soydz/pt-supermercado",
                  },

                  {
                    label: "fleet_guard_360",
                    url: "https://github.com/soydz/fleet-guard-360"
                  }
                ],
              },
            },
            {
              icon: Monitor,
              title: t("knowledge.frontend"),
              cardRows: [
                {
                  title: t("knowledge.frontend.stack"),
                  icon: FileBracesCorner,
                  description: "TypeScript, JavaScript",
                },
                {
                  title: t("knowledge.frontend.frameworks"),
                  icon: LayoutDashboard,
                  description: t("knowledge.frontend.frameworksDesc"),
                },
                {
                  title: t("knowledge.frontend.integration"),
                  icon: Orbit,
                  description: t("knowledge.frontend.integrationDesc"),
                },
              ],
              footer: {
                proyects: [
                  {
                    label: "RENEWABLE_ENERGIES_FRONTEND",
                    url: "https://github.com/soydz/renewableEnergiesFrontend",
                  },

                ],
              },
            },
            {
              icon: Cloud,
              title: t("knowledge.devops"),
              cardRows: [
                {
                  title: t("knowledge.devops.orchestration"),
                  icon: Boxes,
                  description: "Kubernetes (K8s)",
                },
                {
                  title: t("knowledge.devops.containers"),
                  icon: Container,
                  description: "Docker/Podman",
                },
                {
                  title: t("knowledge.devops.automation"),
                  icon: Workflow,
                  description: t("knowledge.devops.automationDesc"),
                },
              ],
              footer: {
                proyects: [
                  {
                    label: "pt_supermercado",
                    url: "https://github.com/soydz/pt-supermercado",
                  },
                  {
                    label: "fleet_guard_360",
                    url: "https://github.com/soydz/fleet-guard-360"
                  },
                ],
              },
            },
            {
              icon: Terminal,
              title: t("knowledge.cs"),
              cardRows: [
                {
                  title: t("knowledge.cs.osInternals"),
                  icon: Microchip,
                  description: t("knowledge.cs.osInternalsDesc"),
                },
                {
                  title: t("knowledge.cs.lowLevel"),
                  icon: Binary,
                  description: t("knowledge.cs.lowLevelDesc"),
                },
                {
                  title: t("knowledge.cs.systemUtils"),
                  icon: Command,
                  description: t("knowledge.cs.systemUtilsDesc"),
                },
              ],
              footer: {
                proyects: [
                  {
                    label: "unix_shell",
                    url: "github.com/soydz/so-lab2-unix-shell",
                  },
                  {
                    label: "unix_utilities",
                    url: "https://github.com/soydz/so-lab1-unix-utilities",
                  },
                ],
              },
            },
          ]}
        />
      </article>

      <article id="academic_log">
        <Education
          title={t("education.title")}
          cards={[
            {
              institution: "Universidad de Antioquia",
              dates: `2023 - ${t("education.present")}`,
              degree: "Ingeniero de Sistemas",
              description: t("education.udea"),
            },
            {
              degree: "Red Hat System Administration I (RH124)",
              institution: "Red Hat",
              dates: "Nov 2025",
              description: t("education.rh124"),
            },
            {
              degree: "Red Hat OpenShift Development I (DO188)",
              institution: "Red Hat",
              dates: "Nov 2025",
              description: t("education.do188"),
            },
          ]}
        />
      </article>

      <article id="portfolio_log">
        <Portfolio
          title={t("portfolio.title")}
          cards={[
            {
              title: t("portfolio.supermarket.title"),
              description: t("portfolio.supermarket.desc"),
              imageUrl: "/images/pt-supermercado.webp",
              textBtn: t("portfolio.learnMore"),
              details: {
                stack: ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "Docker"],
                features: [
                  t("portfolio.supermarket.f1"),
                  t("portfolio.supermarket.f2"),
                  t("portfolio.supermarket.f3"),
                ],
                challenge: t("portfolio.supermarket.challenge"),
                links: [
                  { label: t("portfolio.githubRepo"), url: "https://github.com/soydz/pt-supermercado" }
                ]
              }
            },
            {
              title: t("portfolio.fleet.title"),
              description: t("portfolio.fleet.desc"),
              imageUrl: "/images/fleet-guard-360.webp",
              textBtn: t("portfolio.learnMore"),
              details: {
                stack: ["Java 21", "Spring Boot", "GraphQL", "React", "Docker", "RabbitMQ"],
                features: [
                  t("portfolio.fleet.f1"),
                  t("portfolio.fleet.f2"),
                  t("portfolio.fleet.f3"),
                ],
                challenge: t("portfolio.fleet.challenge"),
                links: [
                  { label: t("portfolio.githubRepo"), url: "https://github.com/soydz/fleet-guard-360" }
                ]
              }
            },
            {
              title: t("portfolio.tracely.title"),
              description: t("portfolio.tracely.desc"),
              imageUrl: "/images/tracely.webp",
              textBtn: t("portfolio.learnMore"),
              details: {
                stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "TanStack Query", "Zod"],
                features: [
                  t("portfolio.tracely.f1"),
                  t("portfolio.tracely.f2"),
                  t("portfolio.tracely.f3"),
                ],
                challenge: t("portfolio.tracely.challenge"),
                links: [
                  { label: t("portfolio.githubRepo"), url: "https://github.com/soydz/tracely" },
                  { label: t("portfolio.liveDemo"), url: "https://tracely.soydz.com/" }
                ]
              }
            },
            {
              title: t("portfolio.renewable.title"),
              description: t("portfolio.renewable.desc"),
              imageUrl: "/images/renewableEnergies.webp",
              textBtn: t("portfolio.learnMore"),
              details: {
                stack: ["TypeScript", "React", "Java", "Spring Boot", "Tailwind CSS"],
                features: [
                  t("portfolio.renewable.f1"),
                  t("portfolio.renewable.f2"),
                  t("portfolio.renewable.f3"),
                ],
                challenge: t("portfolio.renewable.challenge"),
                links: [
                  { label: t("portfolio.frontendRepo"), url: "https://github.com/soydz/renewableEnergiesFrontend" },
                  { label: t("portfolio.backendRepo"), url: "https://github.com/soydz/renewableEnergiesBackend" }
                ]
              }
            },
            {
              title: t("portfolio.unix.title"),
              description: t("portfolio.unix.desc"),
              imageUrl: "/images/terminal-unix.webp",
              textBtn: t("portfolio.learnMore"),
              details: {
                stack: ["C", "Linux API", "Unix"],
                features: [
                  t("portfolio.unix.f1"),
                  t("portfolio.unix.f2"),
                  t("portfolio.unix.f3"),
                ],
                challenge: t("portfolio.unix.challenge"),
                links: [
                  { label: t("portfolio.shellRepo"), url: "https://github.com/soydz/so-lab2-unix-shell" },
                  { label: t("portfolio.utilitiesRepo"), url: "https://github.com/soydz/so-lab1-unix-utilities" }
                ]
              }
            }
          ]}
        />
      </article>

      <article id="transmission_protocol">
        <Contact
          input={{
            name: "email",
            type: "email",
            placeholder: t("contact.emailPlaceholder"),
          }}
          textInput={t("contact.emailLabel")}
          textArea={{
            name: "message",
            placeholder: t("contact.messagePlaceholder"),
          }}
          textTextArea={t("contact.messageLabel")}
          textBtn={t("contact.submit")}
        />
      </article>

      <BackToTop />

      <footer className="my-4">
        <Footer
          label={t("footer.status")}
          status={t("footer.stable")}
          separator="//"
          owner="SOY_DZ"
        />
      </footer>
    </div>
  );
}
