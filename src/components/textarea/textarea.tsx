import { TextareaHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ hasError = false, disabled, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        rows={4}
        className={clsx(
          "w-full rounded-lg px-3 py-2 text-sm outline-none transition bg-transparent resize-y",
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
