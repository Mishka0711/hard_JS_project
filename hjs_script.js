"use strict";

let date = new Date();
let date_a = [];
let date_b1 = [];
let date_b2 = [];

const array = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const ar_months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const declOfNum = function (number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
const add_zero = function (a) {
  if (String(a).length < 2) {
    return "0" + a;
  } else {
    return a;
  }
};

const real_time = setInterval(() => {
  date = new Date();
  date_a = [
    "Сегодня",
    array[date.getDay()] + ",",
    date.getDate(),
    ar_months[date.getMonth()],
    date.getFullYear(),
    "года,",
    date.getHours(),
    declOfNum(date.getHours(), ["час", "часа", "часов"]),
    date.getMinutes(),
    declOfNum(date.getMinutes(), ["минута", "минуты", "минут"]),
    date.getSeconds(),
    declOfNum(date.getSeconds(), ["секунда", "секунды", "секунд"]),
  ];
  date_b1 = [
    add_zero(date.getDate()),
    add_zero(date.getMonth() + 1),
    add_zero(date.getFullYear()),
  ];
  date_b2 = [
    add_zero(date.getHours()),
    add_zero(date.getMinutes()),
    add_zero(date.getSeconds()),
  ];
  document.querySelector(".text1").innerText = date_a.join(" ");
  document.querySelector(".text2").innerText =
    date_b1.join(".") + " - " + date_b2.join(":");
}, 1000);

real_time;

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
