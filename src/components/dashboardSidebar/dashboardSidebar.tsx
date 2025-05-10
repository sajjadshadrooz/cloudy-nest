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
      <div className="md:hidden p-2">
        <button onClick={toggle}>{isOpen ? "X" : "|||"}</button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={toggle}
        />
      )}

      <aside
        className={clsx(
          "fixed border-l-1 border-neutral-default-3 z-40 top-0 sidebar-desktop bottom-0 left-0 w-60 bg-white shadow-lg p-4 transition-transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:static md:shadow-none"
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
