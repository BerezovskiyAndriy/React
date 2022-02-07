import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const movieService = {
    getAll: () => axiosService.get(urls.discover).then(value => value.data)
}