"use client";

import React from "react";
import clsx from "clsx";
import { ChevronLeftIcon } from "@/icons/chevronLeft";
import ChevronRightIcon from "@/icons/chevronRight";
import EllipsisSVG from "@/icons/ellipsis";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}: Props) {
  const createPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) pages.push(1);
      if (currentPage > 4) pages.push("...");

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) pages.push("...");
      if (currentPage < totalPages - 2) pages.push(totalPages);
    }

    return pages;
  };

  const handleClick = (page: number | string) => {
    if (typeof page === "number" && page !== currentPage && !disabled) {
      onPageChange(page);
    }
  };

  return (
    <div className="w-full flex items-center justify-end">
      {" "}
      <div className="w-fit flex items-center gap-2 border border-neutral-default-2 rounded-lg p-1 font-semibold text-sm">
        <button
          className={clsx(
            "px-2",
            disabled && "text-gray-300 cursor-not-allowed"
          )}
          onClick={() => handleClick(currentPage - 1)}
          disabled={disabled || currentPage === 1}
        >
          <ChevronLeftIcon />
        </button>

        {createPages().map((page, i) => (
          <button
            key={i}
            onClick={() => handleClick(page)}
            disabled={disabled || page === "..."}
            className={clsx(
              "min-w-8 h-8 p-1 rounded-lg flex items-center justify-center",
              page === currentPage && "bg-primary-fg text-white",
              page === currentPage &&
                disabled &&
                "bg-primary-disable-bg-2 text-white",
              page !== currentPage &&
                "hover:bg-background active:bg-neutral-press-bg-1",
              disabled && "text-neutral-disable-fg-1 cursor-not-allowed"
            )}
          >
            {page === "..." ? <EllipsisSVG /> : page}
          </button>
        ))}

        <button
          className={clsx(
            "px-2",
            disabled && "text-gray-300 cursor-not-allowed"
          )}
          onClick={() => handleClick(currentPage + 1)}
          disabled={disabled || currentPage === totalPages}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
