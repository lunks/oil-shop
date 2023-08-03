import React, { useState, useContext, useEffect, useRef } from "react"
import styles from "../../styles/app/components/_navbar.module.scss"
import useLocaleContext from "../../context/localeContext"
import { titleCase } from "../../utils/utils"
import { CartContext } from "../../context/cartContext"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import SubNavbar from "./SubNavbar"

const Navbar = ({ toggleSidebarMenuVisibility }) => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [isSearchDropdownOpen, setSearchDropdownOpen] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [products, setProducts] = useState([])
  const [matchedProducts, setMatchedProducts] = useState([])
  const { getAllProductsQuantity } = useContext(CartContext)
  const { setLanguage } = useLocaleContext()

  const navigate = useNavigate()
  const languageDropdownRef = useRef(null)
  const searchProductListDropdownRef = useRef(null)

  useEffect(() => {
    const listenClickOutsideLanguageDropdown = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setLanguageDropdownOpen(false)
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
    const listenClickOutsideSearchProductListDropdown = (event) => {
      if (
        searchProductListDropdownRef.current &&
        !searchProductListDropdownRef.current.contains(event.target)
      ) {
        setSearchDropdownOpen(false)
        setMatchedProducts([])
      }
    }
    document.addEventListener(
      "mousedown",
      listenClickOutsideSearchProductListDropdown,
    )
    return () => {
      document.removeEventListener(
        "mousedown",
        listenClickOutsideSearchProductListDropdown,
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
    setSearchDropdownOpen(true)

    const match = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    setMatchedProducts(match.slice(0, 6))
    if (e.target.value === "") {
      setSearchDropdownOpen(false)
      setMatchedProducts([])
    }
  }

  const navigateToProduct = (name) => {
    navigate(`/products/${name}`)
    setSearchDropdownOpen(false)
    setMatchedProducts([])
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
          <div className={styles.navbarColumn}>
            <span
              className={`${styles.toggleSidebarButton} material-symbols-outlined`}
              onClick={() => {
                toggleSidebarMenuVisibility()
              }}
            >
              menu
            </span>
          </div>
          <div className={styles.navbarColumn}>
            <img
              className={styles.logo}
              src={process.env.PUBLIC_URL + "/assets/" + "logo.png"}
            />
          </div>

          <div className={styles.navbarColumn}>
            <span
              onClick={() =>
                setSearchDropdownOpen(
                  (prevIsSearchDropdownOpen) => !prevIsSearchDropdownOpen,
                )
              }
              className={`material-symbols-outlined ${styles.searchIcon}`}
            >
              search
            </span>
            <div
              className={
                isSearchDropdownOpen ? styles.inputIconContainer : styles.hidden
              }
            >
              {isSearchDropdownOpen && (
                <div
                  className={styles.searchTextInputAndProductList}
                  ref={searchProductListDropdownRef}
                >
                  <input
                    className={styles.searchTextInput}
                    onChange={getInputChange}
                    onKeyDown={getPressedKey}
                    placeholder='Search Product'
                  ></input>
                  {isSearchDropdownOpen && matchedProducts.length > 0 && (
                    <div
                      className={
                        isSearchDropdownOpen
                          ? styles.searchDropdown
                          : styles.hidden
                      }
                    >
                      {matchedProducts.map((product) => (
                        <div
                          className={styles.dropdownListItem}
                          key={product.name}
                          onClick={() => navigateToProduct(product.name)}
                        >
                          <div className={styles.dropdownListItemImage}>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/" +
                                product.image
                              }
                              alt={product.name}
                              className={styles.listItemImage}
                            />
                          </div>

                          <div className={styles.dropdownListItemName}>
                            {titleCase(product.name, "_")}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
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
                onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                language
              </span>
              <div>
                {isLanguageDropdownOpen && (
                  <div className={styles.dropdown} ref={languageDropdownRef}>
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
