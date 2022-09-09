module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      autoprefixer: true,
      browsers: 'last 1 version',
        features: {
          customProperties: {
            warnings: false,
          },
        },
    }
  }
}