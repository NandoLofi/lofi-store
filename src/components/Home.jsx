import React from 'react'
import "./Home.css"
import { productsAPI, useGetAllProductsQuery } from '../features/productsApi'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useNavigate } from 'react-router';


export default function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleAddToCart = (product) =>{
    dispatch(addToCart(product));
    navigate("/cart")
  }

  return (
    <div className="home__container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p> An error occured </p>
      ) : (
        <>
          <h2>All Products</h2>
          <div className="products">
            {data.map((product) => (
              <div key={product._id} className="product">
                <h3>{product.name}</h3>
                <img src={product.imageUrl} alt={product.name} />
                <div className='details__holder'>
                  <span className="details">{product.description}</span>
                  <br></br>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={()=> handleAddToCart(product)}> Add to Cart </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
