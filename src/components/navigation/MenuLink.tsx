"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { css } from "../../../styled-system/css";

import type { SystemStyleObject } from "../../../styled-system/types";

interface MenuLinkProps {
  key: string;
  label: string;
  href: string;
  linkStyles?: SystemStyleObject;
}

export default function MenuLink({
  key,
  href,
  label,
  linkStyles,
}: MenuLinkProps) {
  const path = usePathname();
  const isPath = (itemPath: string) => path === itemPath;

  return (
    <li
      key={key}
      className={css({
        ...linkStyles,
        textStyle: "button",
        color: href && isPath(href) ? "cyan" : "",
        _hover: {
          opacity: href && isPath(href) ? "1" : ".5",
        },
      })}
    >
      {href && <Link href={href}>{label}</Link>}
    </li>
  );
}
