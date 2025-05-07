import js from "@eslint/js";
import unicorn from "eslint-plugin-unicorn";
import jest from "eslint-plugin-jest";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "build/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      unicorn,
    },
    rules: {
      ...unicorn.configs.recommended.rules,
      // It says: Only use `process.exit()` in CLI apps. Throw an error instead
      // I say:But this IS a CLI app!
      "unicorn/no-process-exit": "off",
    },
  },
  {
    files: ["**/__tests__/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
];
