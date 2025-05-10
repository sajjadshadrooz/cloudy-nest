export interface SidebarItem {
  label: string;
  href: string;
}

export const sidebarItems: SidebarItem[] = [
  { label: "All Articles", href: "/articles" },
  { label: "New Article", href: "/articles/create" },
];
