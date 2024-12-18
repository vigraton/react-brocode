import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Home</h1>
            <h3>Projetos:</h3>
            <Link to="/color-picker">Color Picker</Link>
        </div>
    )
}

export default Home;