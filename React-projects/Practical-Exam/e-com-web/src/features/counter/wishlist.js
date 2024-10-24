import { createSlice } from "@reduxjs/toolkit";


const initialState={
    wishlistItems :[]
}

export const wishlist = createSlice({
    name: "wishlist",
    initialState,
    reducers : {
        addToWishlist: (state ,action) =>{
            state.wishlistItems.push(action.payload)
        },

        setWishlist: (state, action) => {
            state.wishlistItems = action.payload; // Set cart with data from Firebase
        },

        removeFromCart : (state, action) => {
            state.wishlistItems = state.wishlistItems.filter((ele) => ele !== action.payload)
        }
    }
})



export const {addToWishlist , setWishlist , removeFromCart} = wishlist.actions

export default wishlist.reducer