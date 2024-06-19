// let arr = []

// function  sumInput() {
//     while (true) {
//         let value = prompt('')
//         if(value == null) {
//             break
//         } else if (isFinite(value)) {
//             arr.push(value)
//         }else break
//     }
// }

// sumInput()

// splice

// let arr = ["Я", "изучаю", "JavaScript"]

// arr.splice(0, 3, "Давай", "танцевать", "JavaScript")

// console.log( arr )

// let a =  ["Я", "изучаю", "JavaScript"]

// let b = a.concat()

// b[0] = 'мы'


// console.log(a)

// let a =  ["Я", "изучаю", "JavaScript"]
// a.forEach(console.log)

// let a = ['бананы', 'апельсины', 'киви', 'арбуз', 'манго', 'киви',]
// let col = 0
// for(let i = 0; i < a.length; i++){
//     if(col > 0){
//          col = a.indexOf('киви', i)
//     }
//     console.log(col)
// }


let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ]
  
  let user = users.find(item => item.id == 1)

 console.log(user.name)//Вася