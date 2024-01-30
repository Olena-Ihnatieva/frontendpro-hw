let numbers =  [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1. Знайти суму та кількість позитивних елементів.
let filteredPositiveNumbers = numbers.filter(function (item) {
    return item > 0;
});

console.log(filteredPositiveNumbers);

let summPositiveNumbers = filteredPositiveNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(summPositiveNumbers);

//2. Знайти мінімальний елемент масиву та його порядковий номер.

//3. Знайти максимальний елемент масиву та його порядковий номер.

//4. Визначити кількість негативних елементів.
let filteredNegativeNumbers = numbers.filter(function (item) {
    return item < 0;
});

console.log(filteredNegativeNumbers);

//5. Знайти кількість непарних позитивних елементів.
let filteredOddNumbers = numbers.filter(function (item) {
    return item % 2 !== 0 && item > 0;
})

console.log(filteredOddNumbers);

//6. Знайти кількість парних позитивних елементів.
let filteredEvenNumbers = numbers.filter(function (item) {
    return item % 2 === 0 && item > 0;
})

console.log(filteredEvenNumbers);

//7. Знайти суму парних позитивних елементів.
let summEvenNumbers = filteredEvenNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(summEvenNumbers);

//8. Знайти суму непарних позитивних елементів.
let summOddNumbers = filteredOddNumbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(summOddNumbers);

//9. Знайти добуток позитивних елементів.
let multnumbers = filteredPositiveNumbers.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);

console.log(multnumbers);

//10. Знайти найбільший серед елементів масиву, остальні обнулити.
