import React, { useState } from "react";



const App = () => {
const state = useState();

const [count, setCount] = useState(0);


//const IncNum = () =>{
  //setCount(count + 1);
  //console.log("clicked", count++);

  return (
    <>
    <h1>UseState Hook</h1>
    <h2>{count}</h2>
    <button onClick={() => { setCount(count + 1);}}
    
    >Click Me</button>
    </>
  );
};

export default App;

