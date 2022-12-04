module.exports = {
  extends: ["alloy", "alloy/react", "alloy/typescript"],
  env: {},
  globals: {},
  rules: {
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-no-duplicate-props": ["error"],
    "react/jsx-no-useless-fragment": ["error"],
    "react/no-unknown-property": ["error"],
    "react/no-unescaped-entities": [0],
    "@typescript-eslint/no-invalid-void-type": [0],
    "@typescript-eslint/consistent-type-definitions": [0],
  },
};
