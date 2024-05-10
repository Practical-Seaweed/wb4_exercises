"use strict"

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Giant Chewy Nerds", price: 5.79 },
    { product: "Snickers Bar", price: 2.89 },
    { product: "Hershey's Bar", price: 2.89 },
    { product: "Twizzlers", price: 3.79 },
    { product: "Sour Patch Kids", price: 2.89 },
    { product: "Ring Pop", price: 1.79 },
];

console.log("---------- Products ----------")

function comparingProducts(a, b) {
    if (a.product < b.product) {
        return -1;
    } else if (b.product > a.product) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

products.sort(comparingProducts);

console.log(products);

console.log("---------- Price ----------")

function comparingPrice(a, b) {
    if (a.price > b.price) {
        return -1;
    } else if (a.price < b.price) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

products.sort(comparingPrice);

console.log(products);

