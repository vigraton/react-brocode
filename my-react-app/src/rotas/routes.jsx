import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/home/Home"
import ColorPicker from "../pages/color-picker/ColorPicker";
import ToDoList from "../pages/to-do-list/ToDoList";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" exact/>
                <Route Component={ColorPicker} path="/color-picker"/>
                <Route Component={ToDoList} path="/to-do-list"/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;