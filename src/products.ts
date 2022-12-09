interface Product{
    name: string,
    price: number
};

let products:Product[] = [{name: "milk", price: 2.50}, {name: "butter", price: 1.50}, {name: "bread", price: 3.50}];

function calcAverageProductPrice (array:Product[]) {
let total:number = 0;
if(array.length === 0){
    return 0;
}
    for(let item of array){
    total += item.price 
}
return total / array.length
}

let average = calcAverageProductPrice(products)
console.log(average);

export { Product, calcAverageProductPrice}