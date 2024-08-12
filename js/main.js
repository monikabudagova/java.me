const result = document.querySelector('#result') // div с result
result.innerHTML = 'ПРИВЕТ'

let ul =  document.createElement('ul')
let li =  document.createElement('li')

result.append(ul)
ul.append(li)
ul.innerHTML ='список'