import React from "react"
import styles from "../../styles/components/_product.module.scss"
import { Link } from "react-router-dom"
import useLocaleContext from "../../context/localeContext"
import AddOneToCartButton from "../AddOneToCartButton/AddOneToCartButton"

const Product = ({ name, image, size, price, description, category }) => {
  const { translate } = useLocaleContext()

  const product = { name, image, size, price, description, category }
  console.log("logImageProduct.js ", image)
  return (
    <div className={styles.productWrapper}>
      <Link to={`/products/${name}`}>
        <div className={styles.product}>
          <div className={styles.productName}>{name}</div>
          <img
            className={styles.productImage}
            src={process.env.PUBLIC_URL + "/assets/" + image}
            alt={name}
          />
          <div className={styles.productSize}>
            {translate.components.products.oil.size}: {size} ml
          </div>
          <div className={styles.productPrice}>
            {translate.components.products.oil.price} €{price}
          </div>
          <div className={styles.productDescription}>{description}</div>
        </div>
      </Link>
      <AddOneToCartButton
        product={product}
        className={styles.addToCartButton}
      />
    </div>
  )
}

export default Product
