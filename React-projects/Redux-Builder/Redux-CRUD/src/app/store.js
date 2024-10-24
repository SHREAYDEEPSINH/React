import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../features/todolist/todoSlice'

export const store = configureStore({
  reducer: {
    todolist : todoSlice,
  },
})