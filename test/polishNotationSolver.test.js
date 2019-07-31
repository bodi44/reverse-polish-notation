const assert = require('assert')
const PolishNotationSolver = require('../src/script/polishNotationSolver')

describe('testing PolishNotationSolver class', () => {
  it('should create class', () => {
    assert.equal(typeof new PolishNotationSolver(), 'object')
  })

  it('should convert simple equation to Polish notation', () => {
    const testSolver = new PolishNotationSolver()
    assert.equal(testSolver.toPostfixNotation('2 + 4 * 3'), '2 4 3 * +')
  })

  it('should convert simple equation with brackets to Polish notation', () => {
    const testSolver = new PolishNotationSolver()
    assert.equal(testSolver.toPostfixNotation('(2 + 4) * (3 + 5)'), '2 4 + 3 5 + *')
    assert.equal(testSolver.toPostfixNotation('3 + 4 * 2 / (1-5) ^ 2'), '3 4 2 * 1 5 - 2 ^ / +')
  })

  it('should convert complex equation to Polish notation', () => {
    const testSolver = new PolishNotationSolver()
    assert.equal(testSolver.toPostfixNotation('(2 + 4) * (3 * (2 + 1)) ^ (3 + 5)'), '2 4 + 3 2 1 + * 3 5 + ^ *')
  })
})
