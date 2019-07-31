const PolishNotationSolver = require('./polishNotationSolver')

import '../index.css'

const solver = new PolishNotationSolver()

document.addEventListener('DOMContentLoaded', () => {
  const converter = document.createElement('div')
  converter.className = 'converter'

  const title = document.createElement('h1')
  title.className = 'title'
  title.innerText = 'Polish Notation Converter'

  const form = document.createElement('div')
  form.className = 'converter-form'

  const input = document.createElement('input')
  input.type = 'text'
  input.id = 'equation-input'

  const button = document.createElement('button')
  button.id = 'equation-submit'
  button.innerText = 'Convert'

  const output = document.createElement('div')
  output.id = 'output'

  button.addEventListener('click', () => {
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

  form.appendChild(input)
  form.appendChild(button)

  converter.appendChild(title)
  converter.appendChild(form)
  converter.appendChild(output)

  document.body.appendChild(converter)
})
