import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import App from '../App';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { App } path="./routes/ColorPicker.jsx" exact />
        </BrowserRouter>
    )
}

export default Routes