import { cva, type RecipeVariantProps } from '../../../../styled-system/css';

export const button = cva({
  base: {
    height: '48px',
    cursor: 'pointer',
    textStyle: 'button',
  },
  variants: {
    variant: {
      primary: {
        layerStyle: 'primaryButton',
      },
      secondary: {
        layerStyle: 'secondaryButton',
      },
    },
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
