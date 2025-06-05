import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import standard from 'eslint-config-standard'
import eslintPluginImport from 'eslint-plugin-import'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      standard,
      {
        rules: {
          'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],
          'import/no-absolute-path': 'off',
          'import/un-resolved': 'off',
        },
        plugins: {
          import: eslintPluginImport,
        },
      },
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
      import: eslintPluginImport,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      camelcase: 'off',
      'comma-dangle': 'off',
      'func-call-spacing': 'off',
      'import/no-absolute-path': 'off',
      'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],
      'import/un-resolved': 'off',
      indent: 'off',
      'multiline-ternary': 'off',
      'no-console': 'warn',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'no-useless-escape': 'off',
      'prefer-regex-literals': 'off',
      'space-before-function-paren': 'off',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
)
