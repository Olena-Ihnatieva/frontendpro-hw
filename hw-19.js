//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
let surname = prompt('Enter your surname')
let name = prompt('Enter your name')
let patronymic = prompt('Enter your patronymic')

let fullName = `${name} ${patronymic} ${surname}`;
console.log(fullName)

//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
let num = 66666;

let separateNum = Math.floor(num / 10000) + ' '
    + Math.floor(num / 1000) % 10 + ' '
    + Math.floor(num / 100) % 10 + ' '
    + Math.floor(num / 10) % 10 + ' '
    + num % 10;

console.log(separateNum);