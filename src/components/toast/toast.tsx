type ToastType = "success" | "error";

interface ToastProps {
  title: string;
  message: string;
  type: ToastType;
}

export const Toast = ({ title, message, type }: ToastProps) => {
  return (
    <div
      className={`px-4 py-3 rounded-xl shadow-lg text-sm flex items-center gap-1
                ${
                  type === "success" &&
                  "bg-success-default-bg-1 text-success-default-fg-1"
                }
                ${type === "error" ? "bg-error-bg text-error-fg" : ""}`}
    >
      <div className="font-semibold">{title}</div>
      <div className="text-xs">{message}</div>
    </div>
  );
};
