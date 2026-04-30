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
    <nav className="flex flex-row items-center justify-center gap-4 lg:flex-col">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="relative flex items-center justify-center">
            <Link
              href={item.href}
              aria-label={item.label}
              className="group text-txt-main py-2"
            >
              <Icon size={28} className="text-primary hover:scale-125 hover:text-txt-main" />

              {/*Tooltip - con hover del icono se muestra un texto*/}
              <span
                className="absolute right-full lg:-top-0.5 mr-3 px-2 py-1 bg-primary text-white font-mono hidden group-hover:block whitespace-nowrap shadow-lg z-50"
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
