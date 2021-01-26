module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: [
        "react","react-hooks"
    ],
    "rules": {
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': ['error', 'always'],
        indent: ['error', 2],
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single', { 'avoidEscape': true }],
        semi: ['error', 'never'],
        'react/display-name': 'warn',
    }
};
