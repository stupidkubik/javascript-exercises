const ftoc = function(temperature) {
  let newTemperature = (temperature - 32) * 5 / 9;
  if (newTemperature < 0) {
    return newTemperature = -(Math.round(Math.abs(newTemperature) * 10) / 10);
  } else {
    return newTemperature = Math.round(newTemperature * 10) / 10;
  }
};

const ctof = function(temperature) {
  let newTemperature = temperature * 9 / 5 + 32;
  if (newTemperature < 0) {
    return newTemperature = -(Math.round(Math.abs(newTemperature) * 10) / 10);
  } else {
    return newTemperature = Math.round(newTemperature * 10) / 10;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
