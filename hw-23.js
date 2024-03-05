let userArr = prompt('Введіть цифри від 1-20 через кому');
let arr = userArr.split(',').map(Number);
console.log('Your array:', arr);

arr.sort((a, b) => a - b);
console.log('Sorted array:', arr);

let removeNum = arr.splice(2, 3);
console.log('Remote numbers:', removeNum);
console.log('New array:', arr);