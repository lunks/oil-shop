import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import useLocaleContext from "../../context/locale.context"

const Navbar = () => {
  const { translate } = useLocaleContext()
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.menuContainer}>
      <span class='material-symbols-outlined'>menu</span>
      </div>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={process.env.PUBLIC_URL + "/assets/" + "logo.png"}
        />
      </div>

      <div className={styles.logoContainer}>
        <div className={styles.inputIconContainer}>
          <input className={styles.textInput}></input>
          <span class='material-symbols-outlined'>search</span>
        </div>
        <div className={styles.gap}></div>
        <nav className={styles.iconsNav}>
          <span class='material-symbols-outlined'>shopping_cart</span>
          <span class='material-symbols-outlined'>account_circle</span>
          <span class='material-symbols-outlined'>language</span>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
