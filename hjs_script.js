"use strict";
const namePerson = prompt("Назовись странник:");
namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : console.log("студент");

const map = new Map();

map.set("en", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
map.set(
  "ru",
  "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
);

const lang = prompt("На каком языке вывести дни недели?", "только en или ru");

switch (lang) {
  case "en":
    console.log("Установленный язык: en");
    console.log(map.get("en"));
    break; //остановка работы блока
  default:
    //типа если не выбрано en всегда будет ru
    console.log("Установленный язык: ru");
    console.log(map.get("ru"));
}
