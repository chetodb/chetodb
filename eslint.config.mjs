import js from "@eslint/js";
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  // Global ignores
  {
    ignores: ["dist/", "node_modules/", ".astro/", ".env"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
