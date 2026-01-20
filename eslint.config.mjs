import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    // Global ignores
    {
        ignores: ["dist/", "node_modules/", ".astro/", ".env"],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    eslintConfigPrettier,
];
