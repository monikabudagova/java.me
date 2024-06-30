function addFood(a){
  let newFood = prompt("продукт ")
  let newCol = +prompt("сколько ")

  a.forEach(function(item, i, a){
      for (var key in item){

          if (item[key] == newFood){ 
              item[weigth] = item.weigth[key] + newCol                                                                     
              console.log(item[weigth])
              
              }
      }               
  })
}
      

  let listBuy = [{
      name : "kiwi",
      weigth: 2,
      status: "yes",
  },
  {    
      name : "milk",
      weigth: 1,
      status: "no",
      },
      {    
          name : "banana",
          weigth: 6,
          status: "no",
      }
] 


console.log(addFood)
console.log(listBuy)
  addFood(listBuy)