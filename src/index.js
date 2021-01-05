import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie'

ReactDOM.render(
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/movies/:id" >  
            <SingleMovie/>
        </Route> 
    </Router>,
    document.getElementById('root')
);

