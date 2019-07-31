const PolishNotationSolver = require('./polishNotationSolver')

const solver = new PolishNotationSolver()
const input = document.getElementById('equation-input')
const submit = document.getElementById('equation-submit')
const output = document.getElementById('output')

submit.addEventListener('click', () => {
  if (input.value !== '') {
    output.className = 'success'
    output.innerHTML = `<h3 class="output-title">Output:</h3>${solver.toPostfixNotation(input.value)}`
    input.value = ''
  } else {
    output.className = 'error'
    output.innerHTML = `<h3 class="output-title">Error: enter correct equation to convert</h3>`
    input.value = ''
  }
})
