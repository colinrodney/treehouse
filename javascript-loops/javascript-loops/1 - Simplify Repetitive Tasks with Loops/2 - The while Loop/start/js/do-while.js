// JS do-while loop

// Repeats an action continously as long as a condition is TRUE

/*
Different from "while" loop - a do-while loop will test its 
condition at least once BEFORE condition is checked!

The condition is not tested until AFTER the code block!
*/ 

/** do-while syntax:
 * 
 * do{
        run these code statements
 * }
    while (some_true_condition)
 */

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }


//   Print 15 random #'s between 1 and 4 to console
// REMEMBER do-while loop will execute code at least once since its condition is tested AFTER first execution!

// NOTE when using a variable in loop condition it must be incremented/decremented WITHIN THE LOOP
let counter = 0 

do{
    console.log(getRandomNumber(5));
    counter += 1;  
}
while(counter < 5);

/*USE CASES
    > While loops / do-while loops are largely interchangeable

    > While loops: Used when condition need to be checked BEFORE any code executes

    > do-while loops: Used when condition can be checked AFTER code has executed for first time!
*  */

  
 
  
  
  