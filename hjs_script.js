num = 266219;
console.log(typeof num + " " + num);
let str_num = String(num);
str_num_len = str_num.length;
console.log("длина числа: ", str_num_len);
all_str_num = 0;
for (let i = 0; i < str_num_len; i++) {
  if (i > 0) {
    all_str_num = all_str_num * str_num[i];
  } else {
    all_str_num = str_num[i];
  }
  console.log(i + " " + str_num[i] + " " + all_str_num);
}
console.log("перемноженные цифры num: ", all_str_num);
console.log("all_str_num в 3ей степени: ", all_str_num ** 3);
console.log(
  "all_str_num первые 2 цифры: ",
  String(all_str_num ** 3).slice(0, 2)
);
