import React from "react"
import useCartContext from "../../context/cartContext"

const AddOneToCartButton = ({ product, className }) => {
  const { addProduct } = useCartContext()

  const addToCart = () => {
    addProduct(product, 1)
  }

  return (
    <button className={className} onClick={() => addToCart()}>
      Add To Cart
    </button>
  )
}

export default AddOneToCartButton
