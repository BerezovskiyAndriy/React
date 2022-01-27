import {axiosService} from "./axios.service";
import {urls} from "../config/url";

export const episodesService = {
    getByPage:(page) => axiosService(`${urls.episodes}?page=${page}`).then(value => value.data)
}
