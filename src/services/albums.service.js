import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const albumsService = {
    getByUserId: (userId) => axiosService(`${urls.albums}?userId=${userId}`).then(value => value.data)
}