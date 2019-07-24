module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node": true,
    "es6": true,
  },
  "rules": {
    "import/prefer-default-export": "off",
    "no-unused-vars": [0],
    "no-nested-ternary": [0],
    "no-console": [0],
    "global-require": [0],
    "import/no-dynamic-require": [0],
    "no-underscore-dangle": [0],
    "class-methods-use-this": [0],
    "semi": ["error", "never"],
    "import/no-extraneous-dependencies": [0],
  }
};
