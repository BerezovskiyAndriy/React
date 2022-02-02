import {configureStore} from '@reduxjs/toolkit';

import todoReducers from './todo.slice';

export const store = configureStore({
    reducer: {
        todoReducers
    }
})