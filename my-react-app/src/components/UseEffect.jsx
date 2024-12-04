/*
useEffect() = React Hook that tells React 'Do some code when (pick one)':
    - This component re-renders
    - This component mounts
    - The state of a value

useEffect(function, [dependencies])

    1. useEffect(() => {}) : Runs after every re-render
    2. useEffect(() => {}, []) : Runs only on mount
    3. useEffect(() => {}, [value]) : Runs on mount + when value changes

    ~ USES ~
    #1 Event Listeners
    #2 DOM manipulation
    #3 Subscriptions (real-time updates)
    #4 Fetching Data from an API
    #5 Clean up a when a component unmounts
*/

import React, {useState, useEffect} from 'react';

function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count]); 

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change color</button><br></br>
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
    </>)
}

export default UseEffect;