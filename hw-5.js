let sign = prompt('Choose a math operation: + - * /');
let number_first= +prompt('Enter the first number:');
let number_second= +prompt('Enter the second number:');

switch (sign) {
    case '+':
        alert(`Result: ${number_first} ${sign} ${number_second} = ${number_first + number_second}`);
        break;
    case '-':
        alert(`Result: ${number_first} ${sign} ${number_second} = ${number_first - number_second}`);
        break;
    case '*':
        alert(`Result: ${number_first} ${sign} ${number_second} = ${number_first * number_second}`);
        break;
    case '/':
        if (number_second !== 0) {
            alert(`Result: ${number_first} ${sign} ${number_second} = ${number_first / number_second}`);
        } else {
            alert(`Error: you can't divide by zero`);
        }
        break;
    default :
        alert(`Error: you've entered the wrong sign`);
}