import React, { Fragment } from "react"
import styles from "./Navbar.module.css"
import SubNavbar from "./SubNavbar"
import useLocaleContext from "../../context/locale.context"


const Navbar = () => {
  const { translate } = useLocaleContext()
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
    <div className={styles.navbarContainer}>
      <div className={styles.menuContainer}>
      <span className='material-symbols-outlined'>menu</span>
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
          <span className='material-symbols-outlined'>search</span>
        </div>
        <div className={styles.gap}></div>
        <nav className={styles.iconsNav}>
          <span className='material-symbols-outlined'>shopping_cart</span>
          <span className='material-symbols-outlined'>account_circle</span>
          <span className='material-symbols-outlined'>language</span>
        </nav>
      </div>
    </div>
    <SubNavbar />
    </div>
    </div>
    
  )
}

export default Navbar
