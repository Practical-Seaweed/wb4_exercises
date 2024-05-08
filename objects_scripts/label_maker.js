"use strict"

/*
name
address
city
state
zip
*/


// create our person with some properties that describes the person
let person = {
    name: "Wilfredo",
    address: "1234 easy street",
    city: "Dallas",
    state: "Texas",
    zip: "75060"
};

// create a function that formats and prints an address for a contact to the console
function printContact(contact){

    console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city}, ${contact.state} ${contact.zip}
    `);

}

// run the function with the same person we created above
printContact(person);