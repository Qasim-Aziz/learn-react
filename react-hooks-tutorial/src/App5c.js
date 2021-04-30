import React, { useContext } from 'react';
import { BioData } from "./App5a";


const App5c = () => {
    const name = useContext(BioData);
    return (
        <>
        <div>
        <h1>Hi App5c {name} </h1>
        </div>
        </>
    )
}

export default App5c;

