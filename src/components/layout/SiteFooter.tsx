"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { css } from "../../../styled-system/css";
import { container, flex } from "../../../styled-system/patterns";

import SiteLogo from "../icons/SiteLogo";
import Social from "../navigation/Social";
import MenuLink from "@components/navigation/MenuLink";

import { INavigationContent } from "@app/layout";
import { ISocialContent } from "@app/layout";

import { MenuItem } from "@typesDef/general";

interface SiteFooterProps {
  navigationLinks: INavigationContent;
  socialLinks: ISocialContent;
}

export default function SiteFooter({
  navigationLinks,
  socialLinks,
}: SiteFooterProps) {
  const menuItems = navigationLinks.navigationLinks.map((item, index) => {
    return (
      <MenuLink
        key={item._modelApiKey}
        href={item.linkUrl || ""}
        label={item.linkName || ""}
      />
    );
  });

  return (
    <footer className={css({ layerStyle: "darkBlueOnWhite" })}>
      <div
        className={container({
          display: "flex",
          flexDirection: { base: "column", md: "row" },
          alignItems: "center",
          maxW: "breakpoint-lg",
          px: { base: "32px", md: "38px", lg: "0" },
          py: { base: "56px", md: "24px" },
          textAlign: "center",
          textStyle: "button",
        })}
      >
        <div
          className={css({
            marginRight: { base: "0", md: "48px" },
          })}
        >
          <SiteLogo variant="light" />
        </div>

        <ul
          className={flex({
            direction: { base: "column", md: "row" },
            flexGrow: "1",
            alignItems: "center",
            gap: { base: "32px", md: "42px" },
            my: { base: "40px", md: "0" },
          })}
        >
          {menuItems}
        </ul>
        <Social socialLinks={socialLinks} />
      </div>
    </footer>
  );
}
