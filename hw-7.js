// 1.Вивести на сторінку в один рядок через кому числа від 10 до 20.
let string = '';

for(let i= 10; i <= 20; i++) {
    string = string + i + ', ';
}

console.log(string);

// 2.Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    console.log(`Квадрат числа ${i} = ${i * i}`);
}

// 3.Вивести таблицю множення на 7.
for(let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// 4.Знайти суму всіх цілих чисел від 1 до 15.
let add = null;
let a = 1;

do {
    add += a;
    a++;
} while (a <= 15);

console.log(add);

// 5.Знайти добуток усіх цілих чисел від 15 до 35.
let numbers = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
let mult = 1;

for(let i = 0; i < numbers.length; i++) {
    mult *= numbers[i];
}

console.log(mult);

// 6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum = 0;
let result;

for (let i = 1; i <= 500; i++) {
    sum += i;
}

result = sum / 500;
console.log(result);

// 7.Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumNumbers = 0;
for (let i = 30; i <= 80; i++) {
    if(i % 2 === 0){
        sumNumbers += i;
    }
}
console.log(`Сума парних чисел ${sumNumbers}`);

// 8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}

// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number = 100;

for(let i = 1; i <= number; i++) {
    if(number % i === 0) {
        console.log(`Всі дільники: ${i}`);
    }
}

// 10.Визначити кількість його парних дільників.
let number1 = 100;

for(let i = 1; i <= number1; i++) {
    if(i % 2 === 0) {
        console.log(`Парні дільники: ${i}`);
    }
}

// 11.Знайти суму його парних дільників.
let number2 = 100;
let sumNumbers2 = 0;

for(let i = 1; i <= number2; i++) {
    if(i % 2 === 0) {
        sumNumbers2 += i;
    }
}

console.log(sumNumbers2);

// 12. Надрукувати повну таблицю множення від 1 до 10.
for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(`Iteration ${i} ended`);
}