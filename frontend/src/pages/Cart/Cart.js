import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import styles from "../../styles/pages/_cart.module.scss"
import useLocaleContext from "../../context/localeContext"

const Cart = () => {
  const { cart, removeProduct, updateProductQuantity } = useContext(CartContext)
  const { translate } = useLocaleContext()
  const text = translate.pages.cart
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
              src={process.env.PUBLIC_URL + "/assets/" + item.product.image}
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
                {text.deleteButton}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.orderSummary}>
        <h2>{text.orderSummary}</h2>
        <div className={styles.summaryDetails}>
          <div>
            {text.orderSubtotal} {totalCost.toFixed(2)} €
          </div>
          <div>
            {text.orderShipping} {shippingCost} €
          </div>
          <hr />
          <div>
            {text.orderTotal}
            {(totalCost + shippingCost).toFixed(2)} €
          </div>
        </div>

        <Link className={styles.buttonContained} to='/checkout/shipping'>
          Confirm Purchase
        </Link>
      </div>
    </div>
  )
}

export default Cart
