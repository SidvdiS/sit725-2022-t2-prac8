const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");
const resultTemplate = document.querySelector("#resultTemplate");
const resultText = document.querySelector("#resultText");

const BASE_URL = "http://localhost:3000/calculator/";

addButton.addEventListener("click", () => {
  fetch(`${BASE_URL}add?num1=${number1.value}&num2=${number2.value}`)
    .then((res) => res.json())
    .then((res) => {
      resultTemplate.style.display = "block";
      resultText.innerHTML = `Addition = ${res.data}`;
    })
    .catch((error) => {
      console.log(error);
    });
});

subtractButton.addEventListener("click", () => {
  fetch(`${BASE_URL}subtract?num1=${number1.value}&num2=${number2.value}`)
    .then((res) => res.json())
    .then((res) => {
      resultTemplate.style.display = "block";
      resultText.innerHTML = `Difference = ${res.data}`;
    })
    .catch((error) => {
      console.log(error);
    });
});

//Making Post API Call to do multiply and divide

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ num1: number1.value, num2: number2.value }),
};

multiplyButton.addEventListener("click", () => {
  options = {
    ...options,
    body: JSON.stringify({ num1: number1.value, num2: number2.value }),
  };
  fetch(`${BASE_URL}multiply`, options)
    .then((res) => res.json())
    .then((res) => {
      resultTemplate.style.display = "block";
      resultText.innerHTML = `Product = ${res.data}`;
    })
    .catch((error) => {
      console.log(error);
    });
});

divideButton.addEventListener("click", () => {
  options = {
    ...options,
    body: JSON.stringify({ num1: number1.value, num2: number2.value }),
  };
  fetch(`${BASE_URL}divide`, options)
    .then((res) => res.json())
    .then((res) => {
      resultTemplate.style.display = "block";
      resultText.innerHTML = `Quotient = ${res.data}`;
    })
    .catch((error) => {
      console.log(error);
    });
});
