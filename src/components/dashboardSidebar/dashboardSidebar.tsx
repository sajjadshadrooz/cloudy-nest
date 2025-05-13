"use client";

import { useState } from "react";

import clsx from "clsx";

import { sidebarItems } from "@/data/sidebarItems";
import { SidebarItem } from "./sidebarItem";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="relative w-fit lg:hidden">
        <div className="absolute top-0 -mt-13 p-2">
          <button className="cursor-pointer" onClick={toggle}>
            |||
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggle}
        />
      )}

      <aside
        className={clsx(
          "fixed border-l-1 border-neutral-default-3 z-40 top-0 sidebar-desktop h-auto bottom-0 left-0 w-60 bg-white shadow-lg p-4 transition-transform lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:static lg:shadow-none"
        )}
      >
        <nav className="flex flex-col gap-2">
          {sidebarItems.map((item, index) => {
            return (
              <SidebarItem
                key={index}
                href={item.href}
                label={item.label}
                onClick={() => setIsOpen(false)}
              />
            );
          })}
        </nav>
      </aside>
    </>
  );
}
