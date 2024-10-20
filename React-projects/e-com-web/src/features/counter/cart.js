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
            console.log(action.payload);

        },
        setCart: (state, action) => {
            state.items = action.payload; // Set cart with data from Firebase
        },
        removeFromCart: (state, action) => {

            state.items = state.items.filter((item, index) => index !== action.payload);
            // Remove item from cart using index
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, setCart, removeFromCart } = cart.actions

export default cart.reducer