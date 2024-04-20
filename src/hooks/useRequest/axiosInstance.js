import axios from 'axios';
import {storage} from "../../utils/storage.js";

const axiosConfig = {
    baseURL: '/api',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    responseType: 'json',
};

const AxiosInstance = axios.create(axiosConfig);

AxiosInstance.interceptors.request.use(
    (config) => {
        config.headers.set('Authorization', 'Bearer ' + storage.get('userInfo')?.token || '');
        return config;
    },
    (error) => {
        if (error.response && error.response.status === 501) {
            return error.response.data;
        }
        throw error;
    }
)

AxiosInstance.interceptors.response.use(
    (res) => {
        if (res.status !== 200 || !res.data) {
            throw 'error';
        }
        return res.data;
    },
    (error) => {
        if (error.response && error.response.status === 501) {
            return error.response.data;
        }
        throw error;
    }
);

export default AxiosInstance;