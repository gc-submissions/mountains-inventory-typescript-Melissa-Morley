import { Product } from "./products";

interface InventoryItem{
    product:Product,
    quantity:number
};

let inventory:InventoryItem[] = 
                                [{product: {name: "motor", price: 10.00}, quantity: 10}, 
                                {product: {name: "sensor", price: 12.50}, quantity: 4}, 
                                {product: {name: "LED", price: 1.00}, quantity: 20}]


function calcInventoryValue (array:InventoryItem[]) :number {
    let total: number = 0;
    if (array.length === 0){
        return 0;
    }
    for(let item of array){
        total += item.product.price * item.quantity;
    }
    return total;
}          

let total = calcInventoryValue(inventory);
console.log(total);

export { calcInventoryValue}