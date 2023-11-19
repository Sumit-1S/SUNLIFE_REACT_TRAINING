import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDetails from "./UserDetails";
import Register from "./Register";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Portfolio from "./Portfolio";
import HeaderComp from './HeaderComp';

function BrowserRoutes(props) {
    return (
        <BrowserRouter>
            <div>
            <HeaderComp />
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <Route path="/register" component={Register} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/userDetails" component={UserDetails} />
                <Route component={PageNotFound} />
            </Switch>
            </div>
        </BrowserRouter>
    );
}

export default BrowserRoutes;