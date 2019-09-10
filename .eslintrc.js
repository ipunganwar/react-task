module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/forbid-prop-types": 0,
    "jsx-a11y/label-has-for": [ 2, {
      "required": {
          "some": [ "nesting", "id" ]
      }
    }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "camelcase": ["error", {properties: "never"}]
  },
};
