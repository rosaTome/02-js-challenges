/* JS3 builds on the previous challenges and adds the use of Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are separated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that creates a a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */

// function - creates a recipe string from array 
export const createRecipeString = (ingredientsArr) => {
  const recipeString = ingredientsArr.join("+");
  return recipeString;
};

/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Tony","Dave"]
 */
// function - takes array, returns a new array with the first and last 
export const getFirstAndLastItems = (itemsArr) => {
  const first = itemsArr[0];
  const last = itemsArr[itemsArr.length - 1];
  return [first, last];
};

/**
 * A function that takes an array of scores and returns the sum of all scores by looping through the array.
 *
 * @param {number[]} scoreArr [1,2,3]
 * @return {number} 6
 */

// function
export const totalScores = (scoreArr) => {
  let sum = 0;

  // loop
  for (let i = 0; i < scoreArr.length; i++) {
    sum += scoreArr[i];
  }

  return sum;
};

/* Intermediate Challenges */

/**
 * A function that takes an number and returns the total of the range of numbers between 0 and the given number.
 * e.g. 10 => 0+1+2+3+4+5+6+7+8+9+10 = 55.
 *
 * @param {number} rangeMax 10
 * @return {number} 55
 */

export const totalRange = (rangeMax) => {
  let sum = 0;
  for (let i = 0; i <= rangeMax; i++) {
    sum += i;
  }
  return sum;
};

/**
 * A function that takes an array and returns a NEW ARRAY where the last item has been moved to the front of the array and removed from the back.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Dave","Tony","John"]
 */

// function 
export const moveFirstAndLastItems = (itemsArr) => {

  // takes an array 
  const result = [...itemsArr];

  // new array where the last item has been moved to the front of the array and removed from the back 
  const lastItem = result.pop();
  result.unshift(lastItem);

  return result;
};

// console.log(itemsArr.pop(itemsArr[itemsArr.length - 1]), itemsArr.unshift(itemsArr[itemsArr.length - 1]));

/**
 * Read this article on how to clone an array.
 * https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
 *
 * From here on you should not be mutating the input array. Clone it first and then mutate / manipulate.
 */

/**
 * A function that takes an array of numbers and returns a NEW ARRAY with only the odd numbers from the given array. It should not mutate the input array.
 *
 * @param {number[]} numberArr [1,1,8,1,1,8]
 * @return {number[]} [1,1,1,1]
 */

export const removeEvenNumbers = (numberArr) => {
  const numberArrTwo = [...numberArr];
  return numberArrTwo.filter (num => num % 2 !== 0);
};

const numberArr = [1,1,8,1,1,8];
const oddNumbers = removeEvenNumbers(numberArr);
console.log(oddNumbers);

/* Advanced Challenges */

/**
 * A function that takes an array of numbers. It returns the average from the given array.
 * The result should be rounded to the nearest whole number.
 *
 * @param {number[]} numberArr [1,2,3]
 * @return {number} 2
 */

// function
export const generateAverage = (numberArr) => {
  const total = totalScores(numberArr);
  const average = total / numberArr.length;
  return Math.round(average) || 0;
};



/**
 * A function that uses a loop to reverse the order of an Array. It should return a NEW ARRAY and not Mutate the original array.
 *
 * @param {number[]} toReverseArr [1,2,3]
 * @return {number} [3,2,1]
 */

// function 
export const reverseOrder = (toReverseArr) => {
  const reversed = [];
  for (let i = toReverseArr.length - 1; i >= 0; i--) {
    reversed.push(toReverseArr[i]);
  }
  return reversed;
};


/* Expert Challenges */

/**
 * Given two arrays, The first being an array of players and the second being their corresponding scores. Loop through them and generate a new array matching the format below.
 *
 * ["P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE"]
 *
 * P:INDEX will start from 1. e.g P:1 not P:0
 *
 * If the inputs are not the same size or empty return "invalid inputs"
 *
 * @param {string[]} playersArr ["Tony","John","Dave"]
 * @param {number[]} scoresArr [45,55,66]
 * @return {string[]} ["P:1 Tony scored 45","P:2 John scored 55","P:3 Dave scored 66"]
 */

// function w/ two arrays 
export const generateHighscores = (playersArr, scoresArr) => {
  if (playersArr.length !== scoresArr.length || !playersArr.length)
    return "invalid inputs";
  const scores = [];
  while (scores.length !== playersArr.length) {
    const index = scores.length;
    const message = `P:${index + 1} ${playersArr[index]} scored ${
      scoresArr[index]
    }`;
    scores.push(message);
  }

  return scores;
};


/**
 * A function that takes a string and creates a simple encrypted message.
 *
 * The string will be broken into 3 lists.
 * The first three letters will go into their own list.
 * The next three letters will follow this pattern.
 * Joining the first three letters in each of their list.
 * The rest of the letters will follow this pattern.
 * Each list will be joined together and returned as an encrypted message.
 *
 * The word "encrypted" would be broken into:
 *
 * ["e", "r", "t"]
 * ["n", "y", "e"]
 * ["c", "p", "d"]
 *
 * and joined together as ert + nye + cpd to give a final string of "ertnyecpd"
 *
 * @param {string} toEncrypt "encrypted"
 * @return {string} "ertnyecpd"
 */

// function - takes string and return encrypted message
export const encryptString = (toEncrypt) => {
  const encryptArray = [[], [], []];

  for (let i = 0; i < toEncrypt.length; i++) {
    const placementIndex = i % 3;
    const letter = toEncrypt[i];
    encryptArray[placementIndex].push(letter);
  }
  return encryptArray.flat().join("");
};

