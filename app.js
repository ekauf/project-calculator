const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const allClearButton = document.querySelector("[data-all-clear]");
const equalsButton = document.querySelector("[data-calculation]");
const backspaceButton = document.querySelector("[data-backspace]");
const negationButton = document.querySelector("[data-negation]");
const percentageButton = document.querySelector("[data-percentage]");
const previousOperandDisplay = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandDisplay = document.querySelector("[data-current-operand]");

const clickNumberButton = (event) => {
  let display = event.target.innerHTML;
  if (display.innerHTML == "0");
  {
    display.innerHTML = display;
  }
};

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", clickNumberButton);
}
