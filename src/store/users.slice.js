import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import {usersService} from "../services/users.service";

export const getUsers = createAsyncThunk(
    'usersSlice/getUsers',
    async (state,dispatch) => {
        try {
            const users = await usersService.getAll();
            return users;
        } catch (e) {
            console.log(e);
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: []
    },
    extraReducers: {
        [getUsers.fulfilled]: (state,action) => {
            state.users = action.payload
        }
    }
})

const usersReducer = usersSlice.reducer;
export default usersReducer;