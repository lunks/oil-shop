import React from "react"
import useLocaleContext from "../../context/localeContext"
import useCartContext from "../../context/cartContext"
import { addOneProductToCart } from "../../utils/utils"

const AddOneProductToCartButton = ({ product, classname }) => {
  const { addProduct } = useCartContext()
  const { translate } = useLocaleContext()

  return (
    <button
      className={classname}
      onClick={() => addOneProductToCart(product, addProduct)}
    >
      {translate.components.addOneToCartButton.text}
    </button>
  )
}

export default AddOneProductToCartButton
