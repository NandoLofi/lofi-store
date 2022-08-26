import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex( (item) => item._id === action.payload._id )
            
            if (itemIndex >= 0 ){
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const productInc = {...action.payload, cartQuantity: 1 }
                state.cartItems.push(productInc);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem._id !== action.payload._id
            )
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        decreaseQty(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem._id === action.payload._id
            )
            if (state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer