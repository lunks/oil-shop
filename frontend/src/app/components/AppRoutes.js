import { Route, Routes } from "react-router-dom"
import { CartProvider } from "../../context/cartContext"
import { useState } from "react"

import styles from "../../styles/app/components/_appRoutes.module.scss"

import Navbar from "./Navbar"
import Footer from "../../components/Footer/Footer"
import About from "../../pages/About/About"
import Cart from "../../pages/Cart/Cart"
import Faq from "../../pages/Faq/Faq"
import Home from "../../pages/Home/Home"
import Shop from "../../pages/Shop/Shop"
import ProductDetails from "../../pages/ProductDetails/ProductDetails"
import Shipping from "../../components/Checkout/Shipping/Shipping"
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"

const AppRoutes = () => {
  const [isSidebarMenuVisible, setSidebarMenuVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarMenuVisible((prevSidebarVisible) => !prevSidebarVisible)
    console.log("isSidebarMenuVisible", isSidebarMenuVisible)
  }

  return (
    <div className={styles.wrapper}>
      <CartProvider>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className={styles.content}>
          {isSidebarMenuVisible && (
            <SidebarMenu
              className={isSidebarMenuVisible ? "visible" : "hidden"}
            />
          )}
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/products/:productName' element={<ProductDetails />} />
            <Route path='/checkout/shipping' element={<Shipping />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </div>
  )
}

export default AppRoutes
