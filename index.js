module.exports = {
  extends: ["airbnb-base"],
  rules: {
    quotes: ["error", "double"],
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    camelcase: "off",
    "object-curly-newline": ["error", {
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    }],
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            modules: ["node_modules", "src"],
          },
        },
      },
    },
  },
};
