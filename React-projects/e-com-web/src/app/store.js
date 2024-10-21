import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/counter/cart'
import wishlistReaducer from '../features/counter/wishlist'


export const store = configureStore({
  reducer: {
    cart : cartReducer ,
    wishlist : wishlistReaducer
  },
})