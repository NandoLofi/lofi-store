import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"


export default function NavBar() {
  return (
    <nav className='navbar'>
    <div className='navbar__logo'>
        <Link to="/" className='home__link'>
        <h2>Lofi Shopping</h2>
        </Link>
    </div>

    <ul className='navbar__links'>
        <li>
            <Link to="/cart" className='cart__link'>
              <i className='fas fa-shopping-cart'> </i>
              <span>
              Cart
              <span className='cartlogo__badge'>0</span>
              </span>
            </Link>
        </li>
    </ul>
    

</nav>
  )
}
