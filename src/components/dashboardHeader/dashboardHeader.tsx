"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../button/button";

interface DashboardHeaderProps {
  title: string;
  action?: ReactNode;
  className?: string;
}

export const DashboardHeader = ({
  title,
  action,
  className,
}: DashboardHeaderProps) => {
  return (
    <header
      className={clsx(
        "flex items-center h-16 justify-between border-b border-neutral-default-3 bg-white px-8",
        className
      )}
    >
      <div className="text-sm">
        Wellcome <span className="font-semibold">User</span>
      </div>
      <div className="rounded-sm text-[16px] font-semibold bg-background p-2">
        {title}
      </div>
      <div>
        <Button variant="info">Log out</Button>
      </div>
    </header>
  );
};
