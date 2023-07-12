import Link from "next/link";

import SiteLogo from "../icons/SiteLogo";
import DesktopMenu from "../navigation/DesktopMenu";
import MobileMenu from "../navigation/MobileMenu";

import { css } from "../../../styled-system/css";

import { container, hstack } from "../../../styled-system/patterns";

import type { INavigationContent } from "@app/layout";

interface SiteHeaderProps {
  navigationLinks: INavigationContent;
}

export default function SiteHeader({ navigationLinks }: SiteHeaderProps) {
  return (
    <header
      className={container({
        position: "relative",
        maxW: "breakpoint-lg",
        px: { base: "32px", md: "38px", lg: "0" },
      })}
    >
      <div className={hstack({ justify: "space-between" })}>
        <Link href="/">
          <div className={css({ py: { base: "32px", md: "61px" } })}>
            <SiteLogo variant="dark" />
          </div>
        </Link>

        <DesktopMenu navigationLinks={navigationLinks} />
        <MobileMenu />
      </div>
    </header>
  );
}
