import { ComponentProps } from "react";
import Link from "next/link";

import clsx from "clsx";

interface LinkButtonProps extends ComponentProps<typeof Link> {
  children: React.ReactNode;
  disabled?: Boolean;
  className?: string;
}

export const LinkButton = ({
  href,
  disabled,
  children,
  className = "",
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-bold",
        disabled
          ? "text-info-disable-fg-1 pointer-events-none"
          : "text-info-default-fg-1 hover:text-info-hover-fg-1 active:text-info-press-fg-1",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
