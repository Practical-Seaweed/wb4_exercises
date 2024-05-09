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

let numberOfProducts = products.length;


// use this loop to find out what candies is less than $4.00
for (let i = 0; i < numberOfProducts; i++){

    if(products[i].price < 4){
        console.log(`${products[i].product} cost ${products[i].price} and that is less than 4.00`)
    }

}

// use this loop to find out what candies have M&M in the title
for (let i = 0; i < numberOfProducts; i++){

    if(products[i].product.indexOf("M&M") !== -1){    // indexOf helps us find something specific, such as "M&M"
        console.log(`${products[i].product} cost ${products[i].price} and that it has M&M in its name`)
    }

}

// use this loop to find if we carry swedish fish
for (let i = 0; i < numberOfProducts; i++){

    if(products[i].product === "Swedish Fish" ){   
        console.log(`yes we carry swedish fish`);
    }
}

/*

⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠟⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢷⡄⠈⡓⠢⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⠂⢹
⠈⡷⡄⠈⠲⢤⣈⠻⠉⠛⠉⠉⠁⠒⠖⠉⠉⠉⠒⠶⢦⣤⠴⠒⢉⣡⢴⠀⠀⠀
⠀⢸⡿⡂⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⡞⠉⠀⢀⣠⡞⠀
⠀⠀⢙⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⢠⡼⡟⠀⠀
⠀⠀⡼⠋⠀⣤⣀⠀⠀⠀⠀⠀⠈⠐⣂⣄⠀⠀⠀⠀⠀⠀⠀⢀⠀⣰⡟⠁⠀⠀
⠀⢠⡇⠀⠀⠘⠛⠃⠀⠀⠀⠀⠾⣿⠿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀
⠀⢸⡇⢺⡀⠀⢠⡒⠠⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡀⠀⠀⠸⡇⠀⠀⠀
⠀⢸⡇⣘⠑⡀⠀⠙⢏⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠂⠀⣔⣇⠀⠀⠀
⠀⢸⡇⡁⠀⢳⣶⣾⣷⣦⣄⣀⡀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀
⠀⠸⡇⠁⠀⠀⢏⠉⠀⠀⠙⠛⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⡏⠀⠀⠀
⠀⠀⠯⣀⣈⣀⣈⣐⣲⣄⣄⣤⣴⣆⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣈⣛⡧⠀⠀⠀

*/