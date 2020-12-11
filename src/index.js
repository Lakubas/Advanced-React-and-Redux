import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Root from 'root';

import App from "components/App/App";


ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>,
    document.getElementById('root'));
