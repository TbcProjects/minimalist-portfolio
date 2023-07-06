import { styled } from "../../../../styled-system/jsx";

export const Input = styled("input", {
  base: {
    py: "9px",
    px: "16px",
    cursor: "pointer",
    textStyle: "button",
  },
  variants: {
    variant: {
      primary: {
        layerStyle: "button",
      },
      secondary: {
        background: "#D9D9D9",
        color: "black",
        overflow: "hidden",
      },
    },
  },
});
