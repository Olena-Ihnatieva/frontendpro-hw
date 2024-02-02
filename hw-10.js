let numbers =  [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1. Знайти суму та кількість позитивних елементів.
let filteredPositiveNumbers = numbers.filter(function (item) {
    return item > 0;
});

console.log(filteredPositiveNumbers);

let countPositiveNumbers = 0;
numbers.forEach(function (item) {
    if(item > 0) {
        countPositiveNumbers++;
    }
});

console.log('Кількість позитивних елементів:', countPositiveNumbers);

let summPositiveNumbers = filteredPositiveNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log('Сума позитивних елементів:',summPositiveNumbers);

//2. Знайти мінімальний елемент масиву та його порядковий номер.
let minNumber = Math.min(...numbers);

console.log('Мінімальний елемент масиву:', minNumber);
console.log('Порядковий номер:', numbers.indexOf(minNumber));

//3. Знайти максимальний елемент масиву та його порядковий номер.
let maxNumber = Math.max(...numbers);

console.log('Максимальний елемент масиву:', maxNumber);
console.log('Порядковий номер:', numbers.indexOf(maxNumber));

//4. Визначити кількість негативних елементів.
let filteredNegativeNumbers = numbers.filter(function (item) {
    return item < 0;
});

console.log(filteredNegativeNumbers);

let countNegativeNumbers = 0;
numbers.forEach(function (item) {
    if(item < 0) {
        countNegativeNumbers++;
    }
});

console.log('Кількість негативних елементів:', countNegativeNumbers);

//5. Знайти кількість непарних позитивних елементів.
let filteredOddNumbers = numbers.filter(function (item) {
    return item % 2 !== 0 && item > 0;
});

console.log(filteredOddNumbers);

let countOddNumbers = 0;
numbers.forEach(function (item) {
    if(item % 2 !== 0 && item > 0) {
        countOddNumbers++;
    }
});

console.log('Кількість непарних позитивних елементів:',countOddNumbers);

//6. Знайти кількість парних позитивних елементів.
let filteredEvenNumbers = numbers.filter(function (item) {
    return item % 2 === 0 && item > 0;
});

console.log(filteredEvenNumbers);

let countEvenNumbers = 0;
numbers.forEach(function (item) {
    if(item % 2 === 0 && item > 0) {
        countEvenNumbers++;
    }
});

console.log('Кількість парних позитивних елементів:', countEvenNumbers);

//7. Знайти суму парних позитивних елементів.
let summEvenNumbers = filteredEvenNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log('Сума парних позитивних елементів:', summEvenNumbers);

//8. Знайти суму непарних позитивних елементів.
let summOddNumbers = filteredOddNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log('Сума непарних позитивних елементів:', summOddNumbers);

//9. Знайти добуток позитивних елементів.
let multnumbers = filteredPositiveNumbers.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);

console.log('Добуток позитивних елементів:', multnumbers);

//10. Знайти найбільший серед елементів масиву, остальні обнулити.
console.log('Масив:', numbers);
console.log('Максимальний елемент масиву:', maxNumber);

numbers = numbers.map((item) => {
    if(item !== maxNumber) {
        return 0;
    } else {
        return item;
    }
});

console.log('Новий масив:', numbers);