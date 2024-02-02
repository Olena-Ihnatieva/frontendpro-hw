/*10 * 10 * 10 = 1000
10 * 10 = 100
10 * 1 = 10
10 в нулевой степени = 1 //цикл окончен*/
function pow(num, degree) {
    if (degree > 0) {
        return num * pow(num, degree - 1);
    } else {
        return 1;
    }
}

const result = pow(10, 3);
console.log(result);
