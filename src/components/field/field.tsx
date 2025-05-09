import { ReactNode } from "react";

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

export const Field = ({ label, required, error, children }: FieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">
        {label} {required && <span className="text-error-fg">*</span>}
      </label>

      {children}

      {error && (
        <div>
          <p className={`text-xs text-error-fg font-bold`}>{error}</p>
        </div>
      )}
    </div>
  );
};
