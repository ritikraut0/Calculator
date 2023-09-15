const inputField = document.getElementById("inpurField");
const numButtons = document.querySelectorAll(".numbutton");
const opButtons = document.querySelectorAll(".opbutton");
const eqButton = document.querySelector(".eqbutton");
const clearButton = document.querySelector(".clearbutton");

let currentInput = "0"; // Store the current input
let operator = ""; // Store the current operator
let prevInput = ""; // Store the previous input for calculation

// Attach click event listeners to number buttons
numButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "0") {
            currentInput = button.textContent;
        } else {
            currentInput += button.textContent;
        }
        inputField.value = currentInput;
    });
});

// Attach click event listeners to operator buttons
opButtons.forEach(button => {
    button.addEventListener("click", () => {
        prevInput = currentInput;
        currentInput = "0";
        operator = button.textContent;
    });
});

// Attach click event listener to equals button
eqButton.addEventListener("click", () => {
    if (prevInput && operator && currentInput) {
        const result = calculate(parseFloat(prevInput), operator, parseFloat(currentInput));
        inputField.value = result;
        currentInput = result.toString();
        operator = "";
        prevInput = "";
    }
});

// Attach click event listener to clear button
clearButton.addEventListener("click", () => {
    currentInput = "0";
    operator = "";
    prevInput = "";
    inputField.value = currentInput;
});

// Function to perform calculations
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Error";
        default:
            return "Error";
    }
}
