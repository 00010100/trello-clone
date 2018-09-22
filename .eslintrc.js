module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": false
    },
    "sourceType": "module",
    "generators": false,
    "objectLiteralDuplicateProperties": false,
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "extends": [
    "standard-jsx",
    "airbnb"
  ],
  "env": {
    "jest": true
  },
  "rules": {
    "react/jsx-no-bind": ["error", {
      "allowArrowFunctions": true,
      "allowBind": false,
      "ignoreRefs": true
    }],
    "quotes": ["error", "single", {
       "allowTemplateLiterals": true
    }],
    "react/forbid-prop-types": ["error", {
      "forbid": ["any", "array", "object"],
      "checkContextTypes": false,
      "checkChildContextTypes": false,
    }],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "react/no-find-dom-node": 0,
    "react/require-default-props": 0,
    "no-shadow": "off",
    "react/no-did-update-set-state": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error"
  }
};