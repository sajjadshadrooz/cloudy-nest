import { ReactNode } from "react";
import { SectionTitle } from "./sectionTitle";

interface SectionTitleBoxProps {
  title: string;
  description?: string;
}

export const SectionTitleBox = ({
  title,
  description,
}: SectionTitleBoxProps) => {
  return (
    <div className="w-full p-6 bg-transparent">
      <SectionTitle title={title} description={description} />
    </div>
  );
};
