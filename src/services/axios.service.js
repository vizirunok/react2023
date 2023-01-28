import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authServices} from "./auth.services";

const history = createBrowserHistory();

const axiosInstance = axios.create({baseURL});

let isRefreshing = false;

axiosInstance.interceptors.request.use((config) => {
    const access = authServices.getAccessToken();
    if (access) {
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
})



axiosInstance.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authServices.getRefreshToken();

        if (error.response?.status === 401 && refresh && !isRefreshing) {
            isRefreshing = true;

            try {
                const {data} = await authServices.refresh(refresh);
                authServices.setTokens(data);
            }catch (e) {
                authServices.deleteTokens();
                history.replace('/login?expSession=true');
            }
            isRefreshing = false;
            return axiosInstance(error.config);
        }
        return Promise.reject(error);
    })

export {axiosInstance, history};