import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postsService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getByUserId: (userId) => axiosService(`${urls.posts}?userId=${userId}`).then(value => value.data)
}