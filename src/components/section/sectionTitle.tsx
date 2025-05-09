import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description?: string;
}

export const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-2 bg-transparent">
      <h3>{title}</h3>
      {description && (
        <p className="text-sm text-neutral-default-1">{description}</p>
      )}
    </div>
  );
};
