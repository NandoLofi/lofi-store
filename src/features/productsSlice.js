import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    items: [],
    status: null
}
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async ()=> {
        const response = await axios.get("https://lofi-store.herokuapp.com/products")
        .then((response) => response.data)
    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) =>{
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) =>{
            state.status = "success"
            state.items = action.payload
        },
        [productsFetch.e]: (state, action) =>{
            state.status = "pending"
        }
    }
        
})

export default productSlice.reducer