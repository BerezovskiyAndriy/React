import {axiosServiceJSON} from "./axios.service";
import {urls} from "../config/urls";

export const postsService = {
    getAll: () => axiosServiceJSON.get(urls.posts).then(value => value.data)
}