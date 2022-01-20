import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const photosService = {
    // getByIdAlbums: (id) => axiosService(`${urls.albums}/${id}/photos`).then(value => value.data)
    getByIdAlbums: (id) => axiosService(`${urls.photos}?albumId=${id}`).then(value => value.data)
}