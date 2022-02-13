import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {movieService} from '../../services/movie.service';

const initialState = {
    movies: [],
    genreList: [],
    videos: [],
    videosStatus:null,
    videoUrl: null,
    genreId: null
}

export const getMovieAsync = createAsyncThunk(
    'movie/getMovieAsync',
    async ({pageId, genreId}) => {
        try {
            return await movieService.getByIdGenre(+pageId,genreId)
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
                genre.isActive = !genre.isActive
            } else {
                genre.isActive = false
            }
            return genre
        })
      },
      resetVideos: (state, action) => {
          state.videos = [];
          state.videoUrl = null;
      },
      addVideoUrl: (state, action) => {
          state.videoUrl = action.payload
        },
      setGenreId: (state, action) => {
          state.genreId = action.payload
      },
      resetGenreId: (state) => {
            state.genreId = null
       }
    },
    extraReducers: {
        [getMovieAsync.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
        },
        [getGenreListAsync.fulfilled]: (state, action) => {
            state.genreList = action.payload.genres.map(genre => {
                return {...genre, isActive: false}
            });
        },
        [getVideos.pending]: (state,action) => {
            state.videosStatus = 'pending'
            state.videos = []
        },
        [getVideos.fulfilled]: (state,action) => {
            state.videosStatus = 'fulfilled'
            state.videos = action.payload.results;
        },
    }
})

export const {toggleGenreStatus,setGenreId,resetGenreId,resetVideos,addVideoUrl} = movieSlice.actions;

export default movieSlice.reducer;



