const add = function(a, b) {
	let c = (a+b);
  return c;
};

const subtract = function(a, b) {
	let x = (a - b);
  return x;
};

const sum = function(a) {
  let k = 0;
  for(item of a){
    k = (k + item)
  }
  return k;
};

const multiply = function(a) {
  let k = 1;
  for(item of a){
    k = (k * item) 
  }
  return k;
};

const power = function(a, b) {
  let x = Math.pow(a ,b);
  return x;
};

const factorial = function(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
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
