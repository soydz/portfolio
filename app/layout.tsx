import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarLeft, SidebarRight } from "@/components/organisms";
import {
  BookOpen,
  BrainCircuit,
  Container,
  Cpu,
  GitBranch,
  History,
  Languages,
  Rocket,
  ShieldCheck,
  Terminal,
  User,
  Workflow,
} from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "soydz.com",
  description: "Portfolio Duban Zuluaga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col lg:flex-row">
        <SidebarLeft
          personalInfo={{
            avatarUrl: "/images/avatar-soydz.jpg",
            fullName: "Duban Zuluaga",
            jobTitle: "Full-Stack Developer",
          }}
          contactInfo={[
            { label: "Location", value: "Colombia" },
            { label: "WorkMode", value: "Remote / Hybrid" },
            { label: "TimeZone", value: "GMT-5" },
          ]}

          languages={{
            label: "LINGUISTIC_STACK",
            skills: [
              {
                label: "Spanish",
                percentage: 100,
              },
              {
                label: "English",
                percentage: 30,
              },
            ],
          }}
          techStack={{
            label: "Development_Stack",
            skills: [
              {
                label: "Java",
                percentage: 60,
              },
              {
                label: "TypeScript",
                percentage: 50,
              },
              {
                label: "Bash",
                percentage: 35,
              },
              {
                label: "C",
                percentage: 25,
              },
            ],
          }}
          extraSkill={{
            label: "Additional_Dependencies",
            skills: [
              { label: "Git & GitFlow", icon: GitBranch },
              { label: "Linux (Bash)", icon: Terminal },
              { label: "Containers (Podman/Docker)", icon: Container },
              { label: "English (Technical/A2)", icon: Languages },
              { label: "Agile (Scrum/Kanban)", icon: Workflow },
              { label: "Analytical Thinking", icon: BrainCircuit },
              { label: "Self-taught Learner", icon: BookOpen },
              { label: "SQA Mindset", icon: ShieldCheck },
            ],
          }}
          downloadCV={{
            label: "Download_CV.exe",
          }}
        />

        <main className="flex-1 min-w-0 overflow-x-hidden">
          {children}
        </main>

        <SidebarRight
          socialMenu={{
            githubUrl: "https://github.com/soydz",
            linkedinUrl: "https://www.linkedin.com/in/dubanzuluaga/",
            mailUrl: "#transmission_protocol",
          }}

          navItems={[
            { icon: User, label: "User_Root", href: "#user_root" },
            { icon: Cpu, label: "Tech_Specs", href: "#knowledge_base" },
            { icon: History, label: "Logs_Academic", href: "#academic_log" },
            { icon: Rocket, label: "Deployments", href: "#portfolio_log" },
          ]}
        />

      </body>
    </html>
  );
}
