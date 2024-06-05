// let user = {
//     name: 'moniiks',
//     age: 15,
//     size:{
//         height: 183,
//         width: 50
//     }

// }
// let clone = Object.assign({}, user)
// console.log(clone)

// user.size.width = 150
// console.log(clone)

let calculator = {
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    },
    read(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
      }
  }

  calculator.read()
  alert( calculator.sum() )
  alert( calculator.mul() )