import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const CarService = {
    getAll: () => axiosInstance.get(urls.cars),
    create: (car) => axiosInstance.post(urls.cars, car),
    addPhoto: (id, photo) => axiosInstance.patch(`${urls.cars}/${id}`, photo),
};

export {CarService};