import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/counter/cart'


export const store = configureStore({
  reducer: {
    cart : cartReducer
  },
})