import React from "react"
import styles from "../../styles/components/_sidebar.module.scss"
import useLocaleContext from "../../context/localeContext"

const Sidebar = ({ setCategory }) => {
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
      <ul className={styles.sidebar}>
        <li
          onClick={() => setCategory(Categories.ALL)}
          className={styles.sidebarItem}
        >
          {translate.sidebar.allProducts}
        </li>
        <li
          onClick={() => setCategory(Categories.ESSENTIAL_OIL)}
          className={styles.sidebarItem}
        >
          {translate.sidebar.essentialOils}
        </li>
        <li
          onClick={() => setCategory(Categories.DIFUSER)}
          className={styles.sidebarItem}
        >
          {translate.sidebar.difusers}
        </li>
        <li
          onClick={() => setCategory(Categories.BODY_CARE)}
          className={styles.sidebarItem}
        >
          {translate.sidebar.bodyCare}
        </li>
        <li
          onClick={() => setCategory(Categories.HAIR_CARE)}
          className={styles.sidebarItem}
        >
          {translate.sidebar.hairCare}
        </li>
        <li
          onClick={() => setCategory(Categories.ROLL)}
          className={styles.sidebarItem}
        >
          {translate.sidebar.rollOn}
        </li>
        <li
          onClick={() => setCategory(Categories.MASSAGE_OIL)}
          className={styles.sidebarItem}
        >
          {translate.sidebar.massageOils}
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
