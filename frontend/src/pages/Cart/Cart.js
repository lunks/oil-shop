import React from "react"

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
    <div
      style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "1rem" }}
    >
      {/* Product List */}
      <div>
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 1fr 1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              style={{ width: "100%" }}
            />
            <div>
              <h3>{item.product.name}</h3>
              <p>{item.product.description}</p>
              <p>{item.product.size} ml</p>
            </div>
            <div>
              <button
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
                style={{ width: "2rem", textAlign: "center" }}
              />
              <button
                onClick={() =>
                  updateProductQuantity(item.product.name, item.quantity + 1)
                }
              >
                +
              </button>
            </div>
            <div>
              {(item.quantity * Number(item.product.price)).toFixed(2)} €
            </div>
            <div>
              <button onClick={() => removeProduct(item.product.name)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
        <h2>Summary</h2>
        <div>
          <div>Subtotal: {totalCost.toFixed(2)} €</div>
          <div>Shipping: {shippingCost} €</div>
          <hr />
          <div>Total: {(totalCost + shippingCost).toFixed(2)} €</div>
        </div>
        <button>Confirm Purchase</button>
      </div>
    </div>
  )
}

export default Cart
