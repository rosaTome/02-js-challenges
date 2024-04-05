// Code along challenges

// ## Big Score Challenge

// - Create a script that will use a loop to iterate through an array of scores (numbers) and log to the console "12 is a big score!" or "50 is a big score!" for each score that is greater than **10**.

// array of scores
const allScores = [5, 10, 15, 20, 25];

// loop
for  (let i = 0; i < allScores.length; i++) {

    // if score greater than 10 - console.log 
    if (allScores[i] > 10) {
        
        console.log(`${allScores[i]} is a big score!`);
    }
}

// ### Extension

// - Use a function that takes in two parameters: an array of scores (numbers) and a big score threshold.
// - We should be able to change the score threshold to change what a big score is

// function 
// two params 
const getBigScore = (scores, threshold) => {

    for  (let i = 0; i < scores.length; i++) {

        // if score greater than threshold - console.log 
        if (scores[i] > threshold) {
            
            console.log(`${scores[i]} is a big score!`);
        }
    }
}

// invoke the function 
getBigScore(allScores, 20)