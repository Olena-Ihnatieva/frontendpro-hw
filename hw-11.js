const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let min = 0;
    let max = characters.length;
    let result = 0;         //let result = ''; ?

    for (let i = 0; i < length; i++) {
        let charactersR = Math.floor(
            Math.random() * (max - min + 1) + min
        );
        result += characters[charactersR];
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);