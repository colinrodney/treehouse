// Check file connected!
console.log(`connected`);

let title = "My First React Element!"; 
let description = "This is something brand new!"

let link = <a href="https://www.wafb.com" target="_blank">WAFB</a>

 
const header = (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <a>{link}</a>
    </div>
);

ReactDOM.render(
    header,
    document.getElementById("reactElement")
);

/**
 * {} when used w/ JSX indicate a JSX expression
 * curly braces Tell JSX to expect a JavaScript expression for evaluation.
 * 
 * Comments in JSX MUST be placed into curly braces containing standard JS comment syntax!
 */

