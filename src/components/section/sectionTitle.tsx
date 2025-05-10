import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description?: string;
}

export const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-2 bg-transparent">
      <div className="text-lg font-semibold">{title}</div>
      {description && (
        <p className="text-sm text-neutral-default-1">{description}</p>
      )}
    </div>
  );
};
