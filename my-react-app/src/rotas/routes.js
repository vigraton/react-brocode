import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "../App";
import ColorPicker from "./ColorPicker";

function Routes (){
    return(
        <BrowserRouter>
            <Route Component={App} path="/" exact/>
            <Route Component={ColorPicker} path="./color-picker"/>
        </BrowserRouter>
    );
}

export default Routes;