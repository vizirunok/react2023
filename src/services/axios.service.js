import axios from "axios";

import {baseURL} from "../configs";
import {authServices} from "./auth.services";


const axiosInstance = axios.create({baseURL});

let isRefreshing = false;

axiosInstance.interceptors.request.use((config) => {
    const access = authServices.getAccessToken();
    if (access) {
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
})

export {axiosInstance};

axiosInstance.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authServices.getRefreshToken();

        if (error.response?.status === 401 && refresh && !isRefreshing) {
            isRefreshing = true;

            try {
                await authServices.refresh(refresh)
            }catch (e) {

            }



        }
    })