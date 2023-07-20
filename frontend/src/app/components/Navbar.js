import React, { useState, useContext, useEffect, useRef } from "react"
import styles from "../../styles/app/components/_navbar.module.scss"
import SubNavbar from "./SubNavbar"
import useLocaleContext from "../../context/localeContext"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const Navbar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const { getAllProductsQuantity } = useContext(CartContext)
  const { setLanguage } = useLocaleContext()
  const dropdownRef = useRef(null)

  const changeLanguage = (lang) => {
    setLanguage(lang)
    setTimeout(() => setDropdownOpen(false))
  }

  useEffect(() => {
    const listenClickOutsideLanguageDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", listenClickOutsideLanguageDropdown)
    return () => {
      document.removeEventListener(
        "mousedown",
        listenClickOutsideLanguageDropdown,
      )
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.navbarContainer}>
          <div className={styles.menuContainer}>
            <span
              className='material-symbols-outlined'
              onClick={() => toggleSidebar()}
            >
              menu
            </span>
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
              <Link to='/cart'>
                <span className='material-symbols-outlined'>shopping_cart</span>
                <span className={styles.productsQuantity}>
                  {getAllProductsQuantity}
                </span>
              </Link>

              <span className='material-symbols-outlined'>account_circle</span>
              <span
                className='material-symbols-outlined'
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                language
              </span>
              <div>
                {isDropdownOpen && (
                  <div className={styles.dropdown} ref={dropdownRef}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/" +
                        "united-kingdom.png"
                      }
                      onClick={() => changeLanguage("en")}
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/" + "germany.png"}
                      onClick={() => changeLanguage("de")}
                    ></img>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
        <SubNavbar />
      </div>
    </div>
  )
}

export default Navbar
