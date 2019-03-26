import React, { Component, Fragment } from 'react';
import Posts from './Post/Posts';
class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <h1>Bord Dashboard</h1>
                <Posts />
            </Fragment>
        )
    }
}

export default Dashboard;