import React, { useState } from "react";

function App() {
  const [color,setColor]= useState("white");
  function out(){
    setColor("white");
  }
  function over(){
    setColor("black");
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: color}} onMouseOut={out} onMouseOver={over}>Submit</button>
    </div>
  );
}

export default App;
