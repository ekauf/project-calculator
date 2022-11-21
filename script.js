const calculator = document.querySelector(".calculator");
const buttons = Array.from(document.querySelectorAll(".calculator__button"));
const display = document.querySelector(".calculator__display");

// const handleButtonClick = Array.from.buttons.forEach((button) => {
//   console.log(button.innerHTML);
// });

// buttons.forEach((button) => {
//   console.log(button.innerHTML);
// });

// const handleButtonClick = (button) => {
//   console.log(button.innerHTML);
// };

buttons.map((button) => {
  button.addEventListener("click", (buttonClick) => {
    console.log(button.innerHTML);
  });
});
