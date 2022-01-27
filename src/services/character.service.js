import {axiosService} from "./axios.service";
import {urls} from "../config/url";

export const characterService = {
    character:(ids) => axiosService(`${urls.character}/${ids}`).then(value => value.data)
}