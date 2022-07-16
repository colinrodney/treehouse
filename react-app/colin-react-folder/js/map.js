// Check file connected!
console.log(`connected`);


/**

 */


const players = [
    {
        name: "Guil",
        score: 50,
        id: 1,
      },
      {
        name: "Treasure",
        score: 85,
        id: 2,
      },
      {
        name: "Ashley",
        score: 95,
        id: 3,
      },
      {
        name: "James",
        score: 80,
        id: 4,
      }
]

// Header
function Header(props){
    // console.log(props) // log props object
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">{props.totalPlayers}</span>
        </header>
    )
};

// Players
function PlayersList(props){
    
    return(
        <div id="playersList">
            <span className="player">{props.name}</span>
            <Counter score={props.score}/>
        </div>
    )
}

// Counter
function Counter(props){
    
    return(
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment">+</button>
        </div>
    )
}


// return 'app' as top-level component containing child components
function App(props){
    console.log(`Application props: `, props)
    return(
        <div className="scoreboard">
            {/* Header  */}
            <Header 
                title="scoreboard"
                totalPlayers={1}
             />

            {/* PlayersList */}
            {/* .map is treated like a JS expression and as such it needs
            MUS be placed within curly braces! */}
            {props.initialPlayers.map(players =>
                <PlayersList
                name={players.name}
                score ={players.score}
                key={players.id}
            />
            )}
        </div>
    )
}
   

// DONT FORGET TO CALL YOUR  TOP-LEVEL COMPONENT AS SELF-CLOSING TAG IN REACT IF NO CHILDRE
// CALL AS STANDARD NON SELF-CLOSING TAG IF CHILD ELEMENTS PRESENT!
ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById("app")
)

