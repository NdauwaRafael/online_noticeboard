import axios from "axios";

export const addUserssApi = async (user, config) => {
    return axios.post('api/users/', user, config);
};

export const getUsersApi = async (config) => {
    return axios.get('api/users/', config);
};