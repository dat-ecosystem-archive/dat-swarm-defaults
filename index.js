var extend = require('xtend')

var DAT_DOMAIN = 'dat.local'
var DEFAULT_DISCOVERY = [
  'discovery1.datprotocol.com',
  'discovery2.datprotocol.com'
]
var DEFAULT_BOOTSTRAP = [
  'bootstrap1.datprotocol.com:6881',
  'bootstrap2.datprotocol.com:6881',
  'bootstrap3.datprotocol.com:6881',
  'bootstrap4.datprotocol.com:6881'
]

var DEFAULT_OPTS = {
  dns: {server: DEFAULT_DISCOVERY, domain: DAT_DOMAIN},
  dht: {bootstrap: DEFAULT_BOOTSTRAP}
}

module.exports = function (opts) {
  return extend(DEFAULT_OPTS, opts) // opts takes priority
}
