import { cva, type RecipeVariantProps } from '../../../../styled-system/css';

export const button = cva({
  base: {
    height: '48px',
    cursor: 'pointer',
    textStyle: 'button',
    maxW: '200px',
  },
  variants: {
    variant: {
      primary: {
        layerStyle: 'primaryButton',
        maxW: '200px',
      },
      secondary: {
        layerStyle: 'secondaryButton',
      },
    },
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
