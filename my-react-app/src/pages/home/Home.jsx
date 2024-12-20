import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Home</h1>
            <h3>Projetos:</h3>
            <nav>
                <ul>
                    <li id="link-1">
                        <Link to="/color-picker">Color Picker</Link>
                    </li>
                    <li id="link-2">
                        <Link to="/to-do-list">To-do List</Link>
                    </li>
                    <li id="link-3">
                        <Link to="/digital-clock">Digital Clock</Link>
                    </li>
                    <li id="link-4">
                        <Link to="/stopwatch">StopWatch</Link>
                    </li>
                </ul>
            </nav>            
        </div>
    )
}

export default Home;