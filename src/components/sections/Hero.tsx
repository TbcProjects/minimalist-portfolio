import Image from "next/image";

import { css } from "../../../styled-system/css";
import { container, aspectRatio } from "../../../styled-system/patterns";

import ButtonLink from "@components/shared/button/ButtonLink";

import { IHeroContent } from "@app/page";

interface HeroProps {
  content: IHeroContent;
}

export default function Hero({ content }: HeroProps) {
  const { heroHeadline, heroImage, buttonLabel, buttonLink } = content;

  return (
    <section
      className={container({
        maxW: "breakpoint-lg",
        px: { base: "32px", md: "38px", lg: "0" },
        pb: { base: "96px", md: "150px" },
      })}
    >
      <div
        className={css({
          position: "relative",
          maxH: { md: "600px" },
        })}
      >
        <div
          className={aspectRatio({
            ratio: 16 / 9,
            pos: "relative",
            minH: { base: "271px", sm: "600px" },
            width: "100%",
          })}
        >
          {heroImage?.url && heroImage.alt && (
            <Image
              src={heroImage.url}
              alt={heroImage.alt}
              // objectFit="cover"
              // objectFit={"contain"}
              fill={true}
            />
          )}
        </div>
        <div
          className={css({
            position: { base: "static", md: "relative" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "flex-start",
            w: { md: "80%", lg: "40%" },
            h: { md: "278px", lg: "357px" },
            bottom: { md: "278px", lg: "357px" },
            background: "white",
            paddingRight: { md: "125px", lg: "55px" },
          })}
        >
          {heroHeadline && (
            <h1
              className={css({
                textStyle: "h1",
                marginBottom: { md: "53px" },
                my: "32px",
              })}
            >
              {heroHeadline}
            </h1>
          )}
          {buttonLink && buttonLabel && (
            <ButtonLink variant="primary" href={buttonLink}>
              {buttonLabel}
            </ButtonLink>
          )}
        </div>
      </div>
      <div
        className={css({
          display: { base: "none", lg: "block" },
          border: "1px solid black",
          width: "0",
          height: "600px",
          position: "absolute",
          top: "0",
          left: "-69px",
        })}
      ></div>
    </section>
  );
}
