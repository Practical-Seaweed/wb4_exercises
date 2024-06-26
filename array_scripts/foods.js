"use strict"
/*


                            ╱|、
                          (˚ˎ 。7  
                           |、˜〵          
                          じしˍ,)ノ




*/
// this is a list of lunch reciepts (objects that represents a meal)
let lunchOrder = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

function addEmUP(mealsArray){

    // start a variable to keep track of the total
    let total = 0;

    // create a variable that keeps track of the length of the Array
    let numberOfMeals = mealsArray.length

    for(let i = 0; i < mealsArray.length; i++){

        total += mealsArray[i].price

    }

    return total;

}

let lunchTotal = addEmUP(lunchOrder);
let lunchTax = lunchTotal * (8 / 100);
let lunchTip = lunchTotal * (18 / 100);
let totalDue = lunchTotal + lunchTax + lunchTip;

console.log("The lunch total was: " + lunchTotal);
console.log("The tax total was: " + lunchTax.toFixed(2));
console.log("The tip was: " + lunchTip.toFixed(2));
console.log("The total due is: " + totalDue.toFixed(2));