"use client";

import { css } from "styled-system/css";
import { container, vstack, flex } from "styled-system/patterns";
import { button } from "@lib/theme/components/button";
import { input } from "@lib/theme/components/input";

export default function ContactForm() {
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
          pt: { base: "32px" },
          pb: { base: "94px" },
        })}
      >
        <h1
          className={css({
            flex: "1 1 auto",
            textStyle: "h2",
            mb: "32px",
          })}
        >
          Contact Me
        </h1>
        <form
          action=""
          className={vstack({
            alignItems: "flex-start",
            w: { lg: "57%" },
          })}
        >
          <label htmlFor="name">Name</label>
          <input
            className={input()}
            type="text"
            name="name"
            placeholder="John Smith"
            autoComplete="on"
          />

          <label htmlFor="email">Email</label>
          <input
            className={input()}
            type="email"
            name="email"
            placeholder="email@example.com"
          />

          <label htmlFor="message">Message</label>
          <textarea name="message" className={input()} />

          <button
            className={`${button({
              variant: "primary",
            })} ${css({ mt: "24px" })}`}
            onClick={() => console.log("submit")}
          >
            {"Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
