var test = require('tape')
var swarm = require('./')

test('two swarms connect with defaults', function (t) {
  var pending = 0
  var swarms = []

  create()
  create()

  function create () {
    var s = swarm({}) // no opts
    swarms.push(s)
    pending++
    s.join('test')

    s.on('connection', function (connection, type) {
      t.ok(connection, 'got connection')
      if (--pending === 0) {
        swarms.forEach(function (s) {
          s.destroy()
        })
        t.end()
      }
    })

    return s
  }
})

test('two swarms connect and exchange data with defaults', function (t) {
  var a = swarm({}) // no opts
  var b = swarm() // no opts

  a.on('connection', function (connection) {
    connection.write('hello')
    connection.on('data', function (data) {
      a.destroy()
      b.destroy()
      t.same(data, Buffer('hello'))
      t.end()
    })
  })

  b.on('connection', function (connection) {
    connection.pipe(connection)
  })

  a.join('test')
  b.join('test')
})
