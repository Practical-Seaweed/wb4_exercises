"use strict"

// use a while loop to print out the phrase "I love loops" 7 times.
let i = 0;
while (i < 7) {
    console.log("I love loops");
    i++;
}


// practicing arrays with eric( our instructor )   :)


let cars = ["ford", "mazda", "infinity", "acura", "chevy", "mercedes"]

for (let i = 0; i < cars.length; i++) {

    // if(cars[i] !== "acura");{
    //     continue;
    // }

    console.log(`this ${cars[i]} is a POS`);
}


let listOfNumbers = [1, 2, 3, 4];
let listOfStrings = ["eric", "bob"];

let employees = [   // we are going to do this alot apparently
    {
        employeeId: 1,
        name: "eric",
        payRate: 400
    },
    {
        employeeId: 2,
        name: "will",
        payRate: 600
    }
]

function displayEmployees(someListOfEmployees) {

    for (let i = 0; i < employees.length; i++) {

        let currentEmployee = employees[i];


        console.log(`
        employeeId ${currentEmployee.employeeId}
        name: ${currentEmployee.name}
        Pay Rate: ${currentEmployee.payRate}
        `)
    }
}

displayEmployees(employees);




let moreEmployees = [
    {
        employeeId: 3,
        name: "bob",
        payRate: 100
    },
    {
        employeeId: 4,
        name: "rick",
        payRate: 800
    }
]

displayEmployees(moreEmployees);

// this function returns us a list of strings (array)
function getKids() {
    let kids = ["Natalie", "Brittany", "Zachary"]
    return kids;
}

// displays data in an array of names (lists the names that are passed in)
function displayKids(kids) {
    let numKids = kids.length;
    for (let i = 0; i < numKids; i++) {
        console.log(kids[i]);
    }
}






// create a list of numbers we want to add together
let numbersList = [1, 15 , 7, 99, 8];

// create a function that can take a list of number
// and add them together
function averageAList(listOfNumbers){
    
    // start our total at 0
    let total = 0;

    // get the length of the list so we know when to stop looping
    let lengthOfList = listOfNumbers.length

    // loop over the list of numbers and add each number to the total
    // using i to know what number to pull from the list
    for(let i=0; i<lengthOfList; i++){
        total += listOfNumbers[i];
    }

    return total / lengthOfList;

}

console.log(averageAList(numbersList));