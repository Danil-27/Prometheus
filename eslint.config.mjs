import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  extends: ['plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1
      }
    ],
    'prettier/prettier': 'error',
    'vue/attribute-hyphenation': ['off'],
    'vue/v-on-event-hyphenation': ['off'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        }
      }
    ]
  }
});
