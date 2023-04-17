import axios from 'axios';

const baseURL = `https://e-commerce-server-ejfu741tw-sachin-prasad-29.vercel.app/api`;

let headers = {};

const axiosInstance = axios.create({
    baseURL:'http//localhost:4000/api',
    timeout:10000,
    headers
})

axiosInstance.interceptors.response.use(
    res
)