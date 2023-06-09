import React, { useState, createContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProduct = (productName, quantity) => {
    const existingProduct = cart.find(
      (item) => item.productName === productName,
    )

    if (existingProduct) {
      // update quantity if item already in cart
      setCart(
        cart.map((item) =>
          item.productName === productName
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      )
    } else {
      setCart([...cart, { productName, quantity }])
    }
  }

  console.log("cart ", cart)

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}
