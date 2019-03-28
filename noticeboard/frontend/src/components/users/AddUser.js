import React, {Component, Fragment} from 'react';
import AddUserForm from './partials/AddUserForm';
import {bindActionCreators} from "redux";
import {addUser} from "../../Redux/actions/users";
import {connect} from "react-redux";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: Object.assign({}, this.props.userDetails),
            errors: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                registration_no: '',
                role_id: '',
                department_id: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {addUserErrors, users, userDetails} = this.props;
        if (prevProps.addUserErrors !== addUserErrors) {
            if (addUserErrors.username ||
                addUserErrors.email ||
                addUserErrors.password ||
                addUserErrors.first_name ||
                addUserErrors.last_name ||
                addUserErrors.bio ||
                addUserErrors.registration_no ||
                addUserErrors.role_id ||
                addUserErrors.department_id) {
                this.setState({
                    errors: addUserErrors
                })
            }
        }
        if (prevProps.users !== users) {
            this.setState({
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
                }
            });
            this.props.history.push('/users');
        }
        if (prevProps.userDetails.id !== userDetails.id) {
            this.setState({
                user: Object.assign({}, userDetails)
            })
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

        if (!user.id) {
            if (user.password.length < 6) {
                errors.password = 'Password is too short. Password should be atleast 6 characters long';
                isValid = false;
            } else {
                errors.password = ''
            }
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
        let {departments, roles} = this.props;

        return (
            <Fragment>
                <AddUserForm
                    user={user}
                    departments={departments}
                    roles={roles}
                    errors={errors}
                    onChange={this.handleChange}
                    onSave={this.onSave}/>
            </Fragment>
        )
    }
};

const getUserByID = (users, id) => {
    let user = users.filter(user => parseInt(user.id) === parseInt(id));
    if (user.length > 0) {
        return user[0]
    }
    return null;
};
const mapStateToProps = ({auth: {registrationErrors}, departments: {departments}, roles: {roles}, users: {users, addUserErrors}}, ownProps) => {
    let userDetails = {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        bio: '',
        registration_no: '',
        role_id: '',
        department_id: ''
    };
    let userId = ownProps.match.params.id;
    if (userId && users.length > 0) {
        userDetails = getUserByID(users, userId);
    } else {
        userDetails.password = ''
    }

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
        users,
        addUserErrors,
        userDetails
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: bindActionCreators(addUser, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);