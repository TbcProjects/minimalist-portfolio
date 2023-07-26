import { cva, type RecipeVariantProps } from "styled-system/css";

export const input = cva({
  base: {
    w: "100%",
    border: "1px solid #D9D9D9",
    p: "16px",
    background: "#D9D9D9",
    color: "greyDarkBlue",
    _placeholder: {
      color: "#9E9EA3",
    },
    _focus: {
      border: "1px solid #9E9EA3",
      outline: "none",
    },
  },
});

export type InputVariants = RecipeVariantProps<typeof input>;
