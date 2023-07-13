import MenuLink from "./MenuLink";

import { css } from "../../../styled-system/css";
import { hstack } from "../../../styled-system/patterns";

import type { INavigationContent } from "@app/layout";

interface DeskTopMenuProps {
  navigationLinks: INavigationContent;
}

export default function DesktopMenu({ navigationLinks }: DeskTopMenuProps) {
  const menuItems = navigationLinks.navigationLinks.map((item) => {
    return (
      item.linkUrl &&
      item.linkName && (
        <MenuLink
          key={item._modelApiKey || ""}
          href={item.linkUrl || ""}
          label={item.linkName || ""}
        />
      )
    );
  });

  return (
    <nav className={css({ display: { base: "none", md: "block" } })}>
      <ul className={hstack({ gap: "42px" })}>{menuItems}</ul>
    </nav>
  );
}
