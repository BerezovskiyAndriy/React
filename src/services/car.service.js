import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    delete: (id) => axiosService.delete(`${urls.cars}/${id}`),
    update: (id,carItem) => axiosService.patch(`${urls.cars}/${id}`,carItem).then(value => value.data)
}