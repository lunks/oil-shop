import React, { useState, createContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProduct = (product, quantity) => {
    const existingProduct = cart.find(
      (item) => item.product.name === product.name,
    )

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      )
    } else {
      setCart([...cart, { product, quantity }])
    }

    alert(`${quantity} ${product.name} were added to cart`)
  }

  const updateProductQuantity = (productName, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.product.name === productName
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    )
  }

  const removeProduct = (productName) => {
    setCart(cart.filter((item) => item.product.name !== productName))
  }

  console.log("CartProvider cart ", cart)

  return (
    <CartContext.Provider
      value={{ cart, addProduct, updateProductQuantity, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}
