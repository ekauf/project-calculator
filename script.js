const calculator = document.querySelector(".calculator");
const buttons = Array.from(document.querySelectorAll(".calculator__button"));
const display = document.querySelector(".calculator__display");

buttons.map((button) => {
  button.addEventListener("click", (buttonClick) => {
    display.innerHTML += button.innerHTML;
  });
});
