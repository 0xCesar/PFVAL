import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add custom rules or overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Downgrade unused vars from error to warning
      "@typescript-eslint/no-unused-vars": "warn",
      
      // Optional: disable or warn for unescaped apostrophes
      "react/no-unescaped-entities": "warn",

      // Optional: suppress useEffect dependency warning if you’re handling it manually
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;