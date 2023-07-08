import { ReactNode } from "react";
import { css } from "../../../../styled-system/css";

import ArrowDownIcon from "@/components/icons/ArrowDownIcon";

import { button, ButtonVariants } from "@/lib/theme/components/button";

type ButtonLinkProps = ButtonVariants & {
  children: ReactNode;
};

export default function ButtonLink(props: ButtonLinkProps) {
  const { variant, children } = props;

  return (
    <button
      className={`${button({ variant: variant })} ${css({ display: "flex" })}`}
    >
      <span
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          w: "48px",
          h: "100%",
        })}
      >
        <ArrowDownIcon />
      </span>
      <div
        className={css({
          display: "flex",
          h: "100%",
          justifyContent: "center",
          alignItems: "center",
          flex: "1 1 auto",
        })}
      >
        {children}
      </div>
    </button>
  );
}
