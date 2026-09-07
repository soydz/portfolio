'use client'

import { TerminalLink } from "./TerminalLink";
import { useLanguage } from "@/lib/LanguageContext";

// props de los enlaces (github) de los proyectos
interface LinksProps {
    label: string;
    url: string;
}

export interface ProjectDetailsProps {
    stack: string[];
    features: string[];
    challenge: string;
    links: LinksProps[];
}

export function ProjectDetails({ stack, features, challenge, links }: Readonly<ProjectDetailsProps>) {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col gap-10 font-mono text-sm">
            <section className="flex flex-col gap-3">
                <span className="text-primary/75 text-xs uppercase tracking-widest">{`// ${t("project.stack")}`}</span>
                <div className="flex flex-wrap gap-2">
                    {stack?.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-tertiary/50 border border-tertiary text-txt-main uppercase text-xs">{tech}</span>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-3">
                <span className="text-primary/75 text-xs uppercase tracking-widest">{`// ${t("project.features")}`}</span>
                <div className="flex flex-col gap-2">
                    {features?.map((feature) => (
                        <div key={feature} className="flex gap-2">
                            <span className="text-primary">{`>`}</span>
                            <span className="text-sm text-txt-main">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-3">
                <div>
                    <span className="text-primary/75 text-xs uppercase tracking-widest">{`// ${t("project.challenge")}`}</span>
                </div>
                <p className="text-txt-main leading-relaxed pl-4 border-l border-tertiary">{challenge}</p>
            </section>

            <section className="flex flex-col gap-3">
                <span className="text-primary/75 text-xs uppercase tracking-widest">{`// ${t("project.logs")}`}</span>
                <div className="flex flex-col gap-2">
                    {links?.map((link) => (
                        <TerminalLink key={link.label} label={link.label.toLocaleLowerCase()} url={link.url} prefix="cat /dev/logs/" />
                    ))}
                </div>
            </section>
        </div>
    )
}