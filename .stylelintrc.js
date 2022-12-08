module.exports = {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
  ],
  "plugins": [
    "stylelint-less"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "color-no-invalid-hex":true,
    "less/color-no-invalid-hex":true,
    'max-nesting-depth': [
      1,
      {
        ignore: ['pseudo-classes']
      },
    ],
  },
};
