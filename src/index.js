import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
            <Route path="/movies/:id" component={<SingleMovie/>} >
                
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);

