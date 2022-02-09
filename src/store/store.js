import {configureStore} from '@reduxjs/toolkit';

import movieReducer from './slices/movie.slice';
import genreReducer from './slices/genre.slice';

const store = configureStore({
    reducer: {
        movieReducer,
        genreReducer
    }
});

export default store;