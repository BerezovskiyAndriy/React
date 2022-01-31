import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const newCar = await carService.getAll();
            return newCar;
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

export const createCars = createAsyncThunk(
    'carSlice/createCars',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteCars = createAsyncThunk(
    'carSlice/deleteCars',
    async ({id}, {dispatch}) => {
        try {
            await carService.delete(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.cars = action.payload
        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer;