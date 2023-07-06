import { defineLayerStyles } from "@pandacss/dev";

export const layerStyles = defineLayerStyles({
  button: {
    value: {
      background: "#33323D",
      color: "#FFF",
      _hover: {
        background: "#FFF",
        color: "#33323D",
      },
    },
  },
});
