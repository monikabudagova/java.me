let value = prompt('введите ваш логин на github')
let url = 'https://api.github.com/users/' + value 

fetch(url)
.then(response => response.json())
.then(obj => {
  let date = new Date(obj.create_at)

  const year = date.getFullYear
  const month = date.getMonth
  const day = date.getDate

  console.log()
  })

console.log(
  `зарегистрирован ${day}-${month}-${year} года`
)

