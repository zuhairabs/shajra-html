const nextTranslate = require('next-translate')

module.exports = {
  ...nextTranslate(),
  reactStrictMode: true,
  env: {
    baseUrl: 'http://localhost:3000',
  }
}