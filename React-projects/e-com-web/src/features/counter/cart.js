import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        }
    },
})


// Action creators are generated for each case reducer function
export const { addToCart} = cart.actions

export default cart.reducer