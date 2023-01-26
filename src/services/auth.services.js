import {axiosInstance} from "./axios.service";
import {urls} from "../configs";


const _accessTokenKey = 'access';
const _refreshTokenKey = 'refresh';

const AuthServices = {
    register: (user) => axiosInstance.post(urls.users, user),
    auth: (user) => axiosInstance.post(urls.auth, user),
    refresh: (token) => axiosInstance.post(urls.refresh, {token}),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_refreshTokenKey, refresh);
    },
    deleteTokens: () => {
        localStorage.removeItem(_accessTokenKey);
        localStorage.removeItem(_refreshTokenKey);
    },
    getAccessToken: () => localStorage.getItem(_accessTokenKey),
    getRefreshToken: () => localStorage.getItem(_refreshTokenKey),
};

export {AuthServices};