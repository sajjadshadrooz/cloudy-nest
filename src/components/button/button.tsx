import { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

import { SpinnerIcon } from "@/icons/spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "info";
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = ({
  type = "button",
  variant = "primary",
  icon,
  loading,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) => {
  const isIconOnly = !!icon && !children;

  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl p-2.5 flex items-center justify-center text-sm font-semibold",
        {
          "!p-0": isIconOnly,
          "bg-primary-fg text-white hover:bg-primary-hover-bg-2 active:bg-primary-press-bg-2 px-4":
            variant === "primary",
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 px-4":
            variant === "danger",
          "bg-transparent border border-neutral-default-2 hover:border-neutral-hover-2 active:border-neutral-press-2 px-4":
            variant === "info",

          "w-10 h-10 p-2": isIconOnly,
        },
        loading && "pointer-events-none",
        disabled ? "" : "cursor-pointer",
        className
      )}
    >
      {loading ? <SpinnerIcon /> : icon ? icon : children}
    </button>
  );
};
