var Swarm = require('discovery-swarm')
var extend = require('xtend')

var DAT_DOMAIN = 'dat.local'
var DEFAULT_DISCOVERY = [
  'discovery1.publicbits.org',
  'discovery2.publicbits.org'
]
var DEFAULT_BOOTSTRAP = [
  'bootstrap1.publicbits.org:6881',
  'bootstrap2.publicbits.org:6881',
  'bootstrap3.publicbits.org:6881',
  'bootstrap4.publicbits.org:6881'
]

var DEFAULT_OPTS = {
  dns: {server: DEFAULT_DISCOVERY, domain: DAT_DOMAIN},
  dht: {bootstrap: DEFAULT_BOOTSTRAP}
}

module.exports = DatSwarm

function DatSwarm (opts) {
  if (!(this instanceof DatSwarm)) return new DatSwarm(opts)

  opts = opts || {}
  opts = extend(DEFAULT_OPTS, opts) // opts takes priority
  return new Swarm(opts)
}
