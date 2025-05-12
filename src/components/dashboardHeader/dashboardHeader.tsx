"use client";

import { ReactNode, useContext } from "react";
import clsx from "clsx";

import { ProfileContext } from "@/contexts/profileContext";
import { Button } from "../button/button";
import { useUserAPI } from "@/services/hooks/auth/currentUser";

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
  const { logout } = useUserAPI();
  const { profile } = useContext(ProfileContext);
  const { username } = profile;

  return (
    <header
      className={clsx(
        "flex items-center h-16 justify-between border-b border-neutral-default-3 bg-white px-8",
        className
      )}
    >
      <div className="text-sm hidden lg:flex gap-1">
        Wellcome <span className="font-semibold">{username}</span>
      </div>
      <div className="rounded-sm text-[16px] font-semibold bg-background p-2">
        {title}
      </div>
      <div>
        <Button onClick={logout} variant="info">
          Log out
        </Button>
      </div>
    </header>
  );
};
