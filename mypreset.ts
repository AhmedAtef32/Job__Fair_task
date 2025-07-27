import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  components: {
    drawer: {
      colorScheme: {
        light: {
          title: {
            fontWeight: 'bold',
          },
          root: {
            background: 'white',
            color: 'black',
          },
        },
        dark: {
          root: {
            background: '#101828',
            color: 'white',
          },
        },
      },
      root: {
        borderColor: 'transparent',
      },
    },
  },
});
