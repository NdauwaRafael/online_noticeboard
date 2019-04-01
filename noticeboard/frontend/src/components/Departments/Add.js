import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import AddDepartmentForm from './partials/DepartmentsForm';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            department: {
                title: ''
            },
            errors: {
                title: ''
            }
        }
    }

    handleChange(event) {

    }

    onSave(){

    }
    render() {
        const { department, errors } = this.state;
        return (
            <Fragment>
                <AddDepartmentForm
                    errors={errors}
                    onChange={this.handleChange}
                    department = {department}
                    onSave={this.onSave}/>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Add);
