import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoSlice from '../features/todolist/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todolist : todoSlice,
  },
})