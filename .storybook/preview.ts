import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import '@radix-ui/themes/styles.css';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
      // Override the default light theme
      light: { ...themes.normal, appBg: 'black' }
    },
  },
};

export default preview;
