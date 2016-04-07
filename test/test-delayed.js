'use strict'

const program = require('../')
const tap = require('tap')

const delay = (n) =>
  (t) => new Promise((accept) => {
    t.equal(program.yes(), true)
    setTimeout(accept, n, t)
  })


tap.test('a test that takes some time to finish', (t) =>
  delay(1000)(t)
  .then(delay(1000))
  .then(delay(1000))
  .then(delay(1000))
  .then(delay(1000))
  .then(t.end)
)
.catch(tap.threw)
