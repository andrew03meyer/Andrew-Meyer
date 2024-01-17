import React from "react";
import {Route, IndexRoute} from 'react-router';

import AboutMe from './AboutMe/AboutMe';
import Header from './Header/Header';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Header}/>
        <Route path="/AboutMe" component={AboutMe} />
    </Route>
)