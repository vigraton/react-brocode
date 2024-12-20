import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

function StopWatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRunning]);

    function start(){

    }

    function stop(){

    }

    function reset(){

    }

    function formatTime(){
        return `00:00:00`;
    }

    return(
        <div>
            <Link to="/">Retonar a página inicial</Link>
            <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="constrols">
                <button onClick={start()} className="start-button">Start</button>
                <button onClick={stop()} className="stop-button">Stop</button>
                <button onClick={reset()} className="reset-button">Reset</button>
            </div>
        </div>
        </div>
    );
}

export default StopWatch;