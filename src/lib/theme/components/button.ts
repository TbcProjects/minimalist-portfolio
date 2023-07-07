import { cva } from "../../../../styled-system/css";

export const button = cva({
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
