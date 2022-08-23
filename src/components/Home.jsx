import React from 'react'
import { useGetAllProductsQuery } from '../features/productsApi'

export default function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery()

  return (
    <div>
        <h2>Home</h2>
    </div>
  )
}
