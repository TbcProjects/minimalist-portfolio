"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { css } from "../../../styled-system/css";
import { container, flex } from "../../../styled-system/patterns";

import SiteLogo from "../icons/SiteLogo";
import Social from "../navigation/Social";

import { MenuItem } from "@/types/general";

interface SiteFooterProps {}

export default function SiteFooter({}: SiteFooterProps) {
  const path = usePathname();
  const isPath = (itemPath: string) => path === itemPath;

  const socialData = ["TWITTER", "GITHUB", "LINKEDIN"];
  const menuContent: MenuItem[] = [
    { name: "HOME", src: "/" },
    { name: "PORTFOLIO", src: "/portfolio" },
    { name: "CONTACT ME", src: "/contact" },
  ];

  const menuItems = menuContent.map((item, index) => {
    return (
      <li
        key={index}
        className={css({
          marginBottom: { base: "32px", md: "0" },
          color: isPath(item.src) ? "cyan" : "",
        })}
      >
        <Link href={item.src}>{item.name}</Link>
      </li>
    );
  });

  return (
    <footer className={css({ layerStyle: "darkBlueOnWhite" })}>
      <div
        className={container({
          display: "flex",
          flexDirection: { base: "column", md: "row" },
          //   justifyContent: {base: 'center'},
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
            marginBottom: { base: "32px", md: "0" },
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
            gap: { base: "0", md: "42px" },
          })}
        >
          {menuItems}
        </ul>
        <Social />
      </div>
    </footer>
  );
}
