import React from 'react';
import TextInput from '../../common/form/Input';
import PropTypes from "prop-types";
import SelectInput from "../../common/form/Select";

const AddUserForm = ({user: {username, first_name, last_name, email, password, registration_no, department_id}, onChange, onSave, errors, departments}) => {
    return (
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

            <SelectInput
                name='department'
                label="Post Department"
                value={department_id}
                error={errors.department_id}
                options={departments}
                defaultOption="Select a Department"
                onChange={this.handleChange}/>

            <TextInput
                type='password'
                name='password'
                label="Password"
                value={password}
                error={errors.password}
                onChange={onChange}/>

            <button type="submit" className="btn btn-success">Submit User Data</button>
        </form>
    )
};

AddUserForm.propTypes = {
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default AddUserForm