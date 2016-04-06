'use strict'

const program = require('../')
const tap = require('tap')

tap.equal(program.maybe(1), true)
tap.equal(program.maybe(0), false)
tap.equal(program.maybe({}), true)
