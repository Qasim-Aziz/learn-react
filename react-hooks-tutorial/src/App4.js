import React , {useState,useRef}  from'react';

const Uncontrolled = () => {
    //const initialValue = 1;
    const luckyName = useRef(null)
    const [show, setShow] = useState(false);
    const submitForm = (e) => {
        e.preventDefault();
    const name = luckyName.current.value;
        name === "" ? alert("plz fill the form") : setShow(true);
    }

    return (
        <>
        <div>
            <h1>Un Controlled useRef Hook </h1>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htlmfor="luckyName">Enter your LuckyName</label>
                    <br />
                    <input type="text" id="luckyName" ref={ luckyName}></input>
                    
                </div>
                <br />
                <button>Submit</button>

            </form>
            <p>{show ? `your lucky Name is ${luckyName.current.value}` : ""}</p>
        </div>
        </>
    )
}

export default Uncontrolled;