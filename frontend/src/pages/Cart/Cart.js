import React from "react"
import { Link } from "react-router-dom"
import useCartContext from "../../context/cartContext"
import useLocaleContext from "../../context/localeContext"
import { SHIPPING_COST } from "../../utils/constants"
import { totalCost } from "../../utils/utils"
import styles from "../../styles/pages/_cart.module.scss"

const Cart = () => {
  const { cart, removeProduct, updateProductQuantity } = useCartContext()
  const { translate } = useLocaleContext()
  const text = translate.pages.cart

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
            {text.orderSubtotal} {totalCost(cart).toFixed(2)} €
          </div>
          <div>
            {text.orderShipping} {SHIPPING_COST} €
          </div>
          <hr />
          <div>
            {text.orderTotal}
            {(totalCost(cart) + SHIPPING_COST).toFixed(2)} €
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
