import axios from "axios";

export const addDepartmentApi = async (department, config) => {
    return axios.post('api/departments/', department, config);
};

export const getDepartmentsApi = async (config) => {
    return axios.get('api/departments/', config);
};

export const deleteDepartmentsApi = async (id, config) => {
    return axios.delete('api/departments/'+id, config);
};