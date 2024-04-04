import React,{useState} from "react";

function App() {
  const [name,setName]= useState("");
  const [heading,setHeading]= useState("");
  function handleChange(event){
    setName(event.target.value);
  }
  function changeName(){
    
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input type="text" placeholder="What's your name?" onChange={handleChange}/>
      <button onClick={changeName}>Submit</button>
    </div>
  );
}

export default App;
