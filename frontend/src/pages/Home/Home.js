import React from "react"
import styles from "./Home.module.css"
import useLocaleContext from "../../context/locale.context"
import Carousel from "../../components/Carrousel/Carrousel"
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider"

const Home = () => {
  const { translate } = useLocaleContext()

  return (
    <div className={styles.homeContainer}>
      <Carousel />
      <h1 className={styles.hometitle}>{translate.pages.welcome.title}</h1>
      <p className={styles.homesubtitle}>{translate.pages.welcome.teaser}</p>
      <ProductsSlider />
    </div>
  
  )
}

export default Home
