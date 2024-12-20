//
let screenPrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

do {
  screenPrice = prompt("Сколько будет стоить данная работа?");
} while (!isNumber(screenPrice));
//пробелы убираются после проверки на null и в переменную заносится число
screenPrice = Number(screenPrice.trim());
console.log("typeof screenPrice:" + typeof screenPrice);
console.log("screenPrice:" + screenPrice);
