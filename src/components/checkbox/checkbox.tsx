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
    <label className="inline-flex items-center space-x-2">
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className={`
          appearance-none w-6 h-6 rounded-md border
          flex items-center justify-center
          transition-colors duration-200
          ${
            disabled
              ? "bg-gray-100 border-gray-300 cursor-not-allowed"
              : checked
              ? "bg-teal-600 border-teal-600 text-white"
              : "bg-white border-gray-400 hover:border-teal-500"
          }
        `}
      />
      {label}
      <span className="-ml-12 w-6 h-6 flex items-center justify-center pointer-events-none">
        {indeterminate ? (
          <div className="w-3 h-0.5 bg-white" />
        ) : checked ? (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        ) : null}
      </span>
    </label>
  );
};
