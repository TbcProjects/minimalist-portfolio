import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: { base: "40px", lg: "50px" },
      fontWeight: "700",
      lineHeight: "50px",
      letterSpacing: "-0.446px",
      fontFamily: "heading",
    },
  },
  h2: {
    value: {
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "42px",
      letterSpacing: "-0.357px",
      fontFamily: "heading",
    },
  },
  h3: {
    value: {
      fontSize: "32px",
      fontWeight: "400",
      lineHeight: "36px",
      letterSpacing: "-0.286px",
      fontFamily: "heading",
    },
  },
  bodyLg: {
    value: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "30px",
      fontFamily: "body",
    },
  },
  bodySm: {
    value: {
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "30px",
      fontFamily: "body",
    },
  },
  button: {
    value: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "normal",
      letterSpacing: "2px",
      fontFamily: "body",
      textTransform: "uppercase",
    },
  },
});
