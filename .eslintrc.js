module.exports = {
  extends: [
    'next/core-web-vitals',
    '@justichentai/eslint-config/basic',
    '@justichentai/eslint-config/typescript',
  ],
  rules: {
    'no-console': 'off',
    'import/no-unresolved': 'off',
  },
}
