/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['@typescript-eslint', 'react', 'import', 'unused-imports'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-empty': 'off',
        'no-undef': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'off',

        'sort-imports': ['error', { ignoreDeclarationSort: true }],
        'import/extensions': ['error', 'ignorePackages'],
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: [
              'builtin',
              'external',
              ['parent', 'sibling', 'index'],
              'type',
            ],
            alphabetize: { order: 'asc' },
          },
        ],
        'unused-imports/no-unused-imports': 'error',

        'react/jsx-no-literals': ['error', { ignoreProps: true }],
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],

        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/promise-function-async': [
          'error',
          {
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true,
          },
        ],
        '@typescript-eslint/ban-ts-comment': [
          'warn',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
            'ts-check': false,
            minimumDescriptionLength: 3,
          },
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              '{}': false,
              object: false,
            },
            extendDefaults: true,
          },
        ],
      },
    },
  ],
}

module.exports = config
