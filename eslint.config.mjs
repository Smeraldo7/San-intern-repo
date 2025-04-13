import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: 'detect', // automatically detect the installed React version
      },
    },
  },

  {
    env: {
      jest: true,
    },
    plugins: ['jest'],
  },
]);
