function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
  }
  

  console.log("for-loop: connected!");

  const main = document.querySelector("main");
  let html = "";

  for (let i = 0; i < 100; i++){
    // Again notice the template literal syntax!

    // main.innerHTML = html += `<div>${i}</div>`;
    html += `<div>${i}</div>`;
  }
  main.innerHTML = html;
//   console.log(main.innerHTML);


  /** For loop
   * 
   * > Compact variation of the while loop and with similar parts
   * > Useful when you know how many times an action needs to be repeated!
   * 
   * Syntax + structure:
   * 
   * for (loop_variable_Here; someExpression_Here; updateLoop_Here){
   *    LOOP BODY: statements to be executed go in here!
   * }
   * 
        for (let i = 5; i <= 100; i++){
            console.log(`${i}`)
        };
   * 
    > As with do-while and while loops, the loop body and its statements
    run ONLY if the expression(condition to be tested) evaluates to TRUE!

    NOTE: For loop variable names should generally be a singler letter,
    particularly when the variable acts as a loop counter!


    ** Review video "Dynamically Display HTML w/ a loop-
    Using a 'for' loop to build a string containing HTML,
    then display it on web page."
   */
