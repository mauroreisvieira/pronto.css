import hxh from "@harmonix-hub/eslint";
import storybook from "eslint-plugin-storybook";
import prettierConfig from "eslint-plugin-prettier/recommended";

/** @type import("eslint").Linter.Config */
export default [
  {
    ignores: ["dist", "node_modules", "**/*.d.ts", "**/*.js"]
  },
  {
    files: ["*.ts", "*.tsx"]
  },
  ...hxh.tsConfigs,
  hxh.reactConfigs,
  hxh.jestConfigs,
  prettierConfig,
  ...storybook.configs["flat/recommended"],
];
