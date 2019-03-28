import axios from "axios";

export const addUserApi = async (user, config) => {
    return axios.post('api/users/', user, config);
};

export const updateUserApi = async (user, config) => {
    return axios.put(`api/users/${user.id}/`, user, config);
};

export const deleteUserApi = async (id, config) => {
    return axios.delete(`api/users/${id}/`, user, config);
};

export const getUsersApi = async (config) => {
    return axios.get('api/users', config);
};