import { Separator } from "../atoms";
import {
  SocialMenu, SocialMenuProps, Nav,
  NavItem,
} from "../molecules";

export interface SidebarRightProps {
  socialMenu: SocialMenuProps;
  navItems: NavItem[];
}

// iconos de las secciones de la web y de las redes sociales
export function SidebarRight({ socialMenu, navItems }: Readonly<SidebarRightProps>) {
  return (
    <div className="sticky top-0 h-auto w-full flex flex-row justify-around items-center lg:h-screen  lg:flex-col lg:w-12 py-10 pr-4">
      <div className="flex flex-row justify-center w-full gap-8 lg:flex-col">
        <Nav items={navItems} />
        <div className="hidden lg:block lg:my-4">
          <Separator />
        </div>
        <SocialMenu
          githubUrl={socialMenu.githubUrl}
          linkedinUrl={socialMenu.linkedinUrl}
          mailUrl={socialMenu.mailUrl}
        />
      </div>
    </div>
  );
}
