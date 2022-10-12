// THE MEMORY OF OUR CALCULATOR
let lastOperation = null; // symbol will be saved later on in this variable
let lastResult = null; // this will eventually be the first number inserted

let isOperationComplete = false;

window.onload = function () {
  // Get the references of the DOM nodes of numbers / function buttons / cancel button / result button
  const numericButtons = document.querySelectorAll(".numeric-button");
  const functionButtons = document.querySelectorAll(".function-button");
  const cancelButton = document.querySelector(".cancel-button");
  const resultButton = document.querySelector(".result-button");

  console.log(numericButtons);

  // attaching events to number buttons
  for (let node of numericButtons) {
    node.addEventListener("click", addNumberToResult); // event gets already passed by the event, when it executes our listener function
  } // addNumberToResult(event)

  // attaching events to function buttons
  for (let node of functionButtons) {
    node.addEventListener("click", saveOperationAndValue); // event gets already passed by the event, when it executes our listener function
  } // saveOperationAndValue(event)

  resultButton.addEventListener("click", showResult);
  cancelButton.addEventListener("click", resetState);
};

const addNumberToResult = function (event) {
  const displayNode = document.getElementById("result");

  const clickedNode = event.target;
  const numberPressed = clickedNode.innerText;

  // need to determine if we are in the first step or not
  if (displayNode.value === "0" || displayNode.value === "Error" || isOperationComplete) {
    displayNode.value = numberPressed;
    isOperationComplete = false;
  } else {
    displayNode.value += numberPressed;
  }
};

const saveOperationAndValue = function (event) {
  const displayNode = document.getElementById("result");

  const clickedNode = event.target;
  lastOperation = clickedNode.innerText; // symbol of the operation
  lastResult = displayNode.value; // accessing the display value to save for later

  console.log("FIRST NUMBER: ", lastResult);
  console.log("LAST OPERATION: ", lastOperation);
  displayPartialOperation();

  //   displayNode.value = "0"; // reset the display value
  clearResult();
};

const executeLastOperation = function () {
  // reading the current value of the display which will be our second operand
  const displayNode = document.getElementById("result");
  const currentResult = displayNode.value;
  console.log("SECOND NUMBER: ", currentResult);

  //converting strings into numbers and store them into new variables
  const firstOperand = parseInt(lastResult);
  const secondOperand = parseInt(currentResult);

  // use the lastOperation symbol to determine what operation to do
  switch (lastOperation) {
    case "+":
      lastResult = firstOperand + secondOperand;
      break;
    case "-":
      lastResult = firstOperand - secondOperand;
      break;
    case "/":
      lastResult = firstOperand / secondOperand;
      break;
    case "*":
      lastResult = firstOperand * secondOperand;
      break;
    default:
      lastResult = "Error";
      break;
  }

  //   if (lastOperation === "+") {
  //     lastResult = firstOperand + secondOperand;
  //   } else if (lastOperation === "-") {
  //     lastResult = firstOperand - secondOperand;
  //   } else if (lastOperation === "/") {
  //     lastResult = firstOperand / secondOperand;
  //   } else if (lastOperation === "*") {
  //     lastResult = firstOperand * secondOperand;
  //   }

  // the switch case will update the global lastResult variable value with the result of the operation

  console.log("RESULT:", lastResult);
};

const showResult = function () {
  const displayNode = document.getElementById("result");

  executeLastOperation();

  console.log("LAST RESULT: ", lastResult);

  if (lastResult === null) {
    displayNode.value = "0";
  } else {
    displayNode.value = lastResult;
  }

  isOperationComplete = true;
  resetPartialOperation();

  // Calculate the result between the first operand (saved in lastResult)
  // and the second operand (currently in the display) with the proper operation (saved in lastOperation)
};

const clearMemory = function () {
  lastOperation = null;
  lastResult = null;
};

const clearResult = function () {
  document.getElementById("result").value = "0";
};

const resetState = function () {
  clearMemory();
  clearResult();
};

const displayPartialOperation = function () {
  const container = document.getElementById("partialOperation");

  container.innerText = lastResult + lastOperation;
};

const resetPartialOperation = function () {
  document.getElementById("partialOperation").innerText = "";
};
