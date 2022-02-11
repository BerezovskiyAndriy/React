import {configureStore} from '@reduxjs/toolkit';

import movieReducer from './slices/movie.slice';

const store = configureStore({
    reducer: {
        movieReducer
    }
});

export default store;