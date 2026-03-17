

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "staticDirs": [
    "../src/public"
  ],

  "addons": [
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],

  "framework": "@storybook/html-vite"
};
export default config;
