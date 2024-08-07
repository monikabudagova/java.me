// async function f(login){
//   fetch(`https://api.github.com/users/${login}`)
//   .then(response => response.json())
//   .then(obj => {
//     const date = new Date(obj.created_at)
//     const month = [
//       "январь", "февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"
//     ]
//     console.log(
//       `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
//     );
//   })
// }
// f(prompt(loginGitHub))

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence()

let one = generator.next()
let two = generator.next()
let three = generator.next()

console.log(JSON.stringify(one))
console.log(JSON.stringify(two))
console.log(JSON.stringify(three))

for(let value of generator){
  console.log(value)
}

