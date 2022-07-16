// Check file connected!
console.log(`connected`);
/**
 * React Components
 * 
 * React does NOT use special templating languages
 * as do other front-end frameworks/ libraries.
 * 
 *    > Components: Written in plan JavaScript and contain
 *      ncessary logic needed to display small parts of UI.
 * 
 * Creating Components:
 * 
 * 2 Step Process:
 * 
 * 1. Define component as function or class.
 * 
 * 2. Display component in UI with JSX tag.
 * - see example below
 * 
 * NOTE: ALL React component function names REQUIRED to
 * begin w/ capital letters! []
 * 
 */


 
// Header
function Header(){
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    )
};


// Players
function PlayersList(){
    return(
        <div id="playersList">
            <span className="player">
                alpha
            </span>
        {/*score counter component referencing 
        PlayersList component - COMPOSITION*/}
        <Counter/>
    </div>

    )
}

// Counter
function Counter(){
    return(
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">0</span>
            <button className="counter-action increment">+</button>
        </div>
    )
}

// return 'app' as top-level component containing child components
function App(){
    return(
        <div className="scoreboard">
            <Header />
            <PlayersList />
            <Counter />
        </div>
    )
}
   

ReactDOM.render(
    // DONT FORGET TO CALL YOUR  TOP-LEVEL COMPONENT AS SELF-CLOSING TAG IN REACT IF NO CHILDRE
    // CALL AS STANDARD NON SELF-CLOSING TAG IF CHILD ELEMENTS PRESENT!
    <App />,
    document.getElementById("app")
)

// Render React component via JSX tag
// ReactDOM.render(
//     /*
//     Add SELF-CLOSING TAG exactly matching name of function
//     Capitalization of JSX tag names help decipher CUSTOM COMPONENTS
//     from NATIVE DOM ELEMENTS!

//     In JSX lowercase tag names considered to be regular HTML tags
//     When tag name capitalized - it refers to a CUSTOM JSX TAG -

//     JSX Tags should be self-closing if it has no child elements
//     to go inside. If space needed to hold child elements - use both
//     opening and closing tag as normal (Useful for nested components)

//     NOTE: 
//     Under hood-
//         JSX component tag also acts as function call to react.CreateElement!
//         - See Babel online compiler for more details!
    
//         In react, entire UI is an entire composition of functions!

//     */
    
//     <Header />,
//     document.getElementById("header")

// )

// // Players List
// ReactDOM.render(
//     <PlayersList />,
//     document.getElementById("playersList")
// )

// Counter
// ReactDOM.render(
//     <Counter/>,
//     document.getElementById("counter")
// )