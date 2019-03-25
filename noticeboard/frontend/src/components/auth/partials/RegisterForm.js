import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../common/form/Input';
import Textarea from '../../common/form/Textarea';
import {Link} from 'react-router-dom';


function RegisterForm({user: {username, first_name, last_name, email, password, cpassword, bio, registration_no}, onChange, onSave, errors}) {
    return (
        <Fragment>
            <form onSubmit={onSave}>
                <TextInput
                    name='username'
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={onChange}/>

                <TextInput
                    name='first_name'
                    label="First Name"
                    value={first_name}
                    error={errors.first_name}
                    onChange={onChange}/>

                <TextInput
                    name='last_name'
                    label="Last Name"
                    value={last_name}
                    error={errors.last_name}
                    onChange={onChange}/>

                <TextInput
                    type="email"
                    name='email'
                    label="Email"
                    value={email}
                    error={errors.email}
                    onChange={onChange}/>

                <TextInput
                    name='registration_no'
                    label="Registration Number"
                    value={registration_no}
                    error={errors.registration_no}
                    onChange={onChange}/>

                <Textarea
                    name='bio'
                    label='Bio(Optional)'
                    value={bio}
                    erro={errors.bio}
                    onChange={onChange}
                    rows='3'
                />

                <TextInput
                    type='password'
                    name='password'
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={onChange}/>

                <TextInput
                    type="password"
                    name='cpassword'
                    label="Confirm Password"
                    value={cpassword}
                    error={errors.cpassword}
                    onChange={onChange}/>

                <button type="submit" className="btn btn-success">Submit Request</button>
                <Link to="/login" className="btn btn-outline-secondary btn-sm" style={{marginLeft: 20}}>Go to
                    Login</Link>
            </form>
        </Fragment>
    )
}

RegisterForm.propTypes = {
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default RegisterForm

