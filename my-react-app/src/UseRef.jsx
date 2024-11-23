/*
useState() = Re-renders the component when the state value changes.

useRef() = "use Reference" Does not cause re-renders when its value changes.
            When you want a component to "remember" some information, but you
            don't wnat that information to trigger new renders.

            1. Accessing/Interacting with DOM elements
            2. Handling Focus, Animation, and Transitions
            3. Managing TImers and Intervals
*/

import React, {useState, useEffect, useRef} from 'react';

function UseRef(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "purple";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "pink";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "orange";
    }

    return(
        <div>
            <button onClick={handleClick1}>
                Click me 1!
            </button>
            <input ref={inputRef1}></input><br></br>

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2}></input><br></br>

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3}></input><br></br>
        </div>);
}

export default UseRef