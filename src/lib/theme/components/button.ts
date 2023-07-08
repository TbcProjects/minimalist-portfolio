import { cva, type RecipeVariantProps } from "../../../../styled-system/css";

export const button = cva({
  base: {
    cursor: "pointer",
    textStyle: "button",
  },
  variants: {
    variant: {
      primary: {
        layerStyle: "primaryButton",
        height: "48px",
        minW: "200px",
      },
    },
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
