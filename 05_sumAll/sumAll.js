const sumAll = function(num1, num2) {

    function isNumber(value) {
        return typeof value === 'number';
      }

    let sum = 0;

    if (num1 < 0 || num2 < 0) return "ERROR";

    else if (num1 % 1 !== 0 || num2 % 1 !== 0) return "ERROR";

    else if (!(isNumber(num1)) || !(isNumber(num2))) return "ERROR";

    else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        return sum;
    }

    else {
        for (let i = num2; i <= num1; i++) {
            sum+=i;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
