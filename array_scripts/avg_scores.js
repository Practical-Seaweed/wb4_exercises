"use strict"

// create the variables holding the arrays with the scores
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

// a function to calculate an average from a list of numbers
function getAverage(scoresArray) {

    // create a variable to keep track of our total of all the numbers in the array
    let total = 0;

    // getting the length of the list and assigning
    let lengthOfmyScores = scoresArray.length

    // some loop here that adds the scores together
    for (let i = 0; i < lengthOfmyScores; i++) {
        total += scoresArray[i];
    }

    return total / scoresArray.length
}

// display the average the myScores Array
console.log(getAverage(myScores));

// display the average of the yourScoresArray
console.log(getAverage(yourScores));

console.log("---------- Finding the Median ----------");

// this makes myScores and yourScores get numbered from low to highest
function smallToBig(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}
// sorts the list with our function
myScores.sort(smallToBig);
yourScores.sort(smallToBig);

// display the sorted results
console.log(myScores);
console.log(yourScores);

// we gotta make the median format now

function getMedian(){
    
}