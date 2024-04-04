import React from "react";
import Login from "./Login";
var ifLoggedIn = false;
var currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      {/* {ifLoggedIn===true?<h1>Hello user</h1>:<Login/>} */}
      {currentTime>12?<h1>Dont</h1>:<h1>Work</h1>}
    </div>
  );
}

export default App;
