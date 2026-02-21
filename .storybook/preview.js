import "../dist/stylesheets/app.css";
import "../dist/javascripts/app.js";
import itouTheme from "./itouTheme";

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    docs: {
      theme: itouTheme,
      codePanel: true,
      source: {
        type: "dynamic",
        transform: (src, context) => {
          const rendered = context?.originalStoryFn?.(context.args, context);
          return typeof rendered === "string" ? rendered.trim() : src;
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // viewport: {
    //   defaultViewport: "responsive",
    // },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
