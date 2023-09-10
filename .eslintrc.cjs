module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['astro'],
  extends: [
    'standard-with-typescript',
    'eslint-config-prettier',
    'plugin:astro/recommended'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      env: {
        node: true,
        'astro/astro': true,
        es2020: true
      },
      files: ['.eslintrc.{js,cjs}', '*.astro'],

      parser: 'astro-eslint-parser',
      parserOptions: {
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    }
  ],
  parserOptions: {
    parser: 'astro-eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {}
}
