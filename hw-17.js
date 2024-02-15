//1.Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

//2.Один долар коштує 27 гривень.
// Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.


const numArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const sumArr = numArr.map(function (el) {
    return el * 27;
})

console.log(sumArr)

//3.Дане ціле число.
// Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const n = 42;
for (let i = 1; i <= 100; i++) {
    if (i ** 2 <= n) {
        console.log(i);
    }
}

//4.Дане ціле число.
// З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

function checkingFun(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
}

const number = 11;
console.log(checkingFun(number) ? `${number} - it's a prime number` : `${number} - it's not a prime number`);

//5.Дане деяке число.
// Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

function testFun(num) {


}
const num = 13;
console.log(testFun(num));
