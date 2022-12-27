const convertToCelsius = function(x) {
  let num = (x - 32) * (5 / 9)
  result = Math.round(num * 10) / 10;
  return result;
};

const convertToFahrenheit = function(y) {
  let num = (y * (9 / 5) + 32)
  result = Math.round(num * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
