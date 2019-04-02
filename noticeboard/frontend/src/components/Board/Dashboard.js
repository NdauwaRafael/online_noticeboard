import React, { Component, Fragment } from 'react';
import Posts from '../Post/Posts';
class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Noticeboard Dashboard</li>
                </ol>
                <Posts />
            </Fragment>
        )
    }
}

export default Dashboard;