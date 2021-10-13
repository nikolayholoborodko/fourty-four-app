import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/main/products/productsSlice'
import cartReducer from '../features/main/cart/cartSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
})
