// Check file connected!
console.log(`connected`);


/**
 * PROPS
 * 
* Attributes on an HTML element give that element
* further meaning and/or behavior and provide
* extra info to browser (class name, ID etc.)
 * 
 *  Within React, every component and element
 *  can receive attributes just like an element
 *  in HTML could. These 'attributes' are calls 
 *  props (properties) in React.
 * 
 * Props Defined:
 *  A list of properties used to pass data to a component.
 * Components are customized and made reusable w/ props.
 * Most components within the UI will be configured w/ props.
 * Props are how we get DATA into a component!
 * 
 * How to use Props in a component:
 *  2 Steps:
 *      1. Define props in a components JSX tag using
 *      atribute syntax at the place where it is being used.
 *  
 *      2. Enable use of props in the component.
 * 
 *  
 *  Syntax: 
 * <Component propName="propValue"/>
 *  
 */


// Header
/** 
 * When a component is defined using/ a function,
 * the function gets one default argument from React
 * called 'props', which is an OBJECT containing
 * a list of available properties (props) and values for component
 * on which they've been specified.
*/


function Header(props){
    console.log(props) // log props object
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">{props.totalPlayers}</span>
        </header>
    )
};


// Players
function PlayersList(props){
    console.log("playersList: ", props)
    return(
        <div id="playersList">
            <span className="player">{props.name}</span>
        {/*score counter component referencing 
        PlayersList component - COMPOSITION*/}

        {/* Event though playersList has props object containing
        an element for the score  we STILL NEED to allow the prop to be
        used.
        
        We still have to give the default parameter 'props' to ANY function
        (in this case Counter() function), such that the prop can be
        accessed and used properly! If this is NOT done, we could be
        missing certain pieces of info from the app! */}
        
        <Counter score={props.score}/>
    </div>

    )
}

// Counter
function Counter(props){
    console.log("counter props", props)
    return(
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment">+</button>
        </div>
    )
}


// return 'app' as top-level component containing child components
function App(){
    return(
        <div className="scoreboard">
            {/*
            JSX tag w/ arbitrary prop names and values added-
            To make these props usable we have to update the function
            (in this case the Header() function to use the props)
            */}
            <Header 
                title="scoreboard"
                totalPlayers={1}
             />

           
            <PlayersList name="Colin R" score={50} />
            <PlayersList name="Colin R" score={50} />
            <PlayersList name="Colin R" score={50} />

            {/* <Counter score={0} /> 

            Since Counter component is referencing playersList component
            as its 'parent' component we don't need to have it in the top level 
            element of the app call.

            Since playersList is the 'parent' component referenced by Counter
            component, we need to pass all props for use to the PARENT COMPONENT,
            which then will be responsible for distributing the prop values
            based on placement of JSX expressions.

            REMEMBER: All attributes can be added to the component JSX tags
            WHERE THEY ARE BEING USED*/}
        </div>
    )
}
   

ReactDOM.render(
    // DONT FORGET TO CALL YOUR  TOP-LEVEL COMPONENT AS SELF-CLOSING TAG IN REACT IF NO CHILDRE
    // CALL AS STANDARD NON SELF-CLOSING TAG IF CHILD ELEMENTS PRESENT!


    <App/>,
    document.getElementById("app")
)

