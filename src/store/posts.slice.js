import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import {postsService} from "../services/posts.service";

export const getPosts = createAsyncThunk(
    'postsSlice/getPosts',
    async (state,dispatch) => {
        try {
            const posts= await postsService.getAll();
            return posts;
        } catch (e) {
            console.log(e);
        }
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: []
    },
    extraReducers: {
        [getPosts.fulfilled]: (state,action) => {
            state.posts = action.payload
        }
    }
})

const postsReducer = postsSlice.reducer;
export default postsReducer;