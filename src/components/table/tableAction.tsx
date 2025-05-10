"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "../button/button";
import EllipsisSVG from "@/icons/ellipsis";
import Menu from "../menu/menu";

type Action = {
  label: string;
  onClick: () => void;
};

type Props = {
  actions: Action[];
};

export default function TableActions({ actions }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        variant="info"
        icon={<EllipsisSVG />}
      />
      {open && (
        <div className="absolute right-10 top-10 mt-2 z-10">
          <Menu items={actions} loading={true} />
        </div>
      )}
    </div>
  );
}
