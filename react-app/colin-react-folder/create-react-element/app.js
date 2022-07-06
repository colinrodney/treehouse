console.log("connected");

/**
 * Create react element
 */

const title = React.createElement(
    "p", {id: "lead-paragraph"}, "lorem ipsum"
    // contents...
)

console.log(title)

const picture = React.createElement(
    "img",
)
console.log(picture);
/**
 * Render react element
 * 
 NOTE: ReactDOM NO LONGER SUPPORTED IN React 18
 > Until upgraded this app WILL behave as it running React v 17
 */

// const root = createRoot(title);
// root.render(document.getElementById("lead-paragraph"));

ReactDOM.render(title, document.getElementById("lead-paragraph"));

ReactDOM.render(picture, document.querySelector("img"));

