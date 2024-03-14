import React from "react";
import ReactDOM from "react-dom";
const customStyle={
    color : "red",
    fontSize : "60px",
}
ReactDOM.render(<h1 style={customStyle}>Hello World!</h1>, document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
// the double curly braces is one object as a js inside a html