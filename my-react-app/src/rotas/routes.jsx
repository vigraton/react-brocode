import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/home/Home"
import ColorPicker from "../pages/color-picker/ColorPicker";
import ToDoList from "../pages/to-do-list/ToDoList";
import DigitalClock from "../pages/digital-clock/DigitalClock";
import StopWatch from "../pages/stopwatch/StopWatch";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" exact/>
                <Route Component={ColorPicker} path="/color-picker"/>
                <Route Component={ToDoList} path="/to-do-list"/>
                <Route Component={DigitalClock} path="/digital-clock"/>
                <Route Component={StopWatch} path="/stopwatch" />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;