module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: 'stylelint-config-standard-scss',
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order'
  ],
  rules: {
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-trailing-semicolon': 'always',
    'font-family-no-missing-generic-family-keyword': true,
    'order/properties-alphabetical-order': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-pseudo-element-colon-notation': 'double'
  }
}
