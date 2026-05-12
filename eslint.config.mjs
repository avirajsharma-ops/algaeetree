import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Ignore third-party node_modules from linting
    "node_modules/**",
  ]),
  {
    rules: {
      // Disable all Tailwind CSS lint suggestions (not functional errors)
      "tailwindcss/enforces-shorthand": "off",
      "tailwindcss/no-arbitrary-value": "off",
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
]);

export default eslintConfig;
