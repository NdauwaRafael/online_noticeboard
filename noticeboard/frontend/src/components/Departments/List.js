import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import DepartmentsTable from './partials/DepartmentsTable';

class List extends Component {
    render() {
        const {departments, user} = this.props;
        return (
            <Fragment>
                <DepartmentsTable
                    user={user}
                    departments={departments}
                    deleteDepartment={}
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

export default connect(
    mapStateToProps,
)(List);
