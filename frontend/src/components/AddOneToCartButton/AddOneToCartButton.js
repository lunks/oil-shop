import React from "react"
import useCartContext from "../../context/cartContext"
import styles from "../../styles/pages/_productDetails.module.scss"

const AddOneToCartButton = ({ product }) => {
  console.log(product)
  const { addProduct } = useCartContext()

  const addToCart = () => {
    addProduct(product, 1)
  }

  return (
    <button className={styles.buttonContained} onClick={() => addToCart()}>
      Add To Cart
    </button>
  )
}

export default AddOneToCartButton
