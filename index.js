'use strict'

module.exports = {
  yes() {
    return 1
  },
  no() {
    return false
  },
  maybe(thing) {
    return !!thing
  }
}
