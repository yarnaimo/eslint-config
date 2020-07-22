/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint', 'react'],
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/prop-types': 'off',

        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'off',

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

        'no-undef': 'off',
    },
}

module.exports = config
