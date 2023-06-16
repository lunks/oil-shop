import { Route, Routes } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "../../components/Footer/Footer"
import About from "../../pages/About/About"
import Shop from "../../pages/Shop/Shop"
import Home from "../../pages/Home/Home"
import ProductDetails from "../../pages/ProductDetails/ProductDetails"
import Cart from "../../pages/Cart/Cart"
import styles from "./AppRoutes.module.css"
import { CartProvider } from "../../context/cartContext"
import Shipping from "../../components/Checkout/Shipping/Shipping"

const AppRoutes = () => {
  return (
    <div className={styles.wrapper}>
      <CartProvider>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products/:productName' element={<ProductDetails />} />
            <Route path='/checkout/shipping' element={<Shipping />} />
          </Routes>
        </div>
      </CartProvider>
      <Footer />
    </div>
  )
}

export default AppRoutes
