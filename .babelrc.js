module.exports = {
  env: {
    production: {
      plugins: ['@emotion', ...otherBabelPlugins],
    },
  },
  plugins: ['@emotion'],
}
