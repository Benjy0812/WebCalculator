const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.textContent)
  })
})

function appendValue(value) {
  if (display.value === 'Error' || display.value === 'undefined' || display.value === 'NaN') {
    display.value = ''
  }
  display.value += value
}

function clearDisplay() {
  display.value = ''
}

function calculateResult() {
  try {
    display.value = math.evaluate(display.value)
  } catch {
    display.value = 'Error'
  }
}
