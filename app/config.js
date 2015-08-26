var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'
var STAGING = process.env.NODE_ENV === 'staging'

config.app = {
  name: 'tomhardman.xyz',
  port: process.env.EXPRESS_PORT || process.env.PORT || 3500
}

config.assets = {
  maxAge: 0
}

if (STAGING) {
  config.app.port = 55600
}

if (PRODUCTION) {
  config.assets.maxAge = 2592000000
}
