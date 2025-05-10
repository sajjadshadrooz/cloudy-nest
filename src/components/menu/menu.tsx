"use client";

import React from "react";

import { SpinnerIcon } from "@/icons/spinner";
import MenuItem from "./menuItem";

type MenuItem = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

type Props = {
  items: MenuItem[];
  loading?: boolean;
};

export default function Menu({ items, loading = false }: Props) {
  return (
    <div className="w-48 rounded-xl shadow-lg bg-white p-2 space-y-2 text-sm">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          onClick={item.onClick}
          disabled={item.disabled}
        />
      ))}

      {loading && (
        <div className="flex items-center gap-2 p-2 text-neutral-default-1">
          <SpinnerIcon />
          loading...
        </div>
      )}
    </div>
  );
}
