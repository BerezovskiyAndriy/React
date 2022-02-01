import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [],
        allTasks: 0,
        allCompleted: 0
    },
    reducers: {
        addTodo: (state,action) => {
           if ( action.payload.name ) {
               state.todos.push(action.payload)
               state.allTasks += 1
           }
        },
        deleteTodo: (state,action) => {
           state.todos = state.todos.filter(state => state.id !== action.payload.id)
           state.allTasks -= 1
           if (action.payload.status) {
               state.allCompleted -=1
           }
        },
        toggleTodo: (state,action) => {
            const index = action.payload.index
            state.todos[index] = {...state.todos[index],status: action.payload.status}
            action.payload.status ? state.allCompleted += 1 : state.allCompleted -= 1
        }
    }
})

const todoReducers = todoSlice.reducer;

export const {addTodo,deleteTodo,toggleTodo} = todoSlice.actions;
export default todoReducers;