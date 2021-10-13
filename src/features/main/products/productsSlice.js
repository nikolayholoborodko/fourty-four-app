import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

//use createAsyncThunk to load goods
export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json()
        return products
    }
)

const initialState = {
    products: [],
    status: 'idle',
}

//create slice
const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [loadProducts.pending]: (state, __) => {
            state.status = 'loading'
        },
        [loadProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.products.push(...action.payload)
        },
    },
})

export const selectAllProducts = state => state.products.products
export const selectDataDownloadStatus = state => state.products.status

export const selectProductbyId = createSelector(
    [selectAllProducts, (_, productId) => productId],
    (products, productId) => products.find(product => product.id === productId)
)

//export reducer to the store
export default productsSlice.reducer
