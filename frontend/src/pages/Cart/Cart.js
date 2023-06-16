import React from "react"
import styles from "./Cart.module.css"

import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const Cart = () => {
  const { cart, removeProduct, updateProductQuantity } = useContext(CartContext)
  const shippingCost = 10

  const totalCost = cart.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0,
  )

  return (
    <div className={styles.cartContainer}>
      <div className={styles.productList}>
        {cart.map((item, index) => (
          <div key={index} className={styles.productItem}>
            <img
              src={item.product.image}
              alt={item.product.name}
              className={styles.productImage}
            />
            <div className={styles.productDetails}>
              <h3>{item.product.name}</h3>
              <p>{item.product.description}</p>
              <p>{item.product.size} ml</p>
            </div>
            <div className={styles.productQuantity}>
              <button
                className={styles.quantityButton}
                onClick={() =>
                  updateProductQuantity(item.product.name, item.quantity - 1)
                }
              >
                -
              </button>
              <input
                type='text'
                readOnly
                value={item.quantity}
                className={styles.quantityInput}
              />
              <button
                className={styles.quantityButton}
                onClick={() =>
                  updateProductQuantity(item.product.name, item.quantity + 1)
                }
              >
                +
              </button>
            </div>
            <div className={styles.productTotal}>
              {(item.quantity * Number(item.product.price)).toFixed(2)} €
            </div>
            <div className={styles.productDelete}>
              <button
                className={styles.deleteButton}
                onClick={() => removeProduct(item.product.name)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.orderSummary}>
        <h2>Summary</h2>
        <div className={styles.summaryDetails}>
          <div>Subtotal: {totalCost.toFixed(2)} €</div>
          <div>Shipping: {shippingCost} €</div>
          <hr />
          <div>Total: {(totalCost + shippingCost).toFixed(2)} €</div>
        </div>
        <button className={styles.confirmButton}>Confirm Purchase</button>
      </div>
    </div>
  )
}

export default Cart
