import React from 'react';
import { Route, Switch } from 'react-router-dom';

//ROUTES
import Dashboard from '../components/Board/Dashboard';
import AddPost from '../components/Board/Post/Form'
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

//POSTS
import PublicPosts from '../components/Board/Post/Posts';
import DepartmentalPosts from '../components/Board/Post/DepartmentalPosts';

//USERS
import AddUser from '../components/users/AddUser';
import ManageUsers from '../components/users/MangeUsers';

//DEPARTMENTS
import AddDepartment from '../components/Departments/Add';
import ListDepartments from '../components/Departments/List'


//PRIVATE ROUTE
import PrivateRoute from './PrivateRoute';
import EditorRoute from './EditorRoute';
import AdminRoute from './AdminRoute'

export default (
    <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/posts/public" exact component={PublicPosts} />
        <PrivateRoute path="/posts/departmental" exact component={DepartmentalPosts} />
        <EditorRoute path="/addpost" exact component={AddPost} />
        <EditorRoute path="/posts/edit/:id" exact component={AddPost} />
        <AdminRoute path='/user/add'  exact component={AddUser}/>
        <AdminRoute path='/user/:id'  exact component={AddUser}/>
        <AdminRoute path='/departments/add'  exact component={AddDepartment}/>
        <AdminRoute path='/departments/:id'  exact component={AddDepartment}/>
        <AdminRoute path='/departments'  exact component={ListDepartments}/>
        <PrivateRoute path='/users'  exact component={ManageUsers}/>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
    </Switch>
)