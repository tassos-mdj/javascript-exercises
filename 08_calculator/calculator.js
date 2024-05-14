const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...args) {
	if (arguments.length === 0) { return 0;} else {
    for (let arg in args) {
      let sum = sum + arg;
    }
    return sum;
  } 
};

const multiply = function(...args) {
	if (arguments.length === 0) { return 0;} else {
    for (let arg in args) {
      let sum = sum + arg;
    }
    return sum;
  } 
};

const power = function(num1, num2) {
	let sum = 1;
  for (let i = 0; i < num2; i++) {
    sum = sum * num1;
  }
  return sum;
};

const factorial = function() {
	
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
