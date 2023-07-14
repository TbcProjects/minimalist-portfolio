import Image from "next/image";

import { css } from "styled-system/css";
import { container, aspectRatio } from "styled-system/patterns";

import ButtonLink from "@components/shared/button/ButtonLink";

import { IAboutMeContent } from "@app/page";

interface AboutMeProps {
  content: IAboutMeContent;
}

export default function AboutMe({ content }: AboutMeProps) {
  const { headline, image, buttonLink, buttonLabel, textContent } = content;

  return (
    <section
      className={container({
        display: "flex",
        flexDirection: { base: "column", md: "row" },
        gap: { md: "69px", lg: "125px" },
        maxW: "breakpoint-lg",
        px: { base: "32px", md: "38px", lg: "0" },
        pb: { md: "150px" },
        color: "greyDarkBlue",
      })}
    >
      <div
        className={aspectRatio({
          ratio: 16 / 9,
          pos: "relative",
          h: { smDown: "346px", smOnly: "689px" },
          minW: { base: "100%", md: "40%", lg: "50%" },
          overflow: "hidden",
          flex: "1 1 auto",
          mb: { smDown: "32px" },
        })}
      >
        {image?.url && image.alt && (
          <Image src={image.url} alt={image.alt} fill={true} />
        )}
      </div>
      <div
        className={css({
          flex: "1 1 auto",
          borderTop: "1px solid #979797",
          borderBottom: "1px solid #979797",
          py: "49px",
          mr: { lg: "8%" },
        })}
      >
        {headline && (
          <h1
            className={css({
              textStyle: "h2",
              marginBottom: "28px",
            })}
          >
            {headline}
          </h1>
        )}
        {textContent && (
          <p
            className={css({
              textStyle: "bodyLg",
              marginBottom: "24px",
            })}
          >
            {textContent}
          </p>
        )}

        {buttonLink && buttonLabel && (
          <ButtonLink variant="secondary" href={buttonLink}>
            {buttonLabel}
          </ButtonLink>
        )}
      </div>
    </section>
  );
}
