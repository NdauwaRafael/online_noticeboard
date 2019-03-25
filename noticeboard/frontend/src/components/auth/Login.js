import React, {Component, Fragment} from 'react'
import LoginForm from './partials/LoginForm';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {loginUser} from '../../Redux/actions/auth/index';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {
                username: '',
                password: '',
            },
            loginError: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {authError} = this.props;
        if (prevProps.authError !== authError) {
            if (authError.username || authError.password) {
                this.setState({
                    errors: authError
                })
            }
            ;
            if (authError.non_field_errors) {
                this.setState({
                    loginError: authError.non_field_errors
                })
            }
        }
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        return this.setState({[field]: value});
    };

    onSave(e) {
        e.preventDefault();
        const {username, password} = this.state;
        this.props.loginUser(username, password)
    }

    render() {
        const {username, password, errors, loginError} = this.state;
        if (this.props.auth.isAuthenticated) {
            return <Redirect to="/"/>
        }
        return (
            <Fragment>
                <LoginForm
                    username={username}
                    password={password}
                    errors={errors}
                    loginError={loginError}
                    onChange={this.handleChange}
                    onSave={this.onSave}/>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: bindActionCreators(loginUser, dispatch)
    }
}
const mapStateToProps = ({auth: {authError}, auth}) => {
    return {
        auth,
        authError
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
