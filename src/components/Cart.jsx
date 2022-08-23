import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Cart() {
  const cart = useSelector(state => state.cart)
  return (
    <div className='cart__container'>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart__empty">
          <p>Empty Cart</p>
          <div className="start__shopping">
            <Link to="/">
            <i class="fa-solid fa-shop"></i>
              <span>
              </span>
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
            {cart.cartItems.map(cartItem => (
              <div className="cart_item" key={cartItem.id}>
                <div className="cart__product">
                  <img src={cartItem.imageUrl} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.description}</p>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="cart__product__price">{cartItem.price}</div>
                <div className="cart__product__quantity">
                  <button>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button>+</button>
                </div>
                <div className="cart__product__total__price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart__summary">
            <button className='clear__cart'>Clear Cart</button>
            <div className="cart__checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className='amount'>${cart.cartTotalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      )}
        
    </div>
  )
}
