let number_first = +prompt('Enter the first number:');
let number_second = +prompt('Enter the second number:');

let add_result = number_first + number_second;
let sub_result = number_first - number_second;
let mult_result = number_first * number_second;
let div_result = number_first / number_second;

alert(`${number_first} + ${number_second} = ${add_result},
${number_first} - ${number_second} = ${sub_result},
${number_first} * ${number_second} = ${mult_result},
${number_first} / ${number_second} = ${div_result}`);