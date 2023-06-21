import React from "react"
import styles from "./Cart.module.css"
import { Link } from "react-router-dom"

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
    <div className='cartContainer'>
      <div className='productList'>
        {cart.map((item, index) => (
          <div key={index} className='productItem'>
            <img
              src={item.product.image}
              alt={item.product.name}
              className='productImage'
            />
            <div className='productDetails'>
              <h3>{item.product.name}</h3>
              <p>{item.product.description}</p>
              <p>{item.product.size} ml</p>
            </div>
            <div className='productQuantity'>
              <button
                className='quantityButton'
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
                className='quantityInput'
              />
              <button
                className='quantityButton'
                onClick={() =>
                  updateProductQuantity(item.product.name, item.quantity + 1)
                }
              >
                +
              </button>
            </div>
            <div className='productTotal'>
              {(item.quantity * Number(item.product.price)).toFixed(2)} €
            </div>
            <div className='productDelete'>
              <button
                className='deleteButton'
                onClick={() => removeProduct(item.product.name)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='orderSummary'>
        <h2>Summary</h2>
        <div className='summaryDetails'>
          <div>Subtotal: {totalCost.toFixed(2)} €</div>
          <div>Shipping: {shippingCost} €</div>
          <hr />
          <div>Total: {(totalCost + shippingCost).toFixed(2)} €</div>
        </div>
        <Link to='/checkout/shipping'>
          <button className='confirmButton'>Confirm Purchase</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
