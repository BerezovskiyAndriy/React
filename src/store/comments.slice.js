import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import {commentsService} from "../services/comments.service";

export const getComments = createAsyncThunk(
    'commentsSlice/getComments',
    async (state,dispatch) => {
        try {
            const comments = await commentsService.getAll();
            return comments;
        } catch (e) {
            console.log(e);
        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: []
    },
    extraReducers: {
        [getComments.fulfilled]: (state,action) => {
            state.comments = action.payload
        }
    }
})

const commentsReducer = commentsSlice.reducer;
export default commentsReducer;