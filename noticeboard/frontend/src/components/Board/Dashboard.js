import React, { Component, Fragment } from 'react';
import Posts from './Post/Posts';
import AddPost from './Post/Form';
class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <h1>Bord Dashboard</h1>
                <AddPost />
                <Posts />
            </Fragment>
        )
    }
}

export default Dashboard;