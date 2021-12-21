import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserInfo from '../pages/UserInfo';

import Home from '../pages/Home';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/users' exact>
                    <UserInfo/>
                </Route>
                <Route path='/'>
                        <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;
