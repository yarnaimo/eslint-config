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
        'no-undef': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'off',

        'brace-style': ['error', 'stroustrup'],
        '@typescript-eslint/no-floating-promises': 'warn',
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
}

module.exports = config
