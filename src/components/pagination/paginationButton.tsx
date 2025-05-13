import React, { ReactNode } from "react";
import clsx from "clsx";
import EllipsisSVG from "@/icons/ellipsis";

type Props = {
  label: string | number | ReactNode;
  disabled?: boolean;
  currentPage?: string | number;
  onClick?: () => void;
};

export default function PaginationButton({
  label,
  disabled,
  currentPage = "",
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "min-w-8 h-8 p-1 rounded-lg flex items-center justify-center",
        label === currentPage && "bg-primary-fg text-white",
        label === currentPage &&
          disabled &&
          "!bg-primary-disable-bg-2 text-white",
        label !== currentPage &&
          "hover:bg-background active:bg-neutral-press-bg-1",
        disabled && "text-neutral-disable-fg-1 cursor-not-allowed"
      )}
    >
      {label === "..." ? <EllipsisSVG /> : label}
    </button>
  );
}
