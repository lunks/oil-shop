import { Route, Routes } from "react-router-dom"
import { CartProvider } from "../../context/cartContext"
import { useState } from "react"

import styles from "../../styles/app/components/_appRoutes.module.scss"

import Navbar from "./Navbar"
import Footer from "../../components/Footer/Footer"
import About from "../../pages/About/About"
import Cart from "../../pages/Cart/Cart"
import Faq from "../../pages/Faq/Faq"
import Home from "../../pages/Home"
import Shop from "../../pages/Shop/Shop"
import ProductDetails from "../../pages/ProductDetails/ProductDetails"
import Shipping from "../../pages/Shipping/Shipping"
import Payment from "../../pages/Payment/Payment"
import OrderSummary from "../../pages/OrderSummary/OrderSummary"
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"
import Cancellation from "../../pages/Cancellation/Cancellation"

const AppRoutes = () => {
  const [isSidebarMenuVisible, setSidebarMenuVisible] = useState(false)

  const toggleSidebarMenuVisibility = () => {
    setSidebarMenuVisible((prevIsSidebarVisible) => !prevIsSidebarVisible)
  }

  return (
    <div className={styles.wrapper}>
      <CartProvider>
        <Navbar toggleSidebarMenuVisibility={toggleSidebarMenuVisibility} />
        <div className={styles.content}>
          <SidebarMenu
            setSidebarMenuVisible={setSidebarMenuVisible}
            isOpen={isSidebarMenuVisible}
          />

          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/products/:productName' element={<ProductDetails />} />
            <Route path='/checkout/shipping' element={<Shipping />} />
            <Route path='/checkout/payment' element={<Payment />} />
            <Route path='/checkout/summary' element={<OrderSummary />} />
            <Route path='/cancellation' element={<Cancellation />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </div>
  )
}

export default AppRoutes
