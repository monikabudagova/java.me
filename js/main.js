// let str = 'вася';
// str = 'В' + str[1] + str[2] + str[3] 
// console.log(str)

// function ucFirst(str) {
//   let str1 = str[0].toUpperCase()
//   for(let i = 0;i <= str.leng;i++){
//     str1 = str1 + str[i]
//   }
//   console.log(str1)

// }
// ucFirst('вася')



// function checkSpam(str) {
//   str = str.toLowerCase()
//   if(~str.indexOf('viagra') || ~str.indexOf('xxx')){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
// }
// checkSpam('buy ViAgRA now')
// checkSpam('free xxxxx') 
// checkSpam("innocent rabbit") 



function truncate(str, maxlenght){
  console.log(str.substring(0, maxlenght) + '...')
  
}
truncate('вот,кошуео аврашы о вощупоу пулкотул уптклвып ыкапм')

