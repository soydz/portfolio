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
    { icon: <GithubIcon className="size-6"/>, url: githubUrl, label: "github" },
    { icon: <LinkedinIcon className="size-6"/>, url: linkedinUrl, label: "linkedin" },
    { icon: <Mail size={32} />, url: mailUrl, label: "mail" },
  ]

  return (
    <div className="flex flex-row gap-6 items-center justify-center lg:flex-col ">
      {socials.map((social) => (
        <div key={social.label} className="relative">
          <a
            href={social.url}
            target={social.label.toLocaleLowerCase() === "mail" ? undefined : "_blank" }
            className="group text-txt-main hover:text-primary transition-all duration-200 hover:scale-125"
          >
            {social.icon}

            {/*tooltip - muestra una pequeña explicación de lo que hace el botón*/}
            <span className="absolute right-full lg:-top-0.5 mr-3 px-2 py-1 bg-primary text-white font-mono hidden group-hover:block whitespace-nowrap z-50">
              {`connect: ${social.label}`}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
