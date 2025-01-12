"use strict";

const array = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let date = new Date();

// document.write(array.join("<br>"));
// console.log(array.join("\n"));

for (let key in array) {
  let str = "";
  if (key <= 4) {
    str = "<br>" + array[key];
  } else {
    str = "<br>" + array[key].italics();
  }
  if (key == date.getDay()) {
    str = str.bold();
  }
  document.write(str);
}
