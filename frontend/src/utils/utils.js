export const titleCase = (str, separator) => {
  return str
    .split(separator)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export const addOneProductToCart = (product, contextFunction) => {
  contextFunction(product, 1)
}

export const totalCost = (cart) =>
  cart.reduce((total, item) => total + item.quantity * item.product.price, 0)
