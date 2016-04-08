'use strict'

module.exports = {
  yes() {
    return null
  },
  no() {
    return false
  },
  maybe(thing) {
    return !!thing
  }
}
