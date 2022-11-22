const calculator = document.querySelector(".calculator");
const buttons = Array.from(document.querySelectorAll(".calculator__button"));
const display = document.querySelector(".calculator__display");

const buttonClicked = buttons.map((button) => {
  //   button.addEventListener("click", (buttonClick) => {
  display.innerHTML += button.innerHTML;
  //   });
});

const allClear = () => {
  if (buttons[0]) {
    display.innerHTML = " ";
  }
};

// const action = buttonClicked.dataset.action;

// if (!action) {
//   console.log("number key");
// }

console.log(buttons);

// buttons.addEventListener("click", allClear);

buttons.addEventListener("click", buttonClicked);
