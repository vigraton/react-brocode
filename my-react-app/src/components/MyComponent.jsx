/*
React hook = Special function that allows functional components
to use React features without writing class components (React v16.8)
(useState, useEffect, useContext, useReducer, useCallback, and more...)

useState() = A React hook that allows the creation of stateful variable
AND a setter function to update its value in the Virtual DOM.
[name, setName]
*/

import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);

    const toggledEmployedStatus = () => {
        setEmployed(!isEmployed);
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const updateName = () => {
        setName("Vivian");
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Inccrement Age</button>
            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggledEmployedStatus}>Toggle status</button>
        </div>
    )
}

export default MyComponent