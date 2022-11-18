const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".calculator__button");

const handleButtonClick = () => {
  console.log("I was clicked");
};

calculator.addEventListener("click", handleButtonClick);
