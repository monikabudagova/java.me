// let value = prompt('введите ваш логин на github')
// let url = 'https://api.github.com/users/' + value 

// // delay(10000).then(() => console.log('выполнилось через 3 секунды'))
// fetch(url)
// .then(response => response.json())
// .then(obj => {
//   let date = new Date(obj.create_at)

//   const year = date.getFullYear
//   const month = date.getMonth
//   const day = date.getDate

// class Animal {
//   console.log()
//   }})

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'))

