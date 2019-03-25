import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../common/form/Input';
import { Link } from 'react-router-dom';
const hasLoginErrors = (errors)=> (
            <div className="alert alert-dismissible alert-danger">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>Login failed! </strong> {errors.join()}
            </div>
);

const LoginForm = ({ username, password, onChange, onSave, errors, loginError }) => {
    return (
        <Fragment>
            {
                loginError.length > 0 ? hasLoginErrors(loginError) : ''
            }
            <form onSubmit={onSave}>
                <TextInput
                    name='username'
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={onChange} />

                <TextInput
                    type="password"
                    name='password'
                    label="password"
                    value={password}
                    error={errors.password}
                    onChange={onChange} />

                <button type="submit" className="btn btn-success">Login</button>
                <Link to="/register" className="btn btn-outline-secondary btn-sm" style={{ marginLeft: 20 }}>Request Access</Link>
            </form>
        </Fragment>
    )
}

LoginForm.propTypes = {

}

export default LoginForm
