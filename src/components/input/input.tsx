import { InputHTMLAttributes, forwardRef } from "react";

import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, disabled, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={clsx(
          "w-full rounded-lg px-3 py-2 text-sm outline-none transition bg-transparent",
          "placeholder:text-neutral-default-2",
          disabled && " text-neutral-default-2 cursor-not-allowed",
          hasError
            ? "border border-error-fg"
            : "border border-neutral-default-2 focus:border-primary-fg hover:border-neutral-hover-2",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
