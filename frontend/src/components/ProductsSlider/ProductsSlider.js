import React, { useState, useEffect } from "react"
import styles from "./ProductsSlider.module.css"
import axios from "axios"
import Product from "../Product/Product"

const ProductSlider = () => {
  const [products, setProducts] = useState([])
  const [currentProductIndex, setcurrentProductIndex] = useState(0)
  const displayCount = 6

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => {
        console.log("res ", response)
        setProducts(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
      })
  }, [])

  const nextProduct = () => {
    const newIndex = currentProductIndex + 1
    setcurrentProductIndex(
      newIndex >= products.length - displayCount + 1 ? 0 : newIndex,
    )
  }

  const previousProduct = () => {
    const newIndex = currentProductIndex - 1
    setcurrentProductIndex(
      newIndex < 0 ? products.length - displayCount : newIndex,
    )
  }

  return (
    <div className={styles.carousel}>
      <span className={"material-symbols-outlined"} onClick={previousProduct}>
        arrow_back_ios
      </span>
      {products
        .slice(currentProductIndex, currentProductIndex + displayCount)
        .map((product, index) => (
          <Product
            key={index}
            name={product.name}
            image={process.env.PUBLIC_URL + "/" + product.image}
            size={product.size}
            price={product.price}
            description={product.description}
          />
        ))}
      <span onClick={nextProduct} className={"material-symbols-outlined"}>
        arrow_forward_ios
      </span>
    </div>
  )
}

export default ProductSlider
