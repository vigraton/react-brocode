/*
updater function = A function passed as an argument to setState() usually.
Ex.: setYear(y => y + 1)

Allow for safe updates based on the previous state.
Used with multiple state updates and asynchoronous functions.
Good practice to use updater functions.
*/

import React, {useState} from 'react';

function FunctionUpDate(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    };

    function decrement(){
        setCount(count - 1);
    };

    function reset(){
        setCount(0);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default FunctionUpDate