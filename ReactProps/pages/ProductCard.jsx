import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
      <h2>Product Name : {props.name}</h2>
      <h2>Price : {props.price}</h2>
      <p>Description : {props.description}</p>
    </div>
  )
}

export default ProductCard
