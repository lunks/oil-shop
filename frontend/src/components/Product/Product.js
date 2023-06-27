import React from "react"
import style from "../../styles/components/Product.module.scss"
import { Link } from "react-router-dom"
import useLocaleContext from "../../context/locale.context"

const Product = ({ name, image, size, price, description, category }) => {
  const { translate } = useLocaleContext()

  return (
    <div className={style.product}>
      <div className={style.productName}>{name}</div>
      <img className={style.productImage} src={image} alt={name} />
      <div className={style.productSize}>
        {translate.products.oil.size}: {size} ml
      </div>
      <div className={style.productPrice}>
        {translate.products.oil.price} ${price}
      </div>
      <div className={style.productDescription}>{description}</div>
      <div className={style.buttonContainer}>
        <button className={style.productButton}>
          <Link to={`/products/${name}`}>Add to Cart</Link>
        </button>
      </div>
    </div>
  )
}

export default Product
