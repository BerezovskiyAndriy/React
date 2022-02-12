import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    movies: [],
    genreList: [],
    videos: []
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

export const getGenreListAsync = createAsyncThunk(
    'movie/getGenreList',
    async () => {
        try {
            return await movieService.getListGenre()
        } catch (e) {
            console.log(e);
        }
    }
)

export const getMovieByGenres = createAsyncThunk(
    'movie/getGenreAsync',
    async ({pageId, genreId}) => {
        try {
            return await movieService.getByIdGenre(+pageId,+genreId)
        } catch (e) {
            console.log(e);
        }
    }
)

export const getVideos = createAsyncThunk(
    'movie/getVideos',
    async ({id}) => {
        try {
            return await movieService.getVideosById(id)
        } catch (e) {
            console.log(e);
        }
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
      toggleGenreStatus: (state,action) => {
        state.genreList = state.genreList.map(genre => {
            if (genre.id === action.payload) {
                genre.isActive = true  // !genre.isActive
            } else {
                genre.isActive = false
            }
            return genre
        })
      }
    },
    extraReducers: {
        [getMovieAsync.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
        },
        [getMovieByGenres.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
        },
        [getGenreListAsync.fulfilled]: (state, action) => {
            state.genreList = action.payload.genres.map(genre => {
                return {...genre, isActive: false}
            });
        },
        [getVideos.fulfilled]: (state,action) => {
            state.videos = action.payload;
        }
    }
})

export const {toggleGenreStatus} = movieSlice.actions;

export default movieSlice.reducer;



