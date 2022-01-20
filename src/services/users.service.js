import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const usersService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById:(id) => axiosService(`${urls.users}/${id}`).then(value => value.data)
}