import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  index : "",
}

export const todoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    edit : (state) => {
        state.value += 1
        console.log("hii")
    },
    deleteHandler : (state,id) => {
      // state.value += 1;
      console.log(state)
      // (state.filter((e) => e.id !== id))
        console.log("delete");
    }
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { edit , deleteHandler } = todoSlice.actions

export default todoSlice.reducer