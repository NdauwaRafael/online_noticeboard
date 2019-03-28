import React, {Component, Fragment} from 'react';
import AddUserForm from './partials/AddUserForm';
import {bindActionCreators} from "redux";
import {registerUser} from "../../Redux/actions/auth";
import {connect} from "react-redux";

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                bio: '',
                registration_no: '',
                role_id: '',
                department_id: ''
            },
            errors: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                bio: '',
                registration_no: '',
                role_id: '',
                department_id: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {registrationErrors} = this.props;
        if (prevProps.registrationErrors !== registrationErrors) {
            if (registrationErrors.username || registrationErrors.email || registrationErrors.password || registrationErrors.first_name || registrationErrors.last_name) {
                this.setState({
                    errors: registrationErrors
                })
            }
        }
    };

    emailIsValid(email) {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        return emailRegex.test(String(email).toLowerCase());
    };

    userIsValid() {
        let {user, errors} = this.state;
        let isValid = true;

        if (user.username.length < 3) {
            errors.username = 'Username is too short.';
            isValid = false;
        } else {
            errors.username = ''
        }
        if (user.password.length < 6) {
            errors.password = 'Password is too short. Password should be atleast 6 characters long';
            isValid = false;
        } else {
            errors.password = ''
        }

        if (user.cpassword !== user.password) {
            errors.cpassword = 'Passwords do not match.';
            isValid = false;
        } else {
            errors.cpassword = ''
        }
        if (!this.emailIsValid(user.email)) {
            errors.email = 'Enter a valid Email';
            isValid = false;
        } else {
            errors.email = ''
        }

        if (user.first_name < 3) {
            errors.first_name = 'First Name is too short.';
        } else {
            errors.first_name = '';
        }

        if (user.last_name < 3) {
            errors.last_name = 'Last Name is too short.';
        } else {
            errors.last_name = '';
        }

        this.setState({errors});

        return isValid;
    };

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let user = Object.assign({}, this.state.user);
        user[field] = value;
        return this.setState({user});
    };

    onSave(e) {
        e.preventDefault();
        if (!this.userIsValid()) {
            return;
        }
        this.props.registerUser(this.state.user);
    }

    render() {
        let {user, errors} = this.state;
        let {departments} = this.props;

        return (
            <Fragment>
                <AddUserForm
                    user={user}
                    departments={departments}
                    errors={errors}
                    onChange={this.handleChange}
                    onSave={this.onSave}/>
            </Fragment>
        )
    }
};

const mapStateToProps = ({auth: {registrationErrors}, departments: {departments}, roles: {roles}}) => {
    const departmentFormattedForDropdown = departments.map(department => {
        return {
            value: department.id,
            text: department.title
        };
    });

    const rolesFormattedForDropdown = roles.map(role => {
        return {
            value: role.id,
            text: role.role
        };
    });

    return {
        departments: departmentFormattedForDropdown,
        roles: rolesFormattedForDropdown,
        registrationErrors
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: bindActionCreators(registerUser, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);