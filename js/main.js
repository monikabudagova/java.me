// let animal = {
//   jumps: null
// }

// let rabbit = {
//   __proto__: animal,
//   jumps: true
// }

// console.log( rabbit.jumps )// true (1)

// delete rabbit.jumps

// console.log(  rabbit.jumps ) // null (2)

// delete animal.jumps

// console.log( rabbit.jumps ) // undefined (3)

// let head = {
//   glasses: 1
// }

// let table = {
//   pen: 3,
//   __proto__: head
// }

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// }

// let pockets = {
//   money: 2000,
//   __proto__: bed
// }
// console.log(pockets.pen)
// console.log(bed.glasses)
// console.log(table.money)

// let obj2 = new obj.constructor()
// let obj = obj
// function obj(hic){
//   this.hic = hic
// }
// console.log(obj2.hic)


let obj2 = new obj.constructor()
let obj = obj
function obj(hic){
  this.hic = hic
}
console.log(obj2.hic)
