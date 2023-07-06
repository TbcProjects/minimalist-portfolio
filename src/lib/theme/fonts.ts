import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
  heading: { value: "var(--font-ibrarra-real-nova)" },
  body: { value: [`var(--font-public-sans)`, "sans-serif"] },
});
