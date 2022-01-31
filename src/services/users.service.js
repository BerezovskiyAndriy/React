import {axiosServiceJSON} from "./axios.service";
import {urls} from "../config/urls";

export const usersService = {
    getAll: () => axiosServiceJSON.get(urls.users).then(value => value.data)
}