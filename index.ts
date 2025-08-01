import eslint from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";


export default tseslint.config(
    eslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
        rules: {
            "import/order": [
                "error", {
                    "alphabetize": {
                        "order": "asc",
                        "caseInsensitive": true,
                    },
                    "newlines-between": "always",
                    "groups": ["builtin", "external", "internal", ["sibling", "parent"], "index", "object", "type"] },
            ],
        },
        settings: {
            "import/resolver": {
                "typescript": true,
                "node": true,
            },
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.mts",],
        extends: [
            tseslint.configs.recommendedTypeChecked,
            tseslint.configs.stylisticTypeChecked,
            importPlugin.flatConfigs.typescript,
        ],
        rules: {
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": [
                "error",
                {
                    "allowArgumentsExplicitlyTypedAsAny": true,
                }
            ],
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": ["warn", {"argsIgnorePattern": "^_", "varsIgnorePattern": "^_"}],
        },
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    eslintPluginPrettier,
);
