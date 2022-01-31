import {axiosServiceJSON} from "./axios.service";
import {urls} from "../config/urls";

export const commentsService = {
    getAll: () => axiosServiceJSON.get(urls.comments).then(value => value.data)
}