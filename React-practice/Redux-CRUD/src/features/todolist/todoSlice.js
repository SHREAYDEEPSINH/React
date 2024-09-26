import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
      id: 0,
      task: "hello"
    }
  ],
}

export const todoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push({
        id: action.payload.id,
        task: action.payload.task
      })
    },

    deleteHandler: (state, action) => {

      state.value = (state.value.filter((ele) => {
        return ele.id !== action.payload
      }))
    },

    editHandler : (state ,action) => {
        console.log("hii")
        
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, editHandler, deleteHandler } = todoSlice.actions

export default todoSlice.reducer