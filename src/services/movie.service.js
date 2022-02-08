import {axiosService, token_v3} from "./axios.service";

import {urls} from "../config/urls";

export const movieService = {
    getByPage: (pageId) => axiosService.get(`${urls.discover}?${token_v3}&page=${pageId}`).then(value => value.data),
    getByIdGenre: (pageId,genreId) => axiosService.get(`${urls.discover}?${token_v3}&page=${pageId}&with_genres=${genreId}`).then(value => value.data)
}


