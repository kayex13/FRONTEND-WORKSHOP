function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            alert(`The sum of ${num1} and ${num2} is ${result}.`);
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case "-":
            result = num1 - num2;
            alert(`The difference between ${num1} and ${num2} is ${result}.`);
            console.log(`${num1} - ${num2} = ${result}`);
            break;
        case "*":
            result = num1 * num2;
            alert(`The product of ${num1} and ${num2} is ${result}.`);
            console.log(`${num1} * ${num2} = ${result}`);
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                console.log("User attempted to divide by zero.");
                return;
            }
            result = num1 / num2;
            alert(`The quotient of ${num1} and ${num2} is ${result}.`);
            console.log(`${num1} / ${num2} = ${result}`);
            break;
        default:
            result = "Invalid operation.";
            alert("Invalid operation. Please enter a valid operation.");
            return;
    }
    return result;
}

do {
    console.log("User wants to calculate again.");
    
    let operation = prompt("Choose an operation: +, -, *, /:");

    if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
        alert("Invalid operation. Please enter a valid operation.");
        console.log("User entered an invalid operation.");
        continue;
    }
    
    num1 = parseFloat(prompt("Enter the first number:"));
    num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        console.log("Invalid input. Please enter valid numbers.");
        continue
    }

    calculate(num1, num2, operation);
} while (confirm("Do you want to perform another calculation?"));