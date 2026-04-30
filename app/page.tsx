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
            avatarUrl: "/images/header-soydz.png",
            description: "Software Engineer specializing in backend and fullstack development with Java, Spring Boot, TypeScript, and React. Expert in building high-performance, resilient systems with automated CI/CD pipelines. Delivers fluid, user-centric interfaces that drive measurable product outcomes.",
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
                title: "Deployed_deliverables",
                proyects: [
                  {
                    label: "pt_supermercado",
                    url: "https://github.com/soydz/pt-supermercado",
                  },
                  {
                    label: "MOVIE_TRACKER_BACKEND",
                    url: "https://github.com/soydz/movieTrackerWeb/tree/main/Backend",
                  },
                  {
                    label: "fg_360",
                    url: "https://github.com/soydz/fg360"
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
                title: "Deployed_deliverables",
                proyects: [
                  {
                    label: "RENEWABLE_ENERGIES_FRONTEND",
                    url: "https://github.com/soydz/renewableEnergiesFrontend",
                  },
                  {
                    label: "MOVIE_TRACKER_FRONTEND",
                    url: "https://github.com/soydz/movieTrackerWeb/tree/main/Frontend",
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
                title: "Deployed_deliverables",
                proyects: [
                  {
                    label: "pt_supermercado",
                    url: "https://github.com/soydz/pt-supermercado",
                  },
                  {
                    label: "fg_360",
                    url: "https://github.com/soydz/fg360",
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
                title: "Deployed_deliverables",
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
                "Systems Engineering curriculum grounded in science, technology, and investigative research. Prepared to tackle the challenges of the 4th Industrial Revolution (AI/ML, IoT, Blockchain) through a software engineering approach. Expertly trained in modern development methodologies, DevOps culture, and the implementation of robust, scalable enterprise applications.",
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
              imageUrl: "/images/pt-supermercado.png",
              textBtn: "Learn_More",
              details: {
                stack: ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "Docker"],
                features: [
                  "Automated deployment pipeline for scalability",
                  "RESTful API for multi-branch sales tracking",
                  "Containerized database management using stateful sets"
                ],
                challenge: "The primary challenge was orchestrating the deployment on Kubernetes and ensuring data persistence across pod restarts using a robust volume management strategy.",
                links: [
                  { label: "Github_Repository", url: "https://github.com/soydz/pt-supermercado" }
                ]
              }
            },
            {
              title: "Global Renewable Energy Monitoring",
              description: "Full-stack platform to analyze global solar, wind, and hydroelectric energy production and consumption.",
              imageUrl: "/images/renewableEnergies.png",
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
              title: "Personal Movie Tracker",
              description: "Application to track and manage movie viewing history with secure user authentication.",
              imageUrl: "/images/movie-tracker.png",
              textBtn: "Learn_More",
              details: {
                stack: ["Java", "Spring Boot", "React", "JWT", "MySQL"],
                features: [
                  "Secure user authentication using JWT",
                  "Personalized movie watch-list and rating system",
                  "Reactive interface for real-time tracking"
                ],
                challenge: "Implementing a stateless authentication flow with JWT that ensured security across different sessions while maintaining a seamless user experience.",
                links: [
                  { label: "Github_Repository", url: "https://github.com/soydz/movieTrackerWeb" }
                ]
              }
            },
            {
              title: "Unix Command Interpreter",
              description: "A from-scratch Unix shell implementation capable of executing both internal and external commands.",
              imageUrl: "/images/terminal-unix.png",
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
            },
            {
              title: "Latin America Sanitation Analysis",
              description: "Data processing tool designed to analyze sanitation and water access statistics across Latin American countries.",
              imageUrl: "/images/sanitation-latam.png",
              textBtn: "Learn_More",
              details: {
                stack: ["Java", "File I/O", "Data Processing"],
                features: [
                  "Automated parsing of large-scale statistical files",
                  "Comparative analysis across multiple countries",
                  "Report generation with processed metrics"
                ],
                challenge: "Normalizing inconsistent data formats from various sources into a unified model to allow for accurate cross-country statistical comparisons.",
                links: [
                  { label: "Github_Repository", url: "https://github.com/soydz/sanitation-in-Latin-America" }
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
          date="2026"
          owner="SOY_DZ"
        />
      </footer>
    </div>
  );
}
