// let salaries = {
//   jon: 100,
//   ann: 160,
//   pete: 130
// }
// let hic = 0
// salaries.mo = 430
// for(let key in salaries){
//   hic += salaries[key]
// }
// console.log(hic) //820


// multiplyNumeric = (menu) => {
//   console.log(menu);
//   for(let key in menu) {
//     if(typeof key == 'number') menu.key * 2
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title:'my menu'
// }

// multiplyNumeric(menu)
// console.log(menu)



// function User(params) {
//   this.name = params
//   this.isAdmin = false

// }
// let user1 = new User('moniks')
// let user2 = new User('valya')
// let user3 = new User('lilio')
// let user4 = new User('kara')



// console.log(user1.name)//momniks
// console.log(user2.name)//valya
// console.log(user3.name)//lilio
// console.log(user4.name)//kara

// console.log(user1.isAdmin)//false
// console.log(user2.isAdmin)//false
// console.log(user3.isAdmin)//lilio
// console.log(user4.isAdmin)//kara

function calculator() {
  this.read = function(a, b){
  this.a = +prompt('первое')
  this.b = +prompt('второе')
  return a, b
  },
  this.sum = function(a, b){
    return this.a + this.b
  },
  this.nul = function(a, b){
    return this.a * this.b
  }
}