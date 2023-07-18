import React from "react"
import styles from "../../styles/components/_sidebarMenu.module.scss"
import { Link } from "react-router-dom"
import useLocaleContext from "../../context/localeContext"

const SidebarMenu = ({ className }) => {
  const { translate } = useLocaleContext()
  console.log("class ", className)

  const Categories = Object.freeze({
    ALL: "all",
    ESSENTIAL_OIL: "essentialOil",
    DIFUSER: "difuser",
    BODY_CARE: "bodyCare",
    HAIR_CARE: "hairCare",
    ROLL: "roll",
    MASSAGE_OIL: "massageOil",
  })

  return (
    <div className={styles[className]}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarItem}>
          <Link to={`/shop?category=all`}>{translate.sidebar.allProducts}</Link>
        </div>
        <div className={styles.sidebarItem}>
          <Link to={`/shop?category=${Categories.ESSENTIAL_OIL}`}>
            {translate.sidebar.essentialOils}
          </Link>
        </div>

        <div className={styles.sidebarItem}>
          <Link to={`/shop?category=${Categories.DIFUSER}`}>
            {translate.sidebar.difusers}
          </Link>
        </div>

        <div className={styles.sidebarItem}>
          <Link to={`/shop?category=${Categories.BODY_CARE}`}>
            {translate.sidebar.bodyCare}
          </Link>
        </div>
        <div className={styles.sidebarItem}>
          <Link to={`/shop?category=${Categories.HAIR_CARE}`}>
            {translate.sidebar.hairCare}
          </Link>
        </div>
        <div className={styles.sidebarItem}>
          <Link to={`/shop?category=${Categories.ROLL}`}>
            {translate.sidebar.rollOn}
          </Link>
        </div>
        <div className={styles.sidebarItem}>
          <Link to={`/shop?category=${Categories.MASSAGE_OIL}`}>
            {translate.sidebar.massageOils}
          </Link>
        </div>
        <div className={styles.sidebarItem}>
          <a href='mailto:oylooils@gmail.com'>Contact us</a>
        </div>
        <div className={styles.sidebarItem}>
          <a href='/login' title='Shop Customers Account &amp; Login'>
            Account &amp; Login
          </a>
        </div>
        <div>
          <a className={styles.sidebarItem} href='/shop' title='Online-Shop'>
            Online Shop
          </a>
        </div>
        <div className={styles.sidebarItem}>
          <a href='/delivery-terms' title='shipment &amp; payment'>
            shipment &amp; payment
          </a>
        </div>
        <div className={styles.sidebarItem}>
          <a href='/cancellation' title='Cancellation'>
            Cancellation
          </a>
        </div>
        <div className={styles.sidebarItem}>
          <a href='/return' title='return'>
            Return buyed products
          </a>
        </div>
        <div className={styles.sidebarItem}>
          <a href='/faq' title='Frequently Asked Questions'>
            Frequently Asked Questions / FAQ
          </a>
        </div>
      </div>
    </div>
  )
}

export default SidebarMenu
