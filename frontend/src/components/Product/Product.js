import React from "react"
import styles from "../../styles/components/_product.module.scss"
import { Link } from "react-router-dom"
import useLocaleContext from "../../context/localeContext"

const Product = ({ name, image, size, price, description, category }) => {
  const { translate } = useLocaleContext()

  return (
    <div className={styles.product}>
      <div className={styles.productName}>{name}</div>
      <img className={styles.productImage} src={image} alt={name} />
      <div className={styles.productSize}>
        {translate.products.oil.size}: {size} ml
      </div>
      <div className={styles.productPrice}>
        {translate.products.oil.price} ${price}
      </div>
      <div className={styles.productDescription}>{description}</div>
      <div>
        <Link className={styles.buttonContained} to={`/products/${name}`}>
          Add to Cart
        </Link>
      </div>
    </div>
  )
}

export default Product
