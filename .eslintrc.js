/*
 * @Author: GZH
 * @Date: 2021-10-02 15:11:35
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-05 15:41:19
 * @FilePath: \vue3-json-schema-form\.eslintrc.js
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    quotes: 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
