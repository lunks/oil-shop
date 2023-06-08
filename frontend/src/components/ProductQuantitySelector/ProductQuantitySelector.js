import React, { useState } from "react"
import styles from "./ProductQuantitySelector.module.css"

const ProductQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    if (quantity < 20) {
      setQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  return (
    <div className={styles.quantitySelector}>
      <div className={styles.quantityInputContainer}>
        <input
          type='number'
          min='1'
          max='10000'
          value={quantity}
          readOnly
          className={styles.quantityInput}
        />
      </div>
      <div className={styles.quantityButtonsContainer}>
        <div>
          <span
            onClick={increaseQuantity}
            className={`material-symbols-outlined ${styles.buttonIcon}`}
          >
            expand_less
          </span>
        </div>
        <div>
          <span
            onClick={decreaseQuantity}
            className={`material-symbols-outlined ${styles.buttonIcon}`}
          >
            expand_more
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductQuantitySelector
