import { addons } from 'storybook/manager-api';
import itouTheme from './itouTheme';

addons.setConfig({
  theme: itouTheme,
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
