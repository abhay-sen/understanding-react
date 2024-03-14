//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from 'react';
import ReactDOM from 'react-dom';
const inlineStyle={
    color : 'red',
}
const  date = new Date();
const time= date.getHours();
let greeting;
if(time>=0&& time<12) {
    greeting="Good Morning";
    inlineStyle.color='red';
}
else if(time>=12&&time<18) {
    greeting="Good Afternoon";
    inlineStyle.color='green';
}
else {
    greeting="Good Evening";
    inlineStyle.color='blue';
}
console.log(time);
ReactDOM.render(<div>
    <h1 style={inlineStyle}> {greeting}</h1>
</div>, document.getElementById('root'));
