import React, { createContext } from 'react';
import App5b from './App5b';


const BioData = createContext();


const App5a = () => {
    return (
        <BioData.Provider value= {"Qasim"}>
            <App5b />
        </BioData.Provider>
        )
}

export default App5a;
export { BioData};