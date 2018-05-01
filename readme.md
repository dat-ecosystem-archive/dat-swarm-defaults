# Dat Swarm Defaults

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

Use Dat defaults for `dns` and `dht` servers in [hyperdiscovery](https://github.com/karissa/hyperdiscovery) or [discovery-swarm](https://github.com/mafintosh/discovery-swarm). The *dns* and *dht* servers are used to discover other peers.

## Usage 

Create a config object and pass it to discovery swarm. 

Any options you specify will overwrite the defaults. See discovery swarm for options.

```javascript
var Swarm = require('discovery-swarm')
var defaults = require('dat-swarm-defaults')

var config = defaults({
  stream: function () {
    return drive.createPeerStream()
  }
})
var swarm = Swarm(config)
```

## License

[MIT](LICENSE.md)

[npm-image]: https://img.shields.io/npm/v/dat-swarm-defaults.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dat-swarm-defaults
[travis-image]: https://img.shields.io/travis/datproject/dat-swarm-defaults.svg?style=flat-square
[travis-url]: https://travis-ci.org/datproject/dat-swarm-defaults
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

