import React, { useEffect, useState } from "react"
import axios from "axios"
import styles from "./ProductDetails.module.css"
import { useParams } from "react-router-dom"
import ProductQuantitySelector from "../../components/ProductQuantitySelector/ProductQuantitySelector"

const ProductDetails = () => {
  const { productName } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/products/${productName}`,
        )
        console.log("responseDeta", response)
        console.log("responseDetaData", response.data)
        setProduct(response.data)
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }

    getProduct()
  }, [productName])

  if (!product) {
    return <div>Loading...</div>
  }

  const { name, image, size, price, description, category, details } = product

  return (
    <div className={styles.productPageWrapper}>
      <div className={styles.productPage}>
        <div className={styles.leftContainer}>
          <div className={styles.imagesColumn}>
            <div className={styles.imageContainer}>
              <img
                className={styles.imageSmall}
                src={process.env.PUBLIC_URL + "/" + image}
                alt={name}
              />
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.imageSmall}
                src={process.env.PUBLIC_URL + "/" + image}
                alt={name}
              />
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.imageSmall}
                src={process.env.PUBLIC_URL + "/" + image}
                alt={name}
              />
            </div>
          </div>
          <div className={styles.middleContainer}>
            <div className={styles.imageMiddleContainer}>
              <img
                className={styles.imageMiddle}
                src={process.env.PUBLIC_URL + "/" + image}
                alt={name}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightContainerDetails}>
            <div>
              <h1>{name}</h1>
            </div>
            <p>{category}</p>
            <p>{details}</p>
            <p>{description}</p>
          </div>
          <div className={styles.rightContainerPriceDetails}>
            <div>{size} ml</div>
            <div>${price}</div>
          </div>
          <div className={styles.selectorAndButtonContainer}>
            <ProductQuantitySelector />
            <button className={styles.addToCartButton}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
