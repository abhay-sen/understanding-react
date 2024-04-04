import React,{useState} from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  console.log(time);
  const [currentTime, setCurrentTime] = useState(time)
  console.log(currentTime);
  function getTime(){
    let Time = new Date().toLocaleTimeString();
    setCurrentTime(Time);
  }
  setInterval(getTime,1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
