// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [js.configs.recommended, eslintConfigPrettier, {
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    "no-undef": "off"
  },
}, ...storybook.configs["flat/recommended"]];
