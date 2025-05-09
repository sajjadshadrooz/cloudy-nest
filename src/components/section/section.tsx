import { ReactNode } from "react";
import { SectionTitleBox } from "./sectionTitleBox";

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export const Section = ({ title, description, children }: SectionProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg">
      <SectionTitleBox title={title} description={description} />
      <div className="p-6 border-t-1 border-neutral-default-3">{children}</div>
    </div>
  );
};
