import {configureStore} from '@reduxjs/toolkit';

import movieReducer from './slices/movie.slice';
import lightThemeReducer from './slices/lightTheme.slice';

const store = configureStore({
    reducer: {
        movieReducer,
        lightThemeReducer
    }
});

export default store;