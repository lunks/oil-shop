import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        className={styles.navLink}
        to='/'
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        className={styles.navLink}
        to='/shop'
        activeClassName={styles.activeLink}
      >
        Shop
      </NavLink>
      <NavLink
        className={styles.navLink}
        to='/about'
        activeClassName={styles.activeLink}
      >
        About
      </NavLink>
    </nav>
  )
}

export default Navbar
