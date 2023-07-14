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

  console.log(image?.url, image?.alt);

  return (
    <section
      className={container({
        display: "flex",
        flexDirection: "row",
        gap: "125px",
        maxW: "breakpoint-lg",
        px: { base: "32px", md: "38px", lg: "0" },
        pb: { md: "150px" },
        color: "greyDarkBlue",
      })}
    >
      {/* <div
        className={css({
          position: "relative",
          maxH: { md: "600px" },
        })}
      > */}
      <div
        className={aspectRatio({
          ratio: 16 / 9,
          pos: "relative",
          // h: { base: "271px", sm: "600px" },
          minW: "540px",
          overflow: "hidden",
          flex: "1 1 auto",
        })}
      >
        {image?.url && image.alt && (
          <Image
            src={image.url}
            alt={image.alt}
            // objectFit="cover"
            // objectFit={"contain"}
            fill={true}
          />
        )}
      </div>
      {/* </div> */}
      <div
        className={css({
          flex: "1 1 auto",
          borderTop: "1px solid #979797",
          borderBottom: "1px solid #979797",
          py: "49px",
          mr: "97px",
        })}
      >
        <h1
          className={css({
            textStyle: "h2",
            marginBottom: "28px",
          })}
        >
          {headline}
        </h1>
        <p
          className={css({
            textStyle: "bodyLg",
            marginBottom: "24px",
          })}
        >
          {textContent}
        </p>
        {buttonLink && buttonLabel && (
          <ButtonLink variant="secondary" href={buttonLink}>
            {buttonLabel}
          </ButtonLink>
        )}
      </div>
    </section>
  );
}
