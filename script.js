class Calculator {
  constructor(previousOperandDisplay, currentOperandDisplay) {
    this.previousOperandDisplay = previousOperandDisplay;
    this.currentOperandDisplay = currentOperandDisplay;
    this.clear();
  }

  allClear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  backspace() {}

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {}

  calculate() {}

  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number");
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

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerHTML);
    calculator.updateDisplay();
  });
});

const calculator = new Calculator(
  previousOperandDisplay,
  currentOperandDisplay
);
