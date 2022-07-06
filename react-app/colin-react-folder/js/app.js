// chk file connected to HTML
// console.log("connected");


// React starter code
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false }; // 'this' reference owning object 'LikeButton'
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// GRAB DOM OBJECT
const domContainer = document.getElementById("like-button-container");

// CREATE A REACT ELEMENT??
const root = ReactDOM.createRoot(domContainer); 

// RENDER REACT ELEMENT
root.render(e(LikeButton));

