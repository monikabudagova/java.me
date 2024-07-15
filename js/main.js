// let tuday = new Date(2012, 1, 20, 3, 12)
// console.log(tuday)

// let user = {
//     name: "Василий Иванович",
//     age: 35
//   }
// let str = JSON.stringify(user)
// let prs = JSON.parse(str)
// console.log(prs)


let room = {
    number: 23
  }
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  }
  
  room.occupiedBy = meetup
  meetup.self = meetup

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }))
