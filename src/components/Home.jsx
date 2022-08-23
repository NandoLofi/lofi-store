import React from 'react'
import "./Home.css"
import { productsAPI, useGetAllProductsQuery } from '../features/productsApi'

export default function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery()

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
                <h3>{productsAPI.name}</h3>
                <img src={product.imageUrl} alt={product.name} />
                <div className="deta">
                  <span className="details">{product.description}</span>
                  <span className="priced">${product.price}</span>
                </div>
                <button> Add to Cart </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
