import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import AddDepartmentForm from './partials/DepartmentsForm';

class Add extends Component {
    constructor(props) {
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
        let field = event.target.name;
        let value = event.target.value;
        let department = Object.assign({}, this.state.department);
        department[field] = value;
        return this.setState({department});
    }

    departmentIsValid() {
        let {department: {title}, errors} = this.state;
        let isValid = true;
        if (title.length < 3) {
            errors.title = 'Department name is too short.'
        }
        this.setState({errors});

        return isValid;
    }

    onSave(e) {
        e.preventDefault();
        if (!this.departmentIsValid()) {
            return ;
        }
    }

    render() {
        const {department, errors} = this.state;
        return (
            <Fragment>
                <AddDepartmentForm
                    errors={errors}
                    onChange={this.handleChange}
                    department={department}
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
