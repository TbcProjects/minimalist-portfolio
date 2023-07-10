"use client";

import MenuLink from "./MenuLink";

import { css } from "../../../styled-system/css";
import { hstack } from "../../../styled-system/patterns";

import type { MenuItem } from "@/types/general";

interface DeskTopMenuProps {}

export default function DesktopMenu({}: DeskTopMenuProps) {
  const menuContent: MenuItem[] = [
    { name: "HOME", src: "/" },
    { name: "PORTFOLIO", src: "/portfolio" },
    { name: "CONTACT", src: "/contact" },
  ];

  const menuItems = menuContent.map((item) => {
    return <MenuLink key={item.name} href={item.src} label={item.name} />;
  });

  return (
    <nav className={css({ display: { base: "none", md: "block" } })}>
      <ul className={hstack({ gap: "42px" })}>{menuItems}</ul>
    </nav>
  );
}
