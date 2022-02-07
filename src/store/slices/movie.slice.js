import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    movies: []
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

export const {getMovies} = movieSlice.actions;
export default movieSlice.reducer;
