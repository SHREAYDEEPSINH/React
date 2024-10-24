import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
  
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

        let editItem = (state.value.find((ele)=>{
          return ele.id == action.payload.id
        }))
        if(editItem){
          editItem.task = action.payload.task
        }
        
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, editHandler, deleteHandler } = todoSlice.actions

export default todoSlice.reducer