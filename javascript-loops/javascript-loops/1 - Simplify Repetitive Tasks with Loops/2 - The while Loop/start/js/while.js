function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

/** TESTING */
// console.log(getRandomNumber(10))


//  variable to tract # of loop iterations
let counter = 0;

// logs 10 randomly generated numbers between 0 and 5 (upper limit of range)
while (counter < 10) {
  console.log(getRandomNumber(5))

  counter+=1;
}

// Notice the object literal syntax `${}`
console.log(`Counter = ${counter}`) // expect 10

/*

INFINITE LOOPS

Because a while loop's condition is evaluated BEFORE the loop runs
something INSIDE the loop has to change to allow you to break out of it 
(stop it from running):

  1. break keyword

  2. When using a loop variable such as a counter etc., write 
  something withn the loop body that changes the condition of
  that loop variable so the condition evaluates to false at some
  point.

  > If the loop condition always evaluates to true, the while loop
  runs continuously (forever) and will eventually crash the browser or the computer.
 
* */