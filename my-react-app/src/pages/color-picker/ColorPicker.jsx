import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function ColorPicker(){
    
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }
    
    return(
        <div className="color-picker-container">
            <Link to="/">Retornar a página inicial</Link><br></br>
            <h2>Color Picker</h2>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    );
}

export default ColorPicker;