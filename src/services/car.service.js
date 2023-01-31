import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const CarService = {
    getAll: (page=1) => axiosInstance.get(urls.cars, {params:{page}}),
    create: (car) => axiosInstance.post(urls.cars, car),
    addPhoto: (id, photo) => axiosInstance.patch(`${urls.cars}/${id}`, photo),
};

export {CarService};