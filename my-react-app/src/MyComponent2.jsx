/*
onChange = event handler used primalily with form
elements ex. <input>, <textarea>, <select>, <radio>
Triggers a function every time the value of the 
input changes.
*/

import React, {useState} from 'react'

function MyComponent2(){

    const [name, setName] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    return(
    <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
    </div>
    );
}

export default MyComponent2