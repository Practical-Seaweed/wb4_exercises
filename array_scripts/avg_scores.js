"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(scoresArray){
    let total = 0;

    let lengthOfmyScores = scoresArray.length

    // some loop here that adds the scores together
    for(let i=0; i <lengthOfmyScores; i++){
        total += scoresArray[i];
    }

    return total / scoresArray.length
}

// display the average the myScores Array
console.log(getAverage(myScores));

// display the average of the yourScoresArray
console.log(getAverage(yourScores));