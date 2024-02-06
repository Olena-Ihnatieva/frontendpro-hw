function outerF () {
    let x = 0;
    function innerF(y) {
        x += y;
        return x;
    }
    return innerF;
}

const sum = outerF();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));