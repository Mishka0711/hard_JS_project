"use strict";

const _aargument =
  "     Метод slice() извлекает часть строки и возвращает новую строку. Обязательный параметр — начало извлечения. Вторым параметром можно установить границу (по умолчанию — до конца строки).    ";

const getArgument = function (int_argument) {
  if (typeof int_argument != "string") {
    return "Это не строка";
  }
  int_argument = int_argument.trim();
  if (int_argument.length > 30) {
    return int_argument.slice(0, 30) + "...";
  } else {
    return int_argument;
  }
};

console.log("Длина аргумента: " + _aargument.length);
console.log("  Тип аргумента: " + typeof _aargument);
console.log("   До обработки: " + _aargument);
console.log("После обработки: " + getArgument(_aargument));
