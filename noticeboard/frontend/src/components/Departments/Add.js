import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import AddDepartmentForm from './partials/DepartmentsForm';
import {bindActionCreators} from "redux";
import {addDepartment} from '../../Redux/actions/departments'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department: Object.assign({}, this.props.departmentDetails),
            errors: {
                title: ''
            }
        };
        this.onSave = this.onSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate(prevProps) {
        const {addDepartmentErrors, departments, departmentDetails} = this.props;
        if (prevProps.addDepartmentErrors === addDepartmentErrors) {
            if (addDepartmentErrors.title || addDepartmentErrors.description) {
                this.setState({
                    errors: addDepartmentErrors
                })
            }
        }

        if (prevProps.departments !== departments) {
            this.setState({
                department: {}
            });
            this.props.history.push('/departments');
        }

        if (prevProps.departmentDetails.id !== departmentDetails.id) {
            this.setState({
                user: Object.assign({}, departmentDetails)
            })
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
        } else {
            errors.title = ''
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

const getDepartmentByID = (departments, id) => {
    let department = departments.filter(department => parseInt(department.id) === parseInt(id));
    if (department.length > 0) {
        return department[0]
    }
    return null;
};

function mapStateToProps(ownProps, {departments: {departments, addDepartmentErrors}}) {
    let departmentDetails = {title: ''};
    let deptId = ownProps.match.params.id;
    if (deptId && departments.length > 0) {
        departmentDetails = getDepartmentByID(departments, deptId);
    }
    return {
        departments,
        addDepartmentErrors,
        departmentDetails
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
