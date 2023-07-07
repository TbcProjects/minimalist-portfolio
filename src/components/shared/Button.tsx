"use client";

import { button } from "@/lib/theme/components/button";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      onClick={() => console.log("click")}
      className={button({ variant: "primary" })}
    >
      {children}
    </button>
  );
}
