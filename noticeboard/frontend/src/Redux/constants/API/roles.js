import axios from "axios";

export const addRolesApi = async (role, config) => {
    return axios.post('api/roles/', role, config);
};

export const getRolessApi = async (config) => {
    return axios.get('api/roles/', config);
};