
// CODE REFACTOR SOLUTION!

// console.log("connected");


let html = '';
// let colors = randomRGB();



// generate random numbers
function getRGBvalue(){
    return Math.floor(Math.random() * 256)
}

// Build string containing rgb values
function randomRGB(){
    colors = `rgb(${getRGBvalue()},${getRGBvalue()},${getRGBvalue()})`
    return colors;
}

for (let i = 0; i < 10; i++){ 
    html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}
//Write back to DOM
document.querySelector('main').innerHTML = html;





/** todos:
 * 1. Build loop structure
 * 2. Encapsulate RGB codeblock above
 * 3. Increment counder variable by one at each iteration
 * figure out whether or not 'html' variable needs to go inside or 
 * outside of the loop,
 * 
 *  BONUS: Set helper function to DRY up code for colors being set
 * 
 * NOTE: 
 * WHen code is seen repeated multiple times throughout your code-
 * it's a VERY GOOD indication to place that code into its own separate 
 * function or codeblock as to minimize code redundancy!
 */

