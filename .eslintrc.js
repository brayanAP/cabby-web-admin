module.exports = {
    root: true,
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks'],
    env: {
        jest: true,
        browser: true,
    },
    rules: {
        'react/function-component-definition': ['error', {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
        }],

        'no-shadow': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'import/no-unresolved': 'off',
        semi: ['error', 'never'],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', 'jsx'] }],
        'react/jsx-indent-props': ['error', 4],

        'import/extensions': 0,

        // React hooks config
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // React native uses require to load assets
        'global-require': 'off',

        // A lot of files export only one const
        'import/prefer-default-export': 'off',

        // Typescript compativility
        'no-undef': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
}
