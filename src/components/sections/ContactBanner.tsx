import { css } from "styled-system/css";
import { container } from "styled-system/patterns";

import ButtonLink from "@components/shared/button/ButtonLink";
import { IContactBannerContent } from "@app/page";

interface ContactBannerProps {
  content: IContactBannerContent;
}

export default function ContactBanner({ content }: ContactBannerProps) {
  const { headline, buttonLabel, buttonLink } = content;

  return (
    <section
      className={container({
        display: "flex",
        flexDirection: { base: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { md: "32px" },
        maxW: "breakpoint-lg",
        py: { lg: "56px" },
        px: { base: "32px", md: "38px", lg: "0" },
        pb: { base: "80px", md: "96px", lg: "150px" },
      })}
    >
      <h1
        className={css({
          textStyle: "h2",
          textAlign: { base: "center", md: "left" },
          mb: { base: "40px", md: "0" },
          mr: { base: "15px", lg: "0" },
        })}
      >
        {headline}
      </h1>
      <div
        className={css({
          display: { base: "none", md: "block" },
          border: "1px solid rgba(151, 151, 151, .25)",
          minW: { md: "113px", lg: "534px" },
        })}
      ></div>
      {buttonLink && buttonLabel && (
        <ButtonLink variant="secondary" href={buttonLink}>
          {buttonLabel}
        </ButtonLink>
      )}
    </section>
  );
}
