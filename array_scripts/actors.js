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

// get the length of the list so we know how many times to loop
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


// films with the letter "A"
for (let i = 0; i < numberOfAcademyMembers; i++) {
    if (academyMembers[i].films.some(film => film.includes("A"))) {
        console.log(`${academyMembers[i].name} has a films with the letter "A"`);
    }
}
// found this solution in GPT
// .some checks if at least one element in the array satisfies the provided condition, which in this case its true
// `film => film.includes("A")` is an arrow function that checks if the film name includes the letter "A"

// the one below is eric solution line 86
// for(let i=0; i < numberOfAcademyMembers; i++){

//     //look for the member with the memID of 187 and display their name
//     if(academyMembers[i].memID === 187){
//         console.log(`${academyMembers[i].name} is memberID 187`);
//     }

//     //how many members have been in at least 3 films
//     if( academyMembers[i].films.length >= 3 ){
//         console.log(`${academyMembers[i].name} is in the 3 or more film club`);
//     }


//     //how many have a name that starts with Bob
//     if( academyMembers[i].name.indexOf("Bob") === 0){
//         console.log(`${academyMembers[i].name} is in the my name starts with Bob club`);
//     }

//     //lets put the actors film in its own variabl
//     let actorsFilms = academyMembers[i].films
    

//     let startsWithA = false;
//     for(let i=0; i < actorsFilms.length; i++){

//         if(actorsFilms[i].indexOf("A") === 0){
//             startsWithA = true;
//             break;
//         }

//     }

//     if(startsWithA){
//         console.log(`${academyMembers[i].name} has been in movies that start with A`)
//     }

// }

