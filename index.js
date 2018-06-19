module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      allowImportExportEverywhere: true,
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'max-len': ['error', 80, {
      ignoreStrings: true,
      comments: 100
    }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'semi-style': ['error', 'first'],
    'semi': ['error', 'never'],
    'no-extra-parens': ['error', 'all', {enforceForArrowConditionals: false, 'ignoreJSX': 'multi-line', 'nestedBinaryExpressions': false}],
    'space-before-function-paren': ['error', 'always'],
    'func-style': ['error', 'expression', { 'allowArrowFunctions': true }],
    'func-names': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.test.js', '**/*.spec.js']}],
    'no-global-assign': ['error', {'exceptions': ['Object']}],
    'no-underscore-dangle': ['error', { 'allow': ['_wq']}],
    'class-methods-use-this': ['error', { 'exceptMethods': [
      'componentDidMount',
      'componentDidUpdate',
      'componentWillMount',
      'componentWillReceiveProps',
      'componentWillUnmount',
      'componentWillUpdate',
      'render',
      'shouldComponentUpdate'
    ]}],
    'react/sort-comp': [1, {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^handle.+$/',
        'everything-else',
        '/^get.+$/',
        '/^render.+$/',
        'render',
      ]
    }],
    'react/boolean-prop-naming': [1, { rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+' }],
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'react/no-deprecated': 1,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/no-access-state-in-setstate': 1,
    'react/require-default-props': 0,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-handler-names': [1, { eventHandlerPropPrefix: '(on|handle)' }],
    'react/jsx-max-props-per-line': 1,
    'react/jsx-no-bind': [1, {
      ignoreRefs: true,
      allowArrowFunctions: false,
      allowFunctions: false,
      allowBind: false
    }],
    'react/jsx-closing-tag-location': 1,
    'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'always' }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  }
}