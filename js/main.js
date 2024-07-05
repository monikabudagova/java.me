let shopping = [ 
    { 
        productName: 'iPhone SE 2022', 
        productCount: 10, 
        productSold: false 
    }, 
    { 
        productName: 'iPhone 11 64 Гб', 
        productCount: 7, 
        productSold: false 
    }, 
    { 
        productName: 'iPhone 11 128 Гб', 
        productCount: 3, 
        productSold: true 
    }, 
    { 
        productName: 'iPhone Х 128 Гб', 
        productCount: 5, 
        productSold: false 
    }, 
    { 
        productName: 'iPhone X 256 Гб', 
        productCount: 3, 
        productSold: false 
    }, 
    { 
        productName: 'iPhone 13 128 Гб', 
        productCount: 2, 
        productSold: true 
    }, 
    { 
        productName: 'iPhone 13 256 Гб', 
        productCount: 8, 
        productSold: false 
    }, 
    { 
        productName: 'iPhone 14 128 Гб', 
        productCount: 4, 
        productSold: false 
    }, 
    { 
        productName: 'iPhone 14 256 Гб', 
        productCount: 6, 
        productSold: true 
    }, 
    { 
        productName: 'iPhone 15 256 Гб', 
        productCount: 9, 
        productSold: true 
    }, 
] 
 
function productShow(arr) { 
    arr.sort((a, b) => a.productSold - b.productSold).reverse().map(function (item) { 
        if (item.productSold === true) { 
            console.log(item.productName + ' - продан') 
        } else { 
            console.log(item.productName + ' - не продан') 
        } 
    }) 
}