//1. Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

/*let arr = [89, 'a', true, 'w', 34, 'g', 42, 'v', false, 3, 'e', undefined, 'q', 15];

console.log('My arr', arr);

let newArr = arr.filter(function(item) {
    return typeof item === 'number';
});

console.log('Just numbers', newArr);

let sumItems = newArr.reduce(function(acc, cv) {
    return acc + cv;
}, 0);

console.log('Sum numbers', sumItems);

let averageAr = sumItems / newArr.length;
console.log('arithmetic average', averageAr);*/

//2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

/*function doMath() {
    let x = +prompt('Hello:) Please, enter the first number');
    let znak = prompt('Choose the sign: +, -, *, /, %, ^');
    let y = +prompt('Enter the second number');
    let result;

    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = 'Error';
    }

    console.log(`Result ${x} ${znak} ${y} =`, result);
}

doMath();*/


//3.Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

/*function someInfo() {
    let nameSurname = prompt('Hello :) Please enter your first and last name with a space');
    let ageCity = prompt('Please enter your age and city with a space');

    let personInfo = [];

    personInfo.push([nameSurname]);
    personInfo.push([ageCity]);

    console.log('Person information:', personInfo);
}

someInfo();*/

//4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

/*function removeLetters(string, lettersForRemove) {
    let result = '';
    for (let letter of string) {
        if (!lettersForRemove.includes(letter)) {
            result += letter;
        }
    }
    return result;
}

let string = prompt('Hello :) Please enter your favorite idiom');
let lettersForRemove = prompt('Please enter the letters you would like to delete, with commas.');
let changedString = removeLetters(string, lettersForRemove);

console.log(changedString);*/
