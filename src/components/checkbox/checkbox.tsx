import CheckIcon from "@/icons/check";
import { useEffect, useRef } from "react";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox = ({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className="relative inline-flex items-center space-x-2">
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className={`
          appearance-none w-5 h-5 rounded-md
          flex items-center justify-center
          transition-colors duration-200
          ${
            disabled && checked
              ? "bg-primary-disable-bg-2 text-white cursor-not-allowed"
              : disabled
              ? "bg-gray-100 border-gray-300 cursor-not-allowed"
              : checked
              ? "bg-primary-fg hover:bg-primary-hover-bg-2 active:bg-primary-press-bg-2 text-white"
              : "bg-white border-2 border-neutral-default-1 hover:bg-background active:bg-neutral-press-bg-1 hover:border-neutral-hover-st-1 active:border-neutral-press-st-1"
          }
        `}
      />
      <span className=" w-5 h-5 absolute left-0 flex items-center justify-center pointer-events-none">
        {indeterminate ? (
          <div className="w-3 h-0.5 bg-white" />
        ) : checked ? (
          <CheckIcon />
        ) : null}
      </span>
      {label}
    </label>
  );
};
