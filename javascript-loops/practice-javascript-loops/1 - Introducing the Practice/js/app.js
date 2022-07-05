// Chk script attahced to HTML
console.log("connected");


// do-while solution!
const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
console.log(randomNumber);
let guess;
let message;

// track number of guess attempts
let attempts = 0;

// do-while Solution 
do{
  guess = parseInt(prompt("Guess a number 1-10: "));
  attempts += 1;
  if (guess === randomNumber){
    message = `<h1>You guessed correctly with ${guess}! with ${attempts} tries</h1>`
    main.innerHTML = message;
    break;
  }
  else if(attempts === 10){
    message = `<h1>You did not guess my number after ${attempts} tries. It was ${randomNumber}.</h1>`
    main.innerHTML = message;
  }
}
while(attempts < 10);

// for loop solution

// const main = document.querySelector('main');
// const randomNumber = getRandomNumber(10);
// // console.log(randomNumber);
// let guess = parseInt(prompt("Guess a number 1-10: "));
// let message;

// track number of guess attempts
// let attempts = 0;

// for (let attempts = 1; i <= 10; i++){
//   // guess = parseInt(prompt("Guess a number 1-10: "));

//   if (guess === randomNumber){
//   message = `<h1>You guessed correctly with ${guess}! with ${attempts} tries</h1>`
//   // main.innerHTML = message;
//   break;
//   }
//   else{
//     guess = parseInt(prompt("Guess a number 1-10: "));

//   }
//   else if(attempts === 10){
//     message = `<h1>You did not guess my number after ${attempts} tries. It was ${randomNumber}.</h1>`
//     // main.innerHTML = message;
//   }
// }
// main.innerHTML = message;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}


// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
  /**
   * Prompt user for input
   * 
   * Store input to variable 'guess'
   */

//  2) End the loop when the user's guess matches the random number
/**
 * chk value of guess against computer generated number:
 *  if value in 'guess' is same as computer generated number":
 *    break out of loop + go to # 3
 *  otherwise:
 *    prompt user repeatedly UNTIL they enter the correct number
 */
//  3) Display a message letting the user know they guessed the number