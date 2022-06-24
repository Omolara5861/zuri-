let msg = 'Hi, this is a simple Calculator that adds, subtracts, divide or multiply two numbers';
alert(msg);
let firstNumber = prompt('Enter First Number:');
let operator = prompt(`VALID OPERATORS are + - / *
Enter Operator:`);
let secondNumber = prompt('Enter Second Number:');
let expression = `${firstNumber} ${operator} ${secondNumber}`;
let output;

function calculate() {

    switch (operator) {
        case '+':
            output = Number(firstNumber) + Number(secondNumber);
            break;

        case '-':
            output = Number(firstNumber) - Number(secondNumber);
            break;
    
        case '/':
            output = Number(firstNumber) / Number(secondNumber);
            break;
        default:
            output = Number(firstNumber) * Number(secondNumber);
            break;
    }
    alert(`${expression} = ${output}`);
}
calculate();
