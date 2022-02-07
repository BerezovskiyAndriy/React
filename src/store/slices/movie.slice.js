import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    movies: []
}

export const getMovieAsync = createAsyncThunk(
    'movie/getMovieAsync',
    async ({pageId},dispatch) => {
        try {
            const movies = await movieService.getAll(2).then(value => console.log(value))
            console.log(movies);
            dispatch(getMovies(movies))
        } catch (e) {
            console.log(e);
        }
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getMovies: (state,action) => {
            state.movies = action.payload.results;
        }
    // extraReducers: {
    //     getMovies: (state,action) => {
    //         state.movies = action.payload;
    //     }
    }
})

export const {getMovies} = movieSlice.actions;
export default movieSlice.reducer;
