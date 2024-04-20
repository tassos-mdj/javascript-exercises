const convertToCelsius = function(temp) {
  let cTemp = (temp - 32) * 5/9;
  cTemp = Math.round(cTemp * 10) / 10;
  return cTemp;
};

const convertToFahrenheit = function(temp) {
  let fTemp = temp * 9/5 + 32;
  fTemp = Math.round(fTemp * 10) / 10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
