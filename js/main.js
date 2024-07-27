// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach = [food]
//   }
// }

// let speedy = {
//    __proto__: hamster
// }

// let lazy = {
//   __proto__: hamster
// }


// speedy.eat("apple")
// console.log( speedy.stomach )


// console.log( lazy.stomach )

function printNumbers(from, to) {
  let current = from

  let timerId = setInterval(function() {
    console.log( current)
    if (current == to) {
      clearInterval(timerId)
    }
    current++
  }, 1000)
}

printNumbers(5, 10)