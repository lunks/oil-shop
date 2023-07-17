import React from "react"
import styles from "../../styles/components/_sidebarMenu.module.scss"
import { Link } from "react-router-dom"
import useLocaleContext from "../../context/localeContext"

const SidebarMenu = ({ setCategory }) => {
  const { translate } = useLocaleContext()

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
    <div>
      <div className={styles.sidebar}>
        <div className={styles.sidebarItem}>
          <Link to={`/shop?category=all`}>{translate.sidebar.allProducts}</Link>
        </div>
        <div>
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
      </div>
    </div>
  )
}

export default SidebarMenu
