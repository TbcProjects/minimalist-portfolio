"use client";

import { useState } from "react";

import MenuLink from "./MenuLink";
import { Squash as Hamburger } from "hamburger-react";

import { css } from "../../../styled-system/css";

import type { INavigationContent } from "@app/layout";

interface MobileMenuProps {
  navigationLinks: INavigationContent;
}

export default function MobileMenu({ navigationLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = navigationLinks.navigationLinks.map((item) => {
    return (
      item.linkUrl &&
      item.linkName && (
        <MenuLink
          key={item._modelApiKey}
          href={item.linkUrl}
          label={item.linkName}
        />
      )
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
          <ul
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            })}
          >
            {menuItems}
          </ul>
        </nav>
      ) : null}
    </nav>
  );
}
