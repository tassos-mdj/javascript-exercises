const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function([...args]) {
	let total = 0;
  if (arguments.length < 1) { return sum; } else {
    for (let num of args) {
      total = total + num;
    }
  }
  return total; 
};

const multiply = function([...args]) {
	let sum = 1;
  if (arguments.length < 1) { return 0;} else {
    for (let arg of args) {
      sum = sum * arg;
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

const factorial = function(num) {
	let sum = 1;
  for (let i = 1; i < num + 1; i++) {
    sum = sum * i;
  }
  return sum;
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
