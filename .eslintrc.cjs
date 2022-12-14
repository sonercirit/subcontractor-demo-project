module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/extensions": [2, "always"],
    "no-console": [0],
  },
};
