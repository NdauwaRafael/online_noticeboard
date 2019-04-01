import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import AddDepartmentForm from './partials/DepartmentsForm';
import {bindActionCreators} from "redux";
import {addDepartment} from '../../Redux/actions/departments'

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
        };
        this.onSave = this.onSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {addDepartmentErrors, departments} = this.props;
        if (nextProps.addDepartmentErrors === addDepartmentErrors) {
            if (addDepartmentErrors.title || addDepartmentErrors.description) {
                this.setState({
                    errors: addDepartmentErrors
                })
            }
        }

        if(nextProps.departments !== departments){
            this.setState({
                department: {}
            });
            this.props.history.push('/departments');
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
            errors.title = 'Department name is too short.';
            isValid = false;
        }else {
            errors.title=''
        }
        this.setState({errors});

        return isValid;
    }

    onSave(e) {
        e.preventDefault();
        if (!this.departmentIsValid()) {
            return;
        }
        this.props.addDepartment(this.state.department)
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

function mapStateToProps({departments: {departments, addDepartmentErrors}}) {
    return {
        departments,
        addDepartmentErrors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDepartment: bindActionCreators(addDepartment, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);
