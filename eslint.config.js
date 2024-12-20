/* eslint-disable no-undef */
const js = require('@eslint/js');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const jest = require('eslint-plugin-jest');
const prettier = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');

module.exports = [
  {
    ignores: [
      'package.json',
      'package-lock.json',
      'node_modules/**',
      'dist/**',
      '*.log',
      'tests/**',
      'app.json',
      'README.md',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        JSX: 'readonly',
      },
    },
    plugins: {
      react,
      '@typescript-eslint': typescript,
      prettier,
      jest,
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          project: './tsconfig.json',
        },
      },
      'import/ignore': ['react-native'],
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'off',
      'react-native/no-inline-styles': 'off',
      'no-duplicate-imports': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-shadow': 'off',
      'react-native/no-unused-styles': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent']],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-native',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
    },
  },
  {
    plugins: {
      jest,
    },
    files: ['**/*.test.{js,ts,tsx}'],
    env: {
      'jest/globals': true,
    },
  },
];
