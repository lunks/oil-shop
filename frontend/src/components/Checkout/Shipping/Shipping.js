import React from "react"
import useLocaleContext from "../../../context/localeContext"
import styles from "../../../styles/pages/_shipping.module.scss"

const Shipping = () => {
  const { translate } = useLocaleContext()
  return <div className={styles.content}>{translate.pages.shipping.text} </div>
}

export default Shipping
