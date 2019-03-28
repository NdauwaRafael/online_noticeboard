import React, {Component, Fragment} from 'react';
import UsersTable from "./partials/UsersTable";
import {bindActionCreators} from "redux";
import {getUsers, deleteUser} from "../../Redux/actions/users";
import {connect} from "react-redux";

class MangeUsers extends Component {
    constructor(props){
        super(props);
        this.deleteThisUser = this.deleteThisUser.bind(this);
    }
    componentDidMount() {
        this.props.getUsers();
    }

    deleteThisUser(userId) {
        this.props.deleteUser(userId)
    };

    render() {
        const {users, auth} = this.props;
        return (
            <Fragment>
                <h1>All Users </h1>
                <UsersTable users={users} auth={auth} authUser={auth.user} deleteUser={this.deleteThisUser}/>
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
        getUsers: bindActionCreators(getUsers, dispatch),
        deleteUser: bindActionCreators(deleteUser, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MangeUsers);