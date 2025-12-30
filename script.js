const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
  });
});

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error  ";
  }
}

function clearDisplay() {
  display.value = "";
}

function appendValue(value) {
  display.value += value;
}
