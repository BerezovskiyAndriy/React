import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    movies: []
}

export const getMovieAsync = createAsyncThunk(
    'movie/getMovieAsync',
    async () => {
        try {
            const movies = await movieService.getAll().then(value => value.results)
            return movies;
        } catch (e) {
            console.log(e);
        }
    }
)

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getMovies: (state,action) => {

        }
    }
})

export default movieSlice.reducer;
