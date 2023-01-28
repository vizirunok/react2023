import axios from "axios";

import {baseURL} from "../configs";
import {authServices} from "./auth.services";


const axiosInstance = axios.create({baseURL});

axiosInstance.interceptors.request.use((config) => {
    const access = authServices.getAccessToken();
    if (access) {
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
})

export {axiosInstance};