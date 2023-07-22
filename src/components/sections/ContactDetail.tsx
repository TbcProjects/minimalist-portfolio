import Social from "@components/navigation/Social";

import { css } from "styled-system/css";
import { container, flex } from "styled-system/patterns";

import { IContactDetailContent } from "@app/contact/page";
import { ISocialContent } from "@app/layout";

interface ContactDetailProps {
  content: IContactDetailContent;
  links: ISocialContent;
}

export default function ContactDetail({ content, links }: ContactDetailProps) {
  const { heading, body } = content;

  return (
    <section
      className={container({
        maxW: "breakpoint-lg",
        px: { base: "32px", md: "38px", lg: "0" },
      })}
    >
      <div
        className={flex({
          direction: { base: "column", lg: "row" },
          py: { base: "25px" },
          borderTop: "1px solid rgba(151, 151, 151, .25)",
          borderBottom: "1px solid rgba(151, 151, 151, .25)",
        })}
      >
        <div
          className={css({
            flex: "1 1 auto",
            textStyle: "h2",
            mb: "24px",
          })}
        >
          {heading && <h1>{heading}</h1>}
        </div>
        <div
          className={css({
            w: { lg: "57%" },
            textStyle: "bodyLg",
            marginBottom: "24px",
          })}
        >
          {body && (
            <p
              className={css({
                marginBottom: "24px",
              })}
            >
              {body}
            </p>
          )}
          <Social socialLinks={links} iconColor="#33323D" />
        </div>
      </div>
    </section>
  );
}
