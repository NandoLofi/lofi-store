import { React, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Cart.css"
import { useDispatch } from 'react-redux'
import { addToCart, clearCart, decreaseQty, removeFromCart, totalPrice } from '../features/cartSlice'

export default function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(totalPrice())
  }, [cart])

  const handleRemove = (cartItem) =>{
    dispatch(removeFromCart(cartItem))
  }
  const handleDecrease = (cartItem)=>{
    dispatch(decreaseQty(cartItem))
  }
  const handleIncrease = (cartItem)=> {
    dispatch(addToCart(cartItem))
  }
  const handleClearCart = ()=> {
    dispatch(clearCart())
  }
  return (
    <div className="cart__container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart__empty">
          <p>Empty Cart</p>
          <div className="start__shopping">
            <Link to="/">
              <i class="fa-solid fa-shop"></i>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product__title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart__items">
            {cart.cartItems.map((cartItem) => (
              <div className="cart__item" key={cartItem.id}>
                <div className="cart__product">
                  <img src={cartItem.imageUrl} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <button className='remove'onClick={()=> handleRemove(cartItem)}>Remove</button>
                  </div>
                </div>
                <div className="cart__product__price">${cartItem.price}</div>
                <div className="cart__product__quantity">
                  <button onClick={()=> handleDecrease(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={()=> handleIncrease(cartItem)}>+</button>
                </div>
                <div className="cart__product__total__price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart__summary">
            <button className="clear__cart" onClick={()=> handleClearCart()}>Clear Cart</button>
            <div className="cart__checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <button className='checkout'>Checkout</button>
              <div className="continue__shopping">
                <Link to="/">
                  <i class="fa-solid fa-shop"></i>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
