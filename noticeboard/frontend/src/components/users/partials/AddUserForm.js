import React from 'react';
import {Link} from "react-router-dom";
import TextInput from '../../common/form/Input';
import Textarea from '../../common/form/Textarea';

export default ({user: {username, first_name, last_name, email, password, cpassword, bio, registration_no}, onChange, onSave, errors}) =>
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

        <button type="submit" className="btn btn-success">Submit Request</button>
    </form>
