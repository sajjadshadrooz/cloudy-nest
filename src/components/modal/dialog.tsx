import CheckCircleIcon from "@/icons/checkCircle";
import WarningIcon from "@/icons/warning";

export const Dialog = ({
  negative = false,
  dialog,
}: {
  negative?: boolean;
  dialog?: string;
}) => (
  <div className="w-full flex flex-col items-center justify-center gap-2">
    <div
      className={`p-4 rounded-full ${
        negative
          ? "bg-error-bg text-error-fg"
          : "bg-success-default-bg-1 text-success-default-fg-1"
      }`}
    >
      {negative ? <WarningIcon /> : <CheckCircleIcon />}
    </div>
    {dialog}
  </div>
);
