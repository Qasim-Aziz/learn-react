import React, { useEffect, useState } from "react";



const App2 = () => {
const state = useState();

const [count, setCount] = useState(0);
useEffect(() =>{
    alert('yes clicked number ')
}, []);

//const IncNum = () =>{
  //setCount(count + 1);
  //console.log("clicked", count++);

  return (
    <>
    <h1>UseEffect Hook</h1>
    <h2>{count}</h2>
    <button onClick={() => { setCount(count + 1);}}
    
    
    
    >Click Me</button>
    </>
  );
};

export default App2;

