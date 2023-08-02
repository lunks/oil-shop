import React, { useState, useContext, useEffect, useRef } from "react"
import styles from "../../styles/app/components/_navbar.module.scss"
import useLocaleContext from "../../context/localeContext"
import { CartContext } from "../../context/cartContext"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import SubNavbar from "./SubNavbar"

const Navbar = ({ toggleSidebarMenuVisibility }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
  const [isSidebarMenuOpen] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [products, setProducts] = useState([])
  const [matchedProducts, setMatchedProducts] = useState([])
  const { getAllProductsQuantity } = useContext(CartContext)
  const { setLanguage } = useLocaleContext()

  const navigate = useNavigate()
  const dropdownRef = useRef(null)

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

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((e) => console.error("Error getting products data", e))
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  const getInputChange = (e) => {
    setSearchText(e.target.value)
    setIsSearchDropdownOpen(true)

    const match = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    setMatchedProducts(match.slice(0, 6))
  }

  const navigateToProduct = (name) => {
    navigate(`/products/${name}`)
    setIsSearchDropdownOpen(false)
  }

  const getPressedKey = (e) => {
    if (e.key === "Enter") {
      searchProduct()
    }
  }

  const searchProduct = () => {
    const match = products.find(
      (product) => product.name.toLowerCase() === searchText.toLowerCase(),
    )
    if (match) {
      navigate(`/products/${match.name}`)
    } else {
      console.error("not able to navigate to product page ")
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.navbarContainer}>
          <div className={styles.menuContainer}>
            <span
              className={`${styles.toggleSidebarButton} material-symbols-outlined`}
              onClick={() => {
                toggleSidebarMenuVisibility()
              }}
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
              <input
                className={styles.textInput}
                onChange={getInputChange}
                onKeyDown={getPressedKey}
              ></input>
              {isSearchDropdownOpen && matchedProducts.length > 0 && (
                <div
                  className={
                    isSearchDropdownOpen ? styles.searchDropdown : styles.hidden
                  }
                >
                  {matchedProducts.map((product) => (
                    <div
                      className={styles.matchedProductsItem}
                      key={product.name}
                      onClick={() => navigateToProduct(product.name)}
                    >
                      {product.name}
                    </div>
                  ))}
                </div>
              )}
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
