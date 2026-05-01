const display = document.getElementById('display')

window.onload = function () {
  display.value = '0'
}

function appendValue(value) {
  if (
    display.value === 'Error' ||
    display.value === 'undefined' ||
    display.value === 'NaN'
  ) {
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
