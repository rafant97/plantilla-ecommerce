'use client'
import { useEffect, useState } from "react"
import { useAppContext } from "./context/index"

const page = () => {

  const { fetchAllProducts, productsState } = useAppContext()

  useEffect(() => {
    fetchAllProducts()
  }, [])

  console.log(productsState)

  return (
    <div>
      {productsState.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default page
