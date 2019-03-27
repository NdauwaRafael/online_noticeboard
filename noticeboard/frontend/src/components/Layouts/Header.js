import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../Redux/actions/auth';
import HeaderGuest from './partials/HeaderGuest';
import HeaderAuthenticated from './partials/HeaderAuthenticated'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Header extends Component {
    render() {
        const { isAuthenticated, auth: {user}, auth } = this.props;
        return (
            <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div className="container">
                    <Link to='/' className="navbar-brand">NoticeBoard</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    {
                        isAuthenticated ? <HeaderAuthenticated user={user}
                                                               auth={auth}
                                                               Fragment={Fragment}
                                                               logoutUser={()=>this.props.logoutUser()} /> : <HeaderGuest />
                    }

                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    logoutUser: bindActionCreators(logoutUser, dispatch)
})
const mapStateToProps = ({ auth: { isAuthenticated }, auth }) => {
    return {
        isAuthenticated,
        auth
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);