import React, { useState, useEffect } from "react"
import styles from "./ProductsSlider.module.css"
import axios from "axios"
import Product from "../Product/Product"

const ProductSlider = () => {
  const [products, setProducts] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
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

  const nextImage = () => {
    const newIndex = currentImageIndex + 1
    setCurrentImageIndex(newIndex >= products.length ? 0 : newIndex)
  }

  const previousImage = () => {
    const newIndex = currentImageIndex - 1
    setCurrentImageIndex(newIndex < 0 ? products.length - 1 : newIndex)
  }

  return (
    <div className={styles.carousel}>
      <span className={'material-symbols-outlined'} onClick={previousImage}>
        arrow_back_ios
      </span>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          image={process.env.PUBLIC_URL + "/" + product.image}
          size={product.size}
          price={product.price}
          description={product.description}
        />
      ))}
      <span onClick={nextImage} className={'material-symbols-outlined'}>
        arrow_forward_ios
      </span>
    </div>
  )
}

export default ProductSlider
