import axios from 'axios';
import { loginUser } from '../../actions/auth/index';

export const loadUserApi = (config) => {
    return axios.get('api/auth/user', config);
}

export const loginUserApi = (user, config) => {
    return axios.post('api/auth/login', user, config)
}

export const logoutUserApi = (config) => {
    return axios.post('api/auth/logout', null, config);
}

export const registerUserApi = (user, config) => {
    return axios.post('api/auth/register', user, config)
}