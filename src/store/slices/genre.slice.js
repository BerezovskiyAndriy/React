import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    genreMovies: []
}

export const getGenreAsync = createAsyncThunk(
    'genre/getGenreAsync',
    async ({pageId,genreId}) => {
        try {
            return await movieService.getByIdGenre(pageId, genreId)
        } catch (e) {
            console.log(e);
        }
    }
)

const genreSlice = createSlice({
    name: 'genre',
    initialState,
    extraReducers: {
        [getGenreAsync.fulfilled]: (state, action) => {
            state.genreMovies = action.payload.results;
        }
    }
})

export default genreSlice.reducer;