let arr = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

console.log("Все числа:");
for (i = 1; i < 8; i++) {
  arr[i] = String(getRandomInt(-500000, 500000));
  console.log(arr[i]);
}
console.log("Числа на 2 или 4:");
for (i = 1; i < 8; i++) {
  let num;
  if (arr[i][0] === "-") {
    num = arr[i][1];
  } else {
    num = arr[i][0];
  }
  if (num === "2" || num === "4") {
    console.log(arr[i]);
  }
}
console.log("Простые числа:");
for (i = 1; i < 101; i++) {
  if (isPrime(i)) {
    console.log(i + " делители этого числа: 1 и " + i);
  }
}
