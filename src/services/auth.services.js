import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const AuthServices = {
    register: (user) => axiosInstance.post(urls.users, user),
    auth: (user) => axiosInstance.post(urls.auth, user)
};

export {AuthServices};