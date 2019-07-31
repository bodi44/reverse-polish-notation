const isNumeric = require('./isNumeric')

class PolishNotationSolver {
  constructor() {
    this._equation = ''
    this._operators = {
      '^': {
        priority: 4,
        associativity: 'Right'
      },
      '/': {
        priority: 3,
        associativity: 'Left'
      },
      '*': {
        priority: 3,
        associativity: 'Left'
      },
      '+': {
        priority: 2,
        associativity: 'Left'
      },
      '-': {
        priority: 2,
        associativity: 'Left'
      }
    }
  }

  replaceOperators(operator1, operator2) {
    return (this._operators[operator1].associativity === 'Left' && this._operators[operator1].priority <= this._operators[operator2].priority)
      || (this._operators[operator1].associativity === 'Right' && this._operators[operator1].priority < this._operators[operator2].priority)
  }

  toPostfixNotation(equation) {
    this._equation = equation.replace(/\s+/g, '').split('')
    let outputQueue = ''
    const operatorStack = []
    const operatorString = '^*/+-'

    this._equation.map(token => {
      if (isNumeric(token)) {
        outputQueue += token + ' '
      } else if (operatorString.indexOf(token) !== -1) {
        let operator1 = token
        let operator2 = operatorStack[operatorStack.length - 1]

        if (operatorString.indexOf(operator2) !== -1) {
          while (this.replaceOperators(operator1, operator2)) {
            outputQueue += operatorStack.pop() + ' '
            operator2 = operatorStack[operatorStack.length - 1]
          }
        }
        operatorStack.push(operator1)
      } else if (token === '(') {
        operatorStack.push(token)
      } else if (token === ')') {
        while (operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue += operatorStack.pop() + ' '
        }
        operatorStack.pop()
      }
    })

    outputQueue += operatorStack.reverse().join(' ')

    return outputQueue
  }
}

module.exports = PolishNotationSolver
