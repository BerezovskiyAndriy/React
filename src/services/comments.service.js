import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const commentsService = {
    getByIdPhotos: (id) => axiosService(`${urls.comments}?postId=${id}`).then(value => value.data)
}