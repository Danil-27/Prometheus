module.exports = {
  mode: 'jit',
  corePlugins: {
    float: false,
    clear: false,
    skew: false,
    caretColor: false,
    fontVariantNumeric: false
  },
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './app.vue'
  ]
};
