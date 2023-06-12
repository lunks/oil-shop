import React from "react"

import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log("Cart cart", cart)

  return (
    <div>
      {cart.map((e) => (
        <div>
          <div>{e.productName}</div>
          <div>{e.quantity}</div>
        </div>
      ))}
    </div>
  )
}

export default Cart
