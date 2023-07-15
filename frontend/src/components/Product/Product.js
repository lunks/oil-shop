import React from "react"
import styles from "../../styles/components/_product.module.scss"
import { Link } from "react-router-dom"
import useLocaleContext from "../../context/localeContext"
import AddOneToCartButton from "../AddOneToCartButton/AddOneToCartButton"

const Product = ({ name, image, size, price, description, category }) => {
  const { translate } = useLocaleContext()

  const product = { name, image, size, price, description, category }

  return (
    <Link to={`/products/${name}`}>
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
        <div></div>
        <AddOneToCartButton product={product} />
      </div>
    </Link>
  )
}

export default Product
