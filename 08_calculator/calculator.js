const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let returnVal = 0
  for (a of array) {
    returnVal += a;
  }
  return returnVal
};

const multiply = function(array) {
  let returnVal = 1;
  for (a of array) {
    returnVal *= a;
  }
  return returnVal;
};

const power = function(a, b) {
  return a**b
};

const factorial = function(a) {
  if (a == 0)
    return 1;
  else if (a == 1)
    return 1;
  else {
    return a*(factorial(a-1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
