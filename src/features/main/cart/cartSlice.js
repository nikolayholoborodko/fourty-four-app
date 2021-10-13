import { createSlice } from '@reduxjs/toolkit'

//create slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            let leftoverProducts = state.filter(
                product => product.id !== action.payload
            )
            return leftoverProducts
        },
    },
})

export const { addToCart, deleteFromCart } = cartSlice.actions
export const selectProductsInCart = state => [...new Set(state.cart)]

//export reducer to the store
export default cartSlice.reducer
