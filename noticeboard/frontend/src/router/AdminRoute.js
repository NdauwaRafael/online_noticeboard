import React from 'react'
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import { PushSpinner } from "react-spinners-kit";

const AdminRoute = ({component: Component, auth, ...rest}) => (
    <Route {...rest}
           render={props => {
               if (auth.isLoading) {
                   return <PushSpinner key={"loader"} size={30} color="#686769" loading={true} />
               } else if (!auth.isAuthenticated) {
                   return <Redirect to="/login"/>
               } else if (auth.user.role === 'Administrator' || parseInt(auth.user.id) === 1) {
                   return <Component {...props} />
               } else {
                   return <Redirect to="/" />
               }

           }}/>
);

const mapStateToProps = ({auth}) => ({
    auth
});
export default connect(mapStateToProps)(AdminRoute);
