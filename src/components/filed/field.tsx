import { ReactNode } from "react";

interface FieldError {
  status: string;
  message: string;
}

interface FieldProps {
  label: string;
  required?: boolean;
  error?: FieldError;
  children: ReactNode;
}

export const Field = ({ label, required, error, children }: FieldProps) => {
  const hasError = error?.status;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">
        {label} {required && <span className="text-error-fg">*</span>}
      </label>

      {children}

      {hasError && (
        <div>
          <p className={`text-xs text-error-fg`}>{error?.message}</p>
        </div>
      )}
    </div>
  );
};
