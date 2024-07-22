// function printNumbers(from, to){
//   let current = from
// setTimeout(function go (){
//     console.log(current) 
//   if(current){
//     clearInterval(i)
//   }
//   }
//   num++;1000)


//   console.log(from)

// }
// printNumbers(5, 6)

// console.log(Boolean(Math.floor(Math.random*3)))







function work(a, b) {
  alert( a + b )// произвольная функция или метод
}

work = spy(work)

work(1, 2)// 3
work(4, 5)// 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ) // "call:1,2", "call:4,5"
}

function spy(func){
  function hic(){
    
  }
}