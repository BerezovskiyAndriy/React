import {createSlice} from '@reduxjs/toolkit';

const lightThemeSlice = createSlice({
    name: 'lightTheme',
    initialState: {
        light: false
    },
    reducers: {
        switchTheme: (state, action) => {
            state.light = action.payload
        }
    }
});

const lightThemeReducer = lightThemeSlice.reducer;

export const {switchTheme} = lightThemeSlice.actions;
export default lightThemeReducer;