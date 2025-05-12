import { usePathname } from "next/navigation";
import Link from "next/link";

import clsx from "clsx";

interface SidebarItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const SidebarItem = ({ href, label, onClick }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2 p-2 text-[16px] font-semibold",
        isActive
          ? "bg-primary-bg hover:bg-primary-hover-bg-1 text-primary-fg hover:text-primary-hover-bg-2"
          : "hover:bg-background hover:text-neutral-hover-fg-1 active:bg-neutral-press-bg-1 active:text-black"
      )}
    >
      <span>{label}</span>
    </Link>
  );
};
