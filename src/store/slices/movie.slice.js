import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";
import {GenreListMovies} from "../../common/GenreListMovies";

const initialState = {
    movies: [],
    genreList: GenreListMovies,
}

export const getMovieAsync = createAsyncThunk(
    'movie/getMovieAsync',
    async (page) => {
        try {
            return await movieService.getByPage(page);
        } catch (e) {
            console.log(e);
        }
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    extraReducers: {
        [getMovieAsync.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
        }
    }
})

export default movieSlice.reducer;
