const display = document.getElementById("display");
const buttons = document.querySelectorAll(".number, .operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

let currentInput = "";
let currentOperator = "";
let prevInput = "";

buttons.forEach((button) => {
    
    button.addEventListener("click", () => {
        const value = button.value;
        if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (currentInput !== "") {
                prevInput = currentInput;
                currentInput = "";
                currentOperator = value;
            }
        } else {
            currentInput += value;
        }
        display.textContent = currentInput;
    });
});

equalsButton.addEventListener("click", () => {
    if (currentInput !== "" && currentOperator !== "") {
        const result = calculate(prevInput, currentInput, currentOperator);
        display.textContent = result;
        currentInput = result;
        currentOperator = "";
    }
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    currentOperator = "";
    prevInput = "";
    display.textContent = "0";
});

function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error";
            }
        default:
            return "Error";
    }
}
