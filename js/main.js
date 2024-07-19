// function textNumber(number) {
//     let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//     let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать']
//     let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто']
//     if (number > 0 && number <= 9) {
//       return first[number - 1]
//     }
//     if (number >= 10 && number <= 20) {
//       return second[number - 10]
//     }
//     if (number > 20 && number <= 99) {
//       let str = `${number}`
//       str = str.split('')
//       let firstNumber = str[0]
//       let secondNumber = str[1]
//       return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`
//     }
//   }
// console.log(textNumber(7))
// console.log(textNumber(20))
// console.log(textNumber(55))


function CamelCase(str) {
    if (str in document.body.style) {
      return str.replace(/-(\w)/g, (s, l) => l.toUpperCase());
    } else {
      throw new TypeError("Переданная строка не является CSS-селектором");
    }
  }
  import * as lodash from "https://cdn.skypack.dev/lodash@4.17.21";
console.log(lodash.camelCase('my-short-string'))