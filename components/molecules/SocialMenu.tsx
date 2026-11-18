import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../atoms";

export interface SocialMenuProps {
  githubUrl: string;
  linkedinUrl: string;
  mailUrl: string;
}

export function SocialMenu({
  githubUrl,
  linkedinUrl,
  mailUrl,
}: Readonly<SocialMenuProps>) {

  // simplifica el html, permitiendo usar un map para renderizar.
  const socials = [
    { icon: <GithubIcon className="size-5 xl:size-[22px]" />, url: githubUrl, label: "github", external: true },
    { icon: <LinkedinIcon className="size-5 xl:size-[22px]" />, url: linkedinUrl, label: "linkedin", external: true },
    { icon: <Mail className="size-5 xl:size-[22px]" strokeWidth={1.75} />, url: mailUrl, label: "mail", external: false },
  ]

  return (
    <div className="flex flex-row items-center justify-center gap-1 xl:flex-col">
      {socials.map((social) => (
        <div key={social.label} className="relative">
          <a
            href={social.url}
            aria-label={social.label}
            target={social.external ? "_blank" : undefined}
            rel={social.external ? "noreferrer noopener" : undefined}
            className="group flex size-10 items-center justify-center text-txt-main/70 transition-colors hover:text-primary xl:size-11"
          >
            {social.icon}

            {/*tooltip - muestra una pequeña explicación de lo que hace el botón*/}
            <span
              data-tooltip
              className="pointer-events-none absolute bottom-full left-1/2 mb-1 hidden -translate-x-1/2 whitespace-nowrap bg-primary px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral xl:bottom-auto xl:left-auto xl:right-full xl:top-1/2 xl:mb-0 xl:mr-2 xl:-translate-y-1/2 xl:translate-x-0 xl:group-hover:block xl:group-focus-visible:block"
            >
              {`connect: ${social.label}`}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
