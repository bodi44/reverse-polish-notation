const assert = require('assert')
const isNumeric = require('../src/script/isNumeric')

describe('testing isNumeric function', () => {
  it('should return true if Number given', () => {
    assert.equal(isNumeric('4'), true)
    assert.equal(isNumeric('10.2'), true)
    assert.equal(isNumeric(-100), true)
    assert.equal(isNumeric(Math.PI), true)
  })

  it('should return false if no Number given', () => {
    assert.equal(isNumeric('*'), false)
    assert.equal(isNumeric('^/'), false)
    assert.equal(isNumeric('('), false)
    assert.equal(isNumeric(' '), false)
    assert.equal(isNumeric('abb'), false)
  })
})
