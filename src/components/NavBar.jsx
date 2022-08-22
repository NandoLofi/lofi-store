import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"


export default function NavBar() {
  return (
    <div className='nav__bar'>
      <Link to ="/">
      <h2>Lofi Shopping</h2>
      </Link>
      <Link to="/cart" >
        <div className="nav__bag">
        <i class="fa-solid fa-cart-shopping"></i>
        <span className="cart__quantity">
          <span>3</span>
        </span>
        </div>
      </Link>
    </div>
  )
}
