import { SidebarNavItem } from "@/types";
import { Home, Packages } from "tabler-icons-react";

export const adminSidebarConfig: SidebarNavItem[] = [
  {
    title: "Home",
    href: "home",
    icon: Home,
  },
  {
    title: "Packages",
    icon: Packages,
    href: "/admin/packages",
  },
  {
    title: "Products",
    icon: Packages,
    href: "/admin/packages",
  },
];
