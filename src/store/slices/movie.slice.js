import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieAsync = createAsyncThunk(
    ''
)

export const movieSlice = createSlice({
    name: 'movie',
    initialState
})

export default movieSlice.reducer;
