import { styled } from "../../../../styled-system/jsx";

export const Button = styled("button", {
  base: {
    py: "17px",
    px: "34px",
    cursor: "pointer",
    textStyle: "button",
  },
  variants: {
    variant: {
      primary: {
        layerStyle: "button",
      },
      secondary: {
        bg: "gray.500",
        color: "white",
      },
    },
  },
});
