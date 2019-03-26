import React from 'react';
import { Route, Switch } from 'react-router-dom';

//ROUTES
import Dashboard from '../components/Board/Dashboard';
import AddPost from '../components/Board/Post/Form'
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

//PRIVATE ROUTE
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute'

export default (
    <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <AdminRoute path="/addpost" exact component={AddPost} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
    </Switch>
)