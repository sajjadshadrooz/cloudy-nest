import { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

import CheckCircleIcon from "@/icons/checkCircle";
import { SpinnerIcon } from "@/icons/spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "info";
  icon?: boolean;
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
        "rounded-xl p-2.5 flex items-center justify-center",
        {
          "bg-primary-fg text-white text-sm font-semibold hover:bg-primary-hover-bg-2 active:bg-primary-press-bg-2":
            variant === "primary",
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500":
            variant === "danger",
          "bg-sky-100 text-sky-800 hover:bg-sky-200 focus:ring-sky-400":
            variant === "info",

          "w-10 h-10 p-2": isIconOnly,
        },
        loading && "pointer-events-none",
        disabled ? "" : "cursor-pointer",
        className
      )}
    >
      {loading ? <SpinnerIcon /> : icon ? <CheckCircleIcon /> : children}
    </button>
  );
};
