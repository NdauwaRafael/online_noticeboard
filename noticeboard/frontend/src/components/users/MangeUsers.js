import React, {Component, Fragment} from 'react';
import UsersTable from "./partials/UsersTable";
import {bindActionCreators} from "redux";
import {getUsers} from "../../Redux/actions/users";
import {connect} from "react-redux";

class MangeUsers extends Component {
    render() {
        const {users, auth} = this.props;
        return (
            <Fragment>
                <h1>All Users </h1>
                <UsersTable users={users} auth={auth}/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({users: {users}, auth}) => {
    return {
        users,
        auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: bindActionCreators(getUsers, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MangeUsers);