const PolishNotationSolver = require('./polishNotationSolver')

const ms = new PolishNotationSolver()
console.log(ms.toPostfixNotation('3 + 4 * 2 / (1-5) ^ 2'), '\n')
// console.log(ms.toPostfixNotation('(2 + 4) * (3 + 5)'))
