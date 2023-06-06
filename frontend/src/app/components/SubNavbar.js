import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./SubNavbar.module.css"
import useLocaleContext from "../../context/locale.context"

const SubNavbar = () => {
  const { translate } = useLocaleContext()
  return (
    <div className={styles.navbarContainer}>
      <div>
        <nav className={styles.navbar}>
          <NavLink className={styles.navLink} to='/'>
            {translate.navbar.home}
          </NavLink>
          <NavLink className={styles.navLink} to='/shop'>
            {translate.navbar.shop}
          </NavLink>
          <NavLink className={styles.navLink} to='/about'>
            {translate.navbar.about}
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default SubNavbar
