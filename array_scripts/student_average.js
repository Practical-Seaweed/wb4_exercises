"use strict"

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

// this is us getting the total number of students on the list


function calcStudentAverages(listOfStudents) {
    let numberOfStudents = listOfStudents.length;

    // lets loop over the students array
    for (let i = 0; i < numberOfStudents; i++) {

        // start a running total for the scores to be stored in the total variable
        let total = 0;
        // get the array of scores for the specific student
        let currentStudentScores = listOfStudents[i].scores

        // capture the length or number of scores for the student so we can use for
        // the next loop
        let numberOfScores = currentStudentScores.length

        // now we need to loop of that student scores
        for (let i = 0; i < numberOfScores; i++) {

            total += currentStudentScores[i]
        }

        // calc the specific student average by dividing the total by the number of scores
        let studentAverage = total / numberOfScores;


        // print the info for the student to the console.
        console.log(`${listOfStudents[i].name} has an average score of ${studentAverage.toFixed(2)}`)

    }
}
calcStudentAverages(students);

/*

(_＼ヽ
　 ＼＼ .Λ＿Λ.
　　 ＼(　ˇωˇ)　
　　　 >　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
`ノ ) 　 Lﾉ
(_／

*/