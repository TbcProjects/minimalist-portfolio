"use client";

import { useState } from "react";

import MenuLink from "./MenuLink";
import { Squash as Hamburger } from "hamburger-react";

import { css } from "../../../styled-system/css";

import type { MenuItem } from "@typesDef/general";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuContent: MenuItem[] = [
    { name: "HOME", src: "/" },
    { name: "PORTFOLIO", src: "/portfolio" },
    { name: "CONTACT ME", src: "/contact" },
  ];

  const menuItems = menuContent.map((item, index) => {
    return (
      <MenuLink
        key={item.name}
        href={item.src}
        label={item.name}
        linkStyles={{
          marginBottom: "32px",
          "&:last-child": {
            marginBottom: "0",
          },
        }}
      />
    );
  });

  return (
    <nav className={css({ display: { md: "none" } })}>
      <div>
        <Hamburger
          label="Show menu"
          toggled={isOpen}
          toggle={setIsOpen}
          size={22}
        />
      </div>
      {isOpen ? (
        <nav
          className={css({
            display: "flex",
            position: "absolute",
            zIndex: "99",
            top: "90px",
            right: "37px",
            color: "white",
            minW: "223px",
            padding: "40px 64px",
            textAlign: "center",
            layerStyle: "darkBlueOnWhite",
            textStyle: "button",
          })}
        >
          <ul>{menuItems}</ul>
        </nav>
      ) : null}
    </nav>
  );
}
