import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import UserListPage from './pages/UserList';
import Workbench from './pages/Workbench'

import './styles/base.css';
ReactDOM.render(( 
    <Router history={hashHistory} >
        <Route path="/" component={HomePage}>
            <IndexRoute component={Workbench}/> 
            <Route path="/user/add" component={UserAddPage}/>
            <Route path="/user/list" component={UserListPage}/>
        </Route>
     </Router>
), document.getElementById('app'));