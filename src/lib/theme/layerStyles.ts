// @ts-nocheck
import { defineLayerStyles } from '@pandacss/dev';

export const layerStyles: LayerStyle = defineLayerStyles({
  primaryButton: {
    value: {
      color: '#FFF',
      background: 'japanese_indigo',
      '& span': {
        background: 'yankee_blue',
      },
      _hover: {
        background: 'cyan',
        '& span': {
          background: 'pine',
        },
        '& svg path': {
          stroke: 'white',
        },
      },
    },
  },
});
