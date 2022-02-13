import {axiosService, token_v3} from './axios.service';

import {urls} from '../config/urls';

export const movieService = {
    getByIdGenre: (pageId,genreId) => axiosService.get(`${urls.discover}?${token_v3}&page=${pageId}&with_genres=${genreId}`).then(value => value.data),
    getListGenre: () => axiosService.get(`${urls.genre}?${token_v3}`).then(value => value.data),
    getVideosById: (id) => axiosService.get(`${urls.movie}/${id}/videos`).then(value => value.data)
}


