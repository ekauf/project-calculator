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

const clickNumberButton = numberButtons.forEach((number) => {
  number.addEventListener("click", (e) => {
    currentOperandDisplay.innerHTML += number.innerHTML;
  });
});

const clickOperatorButton = operationButtons.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    currentOperandDisplay.innerHTML += operator.innerHTML;
  });
});

const clearButton = () => {
  currentOperandDisplay.innerHTML = ` `;
};

allClearButton.addEventListener("click", clearButton);
