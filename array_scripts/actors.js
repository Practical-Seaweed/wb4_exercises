"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots","Cowboy Boots"]
    },
];

let numberOfAcademyMembers = academyMembers.length;



// need to find the Academy Member whose ID is 187?
for (let i = 0; i < numberOfAcademyMembers; i++){

    if(academyMembers[i].memID === 187){    // indexOf helps us find something specific, such as "M&M"
        console.log(`${academyMembers[i].name} is the one with the 187 `)
    };

}

// Who has been in at least 3 films?
for (let i = 0; i < numberOfAcademyMembers; i++) {
    
    if (academyMembers[i].films.length >= 3) {
        console.log(`${academyMembers[i].name} has been in at least 3 films`)
    }
}

// Who has a name that starts with "Bob"?
for (let i = 0; i < numberOfAcademyMembers; i++) {
    if (academyMembers[i].name.indexOf("Bob") === 0) {       // found bob at position zero
        console.log(`${academyMembers[i].name} has a name that starts with bob`)
    }
}

// for (let i = 0; i < numberOfAcademyMembers; i++) {
//     if (academyMembers[i].name.indexOf("Bob") !== -1) {          !==  <-- this means not equal too
//         console.log(`${academyMembers[i].name} has a name that starts with bob`)
//     }
// }

// films with the letter a
for (let i = 0; i < numberOfAcademyMembers; i++) {
    if (academyMembers[i].films.indexOf("A") === 0) {
        console.log(`${academyMembers[i].name} has a films with the letter a`)
    }
}



















