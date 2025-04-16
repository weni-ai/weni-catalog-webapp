module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'error',
        'no-undef': 'off',
        'no-var': 'error',
        'prefer-const': 'error',
        'vue/multi-word-component-names': 'off'
    },
    ignorePatterns: ['dist/*', 'node_modules/*', '*.config.ts', '*.setup.ts', 'tests/**/*.ts']
}; 