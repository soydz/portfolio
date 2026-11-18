import { LucideIcon } from "lucide-react";
import Link from "next/link";

// props de cada link
export interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface NavProps {
  items: NavItem[];
}

export function Nav({ items }: Readonly<NavProps>) {
  return (
    <nav className="flex flex-row items-center justify-center xl:flex-col">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="relative flex items-center justify-center">
            <Link
              href={item.href}
              aria-label={item.label}
              className="group flex size-10 items-center justify-center text-txt-main/70 transition-colors hover:text-primary xl:size-11"
            >
              <Icon className="size-5 xl:size-[22px]" strokeWidth={1.75} aria-hidden="true" />

              {/*Tooltip - con hover o foco del icono se muestra un texto*/}
              <span
                data-tooltip
                className="pointer-events-none absolute bottom-full left-1/2 mb-1 hidden -translate-x-1/2 whitespace-nowrap bg-primary px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral xl:bottom-auto xl:left-auto xl:right-full xl:top-1/2 xl:mb-0 xl:mr-2 xl:-translate-y-1/2 xl:translate-x-0 xl:group-hover:block xl:group-focus-visible:block"
              >
                {`cd /${item.label.toLocaleLowerCase()}`}
              </span>
            </Link>
          </div>
        )
      })}
    </nav>
  );
}
