const leapYears = function(num) {

return (num % 4 != 0) ? false :
        (num % 100 != 0) ? true :
                (num % 400 == 0) ? true : false;

};

// Do not edit below this line
module.exports = leapYears;
