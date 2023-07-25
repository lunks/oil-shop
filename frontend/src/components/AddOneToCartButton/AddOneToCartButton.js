import React from "react"
import useLocaleContext from "../../context/localeContext"
import useCartContext from "../../context/cartContext"

const AddOneToCartButton = ({ product, classname }) => {
  const { addProduct } = useCartContext()
  const { translate } = useLocaleContext()

  const addToCart = () => {
    addProduct(product, 1)
  }

  return (
    <button className={classname} onClick={() => addToCart()}>
      {translate.components.addOneToCartButton.text}
    </button>
  )
}

export default AddOneToCartButton
