"use client";

import React from "react";
import { ChevronLeftIcon } from "@/icons/chevronLeft";
import ChevronRightIcon from "@/icons/chevronRight";
import PaginationButton from "./paginationButton";

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
      <div className="w-fit flex items-center gap-2 border border-neutral-default-2 rounded-lg p-1 font-semibold text-sm">
        <PaginationButton
          label={<ChevronLeftIcon />}
          disabled={disabled || currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
        />
        {createPages().map((page, i) => (
          <PaginationButton
            key={i}
            currentPage={currentPage}
            label={page}
            isActive={page === currentPage}
            disabled={disabled}
            onClick={() => handleClick(page)}
          />
        ))}
        <PaginationButton
          label={<ChevronRightIcon />}
          disabled={disabled || currentPage === totalPages}
          onClick={() => handleClick(currentPage + 1)}
        />
      </div>
    </div>
  );
}
