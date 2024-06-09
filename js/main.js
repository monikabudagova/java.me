// alert("Задание 1")
//   let x = +prompt("Введите первое число для сравнения ")
//   let y = +prompt("Введите второе число для сравнения ")

//     function hic() {
//     function Compare(a, b) {
//       if (a < b) {
//         return -1
//       } else if (a > b) {
//         return 1
//       } else if (a == b) {
//         return 0
//       } else {
//         return "Вы ошиблись при вводе чисел";
//       }
//     }
  
//     alert(Compare(x, y))
//   }
//     hic()
  


// function hic2() {
//     function Factorial(n) {
//       if (n == 1) return 1
//       return n * Factorial(n - 1)
//     }
//     alert("Задание 2")
//     let x = 1
//     do {
//       x = Math.trunc( +prompt("введите положительное число от 1: "))
//     } while (x < 1)
//     alert(Factorial(x))
//   }
//     hic2()
    let a = 0
    let b = 0
    let c = 0
function hic3() 
{
    function Splitter(a, b, c) {
      return a * 100 + b * 10 + c;
    }
    alert("Задание 3")
    do {
      a = Math.trunc(Math.abs(+prompt("Введите первое число: ")))
      b = Math.trunc(Math.abs(+prompt("Введите второе число: ")))
      c = Math.trunc(Math.abs(+prompt("Введите третье число: ")))
    } while (a > 9 || b > 9 || c > 9)
    alert(Splitter(a, b, c))
  }
  hic3()