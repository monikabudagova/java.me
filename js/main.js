// let str = 'dfkg fkg fnkji fhiuh  b'

// console.log(str.length)



// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   }
  
//   function sumSalaries(obj){
//     sum = 0

//     for(let rub of Object.values(obj)) sum += rub{
//         return rub
//     }
//   }

// console.log( sumSalaries(salaries) )


let user = { name: "John", years: 30 }

// ваш код должен быть с левой стороны:
let {name: name, year: age, isAdmin: isAdmin = false} = user

console.log( name ) // John
console.log(age ) // 30
console.log( isAdmin ) // false