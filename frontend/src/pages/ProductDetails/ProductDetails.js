import React, { useEffect, useState } from "react"
import axios from "axios"
import styles from "../../styles/pages/_productDetails.module.scss"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const ProductDetails = () => {
  const { productName } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { addProduct } = useContext(CartContext)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/products/${productName}`,
        )
        setProduct(response.data)
      } catch (error) {
        console.error("Error fetching product: ", error)
      }
    }

    getProduct()
  }, [productName])

  if (!product) {
    return <div>Loading...</div>
  }

  const { name, image, size, price, description, category, details } = product

  const addToCart = () => {
    addProduct(product, quantity)
  }

  const increaseQuantity = () => {
    if (quantity < 20) {
      setQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

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
            <div className={styles.productName}>{name}</div>
            <div className={styles.rightContainerDetailsPoints}>
              <ul className={styles.descriptionPoints}>
                <li className={styles.descriptionPoint}>{category}</li>
                <li className={styles.descriptionPoint}>{details}</li>
                <li className={styles.descriptionPoint}>{description}</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightContainerPriceDetails}>
            <div>{size} ml</div>
            <div>${price}</div>
          </div>
          <div className={styles.selectorAndButtonContainer}>
            <div className={styles.quantitySelector}>
              <div className={styles.quantityInputContainer}>
                <input
                  type='text'
                  min='1'
                  max='20'
                  value={quantity}
                  readOnly
                  className={styles.quantityInput}
                />
              </div>
              <div className={styles.quantityButtonsContainer}>
                <div>
                  <span
                    onClick={increaseQuantity}
                    className={`material-symbols-outlined ${styles.buttonIcon}`}
                  >
                    expand_less
                  </span>
                </div>
                <div>
                  <span
                    onClick={decreaseQuantity}
                    className={`material-symbols-outlined ${styles.buttonIcon}`}
                  >
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            <button
              className={styles.addToCartButton}
              onClick={() => addToCart(name, quantity)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
