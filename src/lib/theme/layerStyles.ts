// @ts-nocheck
import { defineLayerStyles } from "@pandacss/dev";

export const layerStyles: LayerStyle = defineLayerStyles({
  primaryButton: {
    value: {
      color: "#FFF",
      background: "japanese_indigo",
      _hover: {
        background: "cyan",
        "& span": {
          background: "cyan",
        },
        "& svg path": {
          stroke: "white",
        },
      },
    },
  },
});
