let namePerson = prompt("Назовись странник:");
namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : console.log("студент");

days = [
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
];

let lang = prompt("На каком языке вывести дни недели?", " только ru или en");

if (lang !== "en") {
  lang = "ru";
}
console.log("Установленный язык: ", lang);

for (let i = 0; i < 7; i++) {
  switch (lang) {
    case "ru":
      console.log(days[0][i]);
      break;
    case "en":
      console.log(days[1][i]);
      break; //остановка работы блока
    default:
      console.log("other");
  }
}
