import { Route, Routes } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "../../components/Footer/Footer"
import About from "../../pages/About/About"
import Shop from "../../pages/Shop/Shop"
import Home from "../../pages/Home/Home"
import ProductDetails from "../../pages/ProductDetails/ProductDetails"
import styles from "./AppRoutes.module.css"

const AppRoutes = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/' element={<Home />} />
          <Route path='/products/:productName' element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default AppRoutes
