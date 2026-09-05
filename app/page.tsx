import { BackToTop, Contact } from "@/components/molecules";
import {
  Education,
  Header,
  Knowledge,
  Portfolio,
  Footer,
} from "@/components/organisms";
import { Binary, Boxes, Cloud, Command, Container, Cpu, Database, FileBracesCorner, LayoutDashboard, Microchip, Monitor, Orbit, Server, Terminal, Workflow, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 flex-1 min-w-0 bg-background px-10 relative">
      <header id="user_root">
        <Header
          titleModal="User_Details"
          profile={{
            fullName: "Duban Zuluaga",
            jobTitle: "Fullstack Developer",
            avatarUrl: "/images/header-soydz.webp",
            description: "Backend developer working mainly with Java, Spring Boot, and GraphQL. I also build frontends with React and TypeScript. My projects include a microservices fleet monitoring system with real-time WebSocket alerts, a financial tracking platform with Next.js, and a Kubernetes-deployed sales API. Everything containerized, everything with CI/CD.",
            labelBtn: "More",
            modalData: {
              human: {
                hobbies: "When I'm not staring at a screen, I'm usually losing myself in a movie or a series—I'm a true cinephile. I also have a deep interest in freestyle battles and the art of improvisation.",
                motivation: "My drive started as a kid, taking toys apart not to break them, but to figure out how they worked. That same obsession with the 'inner workings' is what leads me to dive deep into the guts of a system today.",
                curiosities: "I love tinkering with hardware. Whether it's experimenting with an Arduino Uno or setting up a home server on an old PC using K3s and Podman, I find that building the infrastructure myself is the best way to truly master the software.",
                philosophy: "I'm a pragmatist. I believe the most elegant solution is usually the simplest one. I'll always choose a maintainable, straightforward architecture over a complex one just to be 'clever'.",
                soundtrack: "My focus is powered by 80s New Wave and the energy of Salsa. To unwind, I turn to classical music, particularly the piano and violin—which is why I'm currently teaching myself how to play the piano.",
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
          title="Knowledge_Base"
          cards={[
            {
              icon: Server,
              title: "Backend Development",
              cardRows: [
                {
                  title: "Stack",
                  icon: Cpu,
                  description: "Java, Spring Boot",
                },
                {
                  title: "Interfaces",
                  icon: Zap,
                  description: "RESTful APIs & GraphQL Design",
                },
                {
                  title: "Persistence",
                  icon: Database,
                  description: "DB Management & Service Architecture",
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
              title: "Frontend Engineering",
              cardRows: [
                {
                  title: "Stack",
                  icon: FileBracesCorner,
                  description: "TypeScript, JavaScript",
                },
                {
                  title: "Frameworks",
                  icon: LayoutDashboard,
                  description: "React, Svelte",
                },
                {
                  title: "Integration & UX",
                  icon: Orbit,
                  description:
                    "RESTful API consumption and reactive state management",
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
              title: "DevOps & Cloud Infrastructure",
              cardRows: [
                {
                  title: "Orchestration",
                  icon: Boxes,
                  description: "Kubernetes (K8s)",
                },
                {
                  title: "Containers",
                  icon: Container,
                  description: "Docker/Podman",
                },
                {
                  title: "Automation",
                  icon: Workflow,
                  description: "CI/CD pipeline development",
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
              title: "Computer Science Fundamentals",
              cardRows: [
                {
                  title: "OS Internals",
                  icon: Microchip,
                  description: "Memory, process management, and concurrency",
                },
                {
                  title: "Low-Level",
                  icon: Binary,
                  description: "System programming in C",
                },
                {
                  title: "System Utilities",
                  icon: Command,
                  description: "Unix environment and Shell Scripting",
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
          title="ACADEMIC_LOG"
          cards={[
            {
              institution: "Universidad de Antioquia",
              dates: "2023 - Present",
              degree: "Ingeniero de Sistemas",
              description:
                "Systems Engineering at Universidad de Antioquia. Coursework covers software engineering, DevOps, and distributed systems.",
            },
            {
              degree: "Red Hat System Administration I (RH124)",
              institution: "Red Hat",
              dates: "Nov 2025",
              description: "Focused on core Linux administration tasks, including CLI proficiency, file system hierarchy management, user administration, and security permissions within the RHEL 9.3 environment."
            },
            {
              degree: "Red Hat OpenShift Development I (DO188)",
              institution: "Red Hat",
              dates: "Nov 2025",
              description: "Comprehensive training on containerizing applications using Podman 4.18. Focused on building, managing, and running containers in rootless environments, along with a foundational introduction to OpenShift orchestration and Kubernetes-based deployments."
            },
          ]}
        />
      </article>

      <article id="portfolio_log">
        <Portfolio
          title="PORTFOLIO_LOG"
          cards={[
            {
              title: "Supermarket Sales Management",
              description: "API for sales control across supermarket chains, featuring automated deployment on a Kubernetes cluster.",
              imageUrl: "/images/pt-supermercado.webp",
              textBtn: "Learn_More",
              details: {
                stack: ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "Docker"],
                features: [
                  "Automated deployment pipeline for scalability",
                  "RESTful API for multi-branch sales tracking",
                  "Containerized database management using stateful sets"
                ],
                challenge: "Data persistence across pod restarts using Kubernetes StatefulSets and persistent volumes.",
                links: [
                  { label: "Github_Repository", url: "https://github.com/soydz/pt-supermercado" }
                ]
              }
            },
            {
              title: "Fleet Guard 360",
              description: "Real-time fleet monitoring system with satellite tracking, built on a microservices architecture.",
              imageUrl: "/images/fleet-guard-360.webp",
              textBtn: "Learn_More",
              details: {
                stack: ["Java 21", "Spring Boot", "GraphQL", "React", "Docker", "RabbitMQ"],
                features: [
                  "Microservices architecture with API Gateway and JWT auth",
                  "Real-time push notifications via WebSocket (STOMP/SockJS)",
                  "Nginx reverse proxy with isolated Docker networks"
                ],
                challenge: "Two isolated Docker networks, JWT auth across 5 microservices, and real-time alerts via WebSocket/RabbitMQ.",
                links: [
                  { label: "Github_Repository", url: "https://github.com/soydz/fleet-guard-360" }
                ]
              }
            },
            {
              title: "Tracely",
              description: "High-precision wealth tracking platform with budget management, analytics, and type-safe financial data.",
              imageUrl: "/images/tracely.webp",
              textBtn: "Learn_More",
              details: {
                stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "TanStack Query", "Zod"],
                features: [
                  "Dynamic balance overview with real-time surplus/deficit indicators",
                  "Category-based budget management with visual progress bars",
                  "Interactive donut charts for income and expense analytics"
                ],
                challenge: "Implementing a feature-based architecture with high cohesion per domain module while ensuring type safety across the entire transaction lifecycle using Zod schemas and TanStack Query for server state management.",
                links: [
                  { label: "Github_Repository", url: "https://github.com/soydz/tracely" },
                  { label: "Live_Demo", url: "https://tracely.soydz.com/" }
                ]
              }
            },
            {
              title: "Global Renewable Energy Monitoring",
              description: "Full-stack platform to analyze global solar, wind, and hydroelectric energy production and consumption.",
              imageUrl: "/images/renewableEnergies.webp",
              textBtn: "Learn_More",
              details: {
                stack: ["TypeScript", "React", "Java", "Spring Boot", "Tailwind CSS"],
                features: [
                  "Real-time data visualization of global energy trends",
                  "Dynamic filtering by energy source and region",
                  "High-performance API for handling large datasets"
                ],
                challenge: "Integrating complex data visualizations while maintaining a responsive UI and ensuring the backend could serve large volumes of data without latency.",
                links: [
                  { label: "Frontend_Repo", url: "https://github.com/soydz/renewableEnergiesFrontend" },
                  { label: "Backend_Repo", url: "https://github.com/soydz/renewableEnergiesBackend" }
                ]
              }
            },
            {
              title: "Unix Command Interpreter",
              description: "A from-scratch Unix shell implementation capable of executing both internal and external commands.",
              imageUrl: "/images/terminal-unix.webp",
              textBtn: "Learn_More",
              details: {
                stack: ["C", "Linux API", "Unix"],
                features: [
                  "Support for internal shell commands",
                  "Execution of external binaries via fork/exec",
                  "I/O redirection and pipe implementation"
                ],
                challenge: "Designing a robust command parser and managing the complex lifecycle of child processes to prevent zombie processes and handle signals correctly.",
                links: [
                  { label: "Shell_Repo", url: "https://github.com/soydz/so-lab2-unix-shell" },
                  { label: "Utilities_Unix_Repo", url: "https://github.com/soydz/so-lab1-unix-utilities" }
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
            placeholder: "user@domain.com",
          }}
          textInput="Set_target_email"
          textArea={{
            name: "message",
            placeholder: "Enter transmission data..."
          }}
          textTextArea="Compile_payload"
          textBtn="Transmit_data"
        />
      </article>

      <BackToTop />

      <footer className="my-4">
        <Footer
          label="SYSTEM_STATUS:"
          status="STABLE"
          separator="//"
          owner="SOY_DZ"
        />
      </footer>
    </div>
  );
}
