import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import DepartmentsTable from './partials/DepartmentsTable';
import {bindActionCreators} from "redux";
import {deleteDepartment} from '../../Redux/actions/departments';
import {getUsers} from "../../Redux/actions/users";

class List extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const {departments, user, deleteDepartment} = this.props;
        return (
            <Fragment>
                <DepartmentsTable
                    user={user}
                    departments={departments}
                    deleteDepartment={deleteDepartment}
                />
            </Fragment>
        );
    }
}

function mapStateToProps({auth: {user}, departments: {departments}}) {
    return {
        user,
        departments
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteDepartment: bindActionCreators(deleteDepartment, dispatch),
        getUsers: bindActionCreators(getUsers, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
