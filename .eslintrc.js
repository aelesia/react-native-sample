module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    "prettier/prettier": "warn",
    "no-console":["warn", { allow: ["info", "warn", "error"] }],
    "semi": "off", // Handled by prettierrc.js
    "comma-dangle": "off", // Handled by prettierrc.js
    "no-extra-semi": "off", // Handled by prettierrc.js
    "react-native/no-inline-styles": "off",
    "@typescript-eslint/no-unused-vars":["warn", { "argsIgnorePattern": "^_" }],
    "simple-import-sort/sort": "warn",
    "dot-notation": "off",
    "no-shadow": "error"
  }
};
