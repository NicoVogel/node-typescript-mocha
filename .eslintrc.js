module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    "no-var": 2,
    curly: 2,
    "array-callback-return": 2,
    "default-case": 2,
    "dot-notation": 1,
    "dot-location": [2, "property"],
    eqeqeq: 2,
    "newline-per-chained-call": [2, { ignoreChainWithDepth: 1 }],
    "max-len": [2, { code: 100 }],
    "arrow-parens": 2,
    "@typescript-eslint/indent": [2, 2, {
      "FunctionDeclaration": { "body": 1, "parameters": 2 },
      "FunctionExpression": { "body": 1, "parameters": 2 },
      "CallExpression": { "arguments": 1 }
    }],
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
};
