let msg = 'Hi, this is a simple Calculator that adds, subtracts, divide or multiply two numbers';
alert(msg);
let firstNumber = prompt('Enter First Number:');
let operator = prompt(`VALID OPERATORS are + - / *
Enter Operator:`);
let secondNumber = prompt('Enter Second Number:');
let expression = `${firstNumber} ${operator} ${secondNumber}`;
let output;

function calculate() {

    if(operator === '+' || operator === '-' || operator === '/'|| operator === '*') {
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
    alert(`Result:
    ${expression} = ${output}
Note: Refresh page to perform another calculation.`);
    }
    else {
        alert(operator + ' is not  valid a operator');
    }
}
calculate();
