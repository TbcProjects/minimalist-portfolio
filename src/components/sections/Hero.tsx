import Image from "next/image";

import { css } from "../../../styled-system/css";
import { container } from "../../../styled-system/patterns";

import ButtonLink from "@components/shared/button/ButtonLink";

import { IHeroContent } from "@app/page";

interface HeroProps {
  content: IHeroContent;
}

export default function Hero({ content }: HeroProps) {
  const { heroHeadline, heroImage, buttonLabel, buttonLink } = content;

  return (
    <div
      className={container({
        maxW: "breakpoint-lg",
        px: { base: "32px", md: "38px", lg: "0" },
        pb: { md: "150px" },
      })}
    >
      <div
        className={css({
          position: "relative",
          maxH: "600px",
        })}
      >
        <div
          className={css({
            pos: "relative",
            minH: { md: "600px" },
            width: "100%",
          })}
        >
          {heroImage?.url && heroImage.alt && (
            <Image
              src={heroImage.url}
              alt={heroImage.alt}
              objectFit="cover"
              fill={true}
            />
          )}
        </div>
        <div
          className={css({
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "flex-start",
            bottom: "357px",
            background: "white",
            height: "357px",
            w: "40%",
            paddingRight: "55px",
          })}
        >
          {heroHeadline && (
            <h1
              className={css({
                textStyle: "h1",
                marginBottom: "53px",
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
          border: "1px solid black",
          width: "0",
          height: "600px",
          position: "absolute",
          top: "0",
          left: "-69px",
        })}
      ></div>
    </div>
  );
}
