// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// delay(10000).then(() => console.log('выполнилось через 3 секунды'))


class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик")
console.log( rabbit.name)