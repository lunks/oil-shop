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
      <div className={styles.teaserText}>
        <h1 className={styles.hometitle}>{translate.pages.welcome.title}</h1>
        <p className={styles.homesubtitle}>
          {translate.pages.welcome.teaserSentence}
        </p>
        <p className={styles.homesubtitle}>
          {translate.pages.welcome.teaserSubSentenceOne}
        </p>
        <p className={styles.homesubtitle}>
          {translate.pages.welcome.teaserSubSentenceTwo}
        </p>
        <p className={styles.homesubtitle}>
          {translate.pages.welcome.teaserSubSentenceThree}
        </p>
        <p className={styles.homesubtitle}>
          {translate.pages.welcome.teaserSubSentenceFour}
        </p>
      </div>
      <div className={styles.productSliderContainer}>
        <ProductsSlider />
      </div>
      <div>
        <div className={styles.teaserText}>
          <h1 className={styles.hometitle}>
            {translate.pages.welcome.subTeaser.title}
          </h1>
          <p className={styles.homesubtitle}>
            {translate.pages.welcome.subTeaser.teaserFirstSubtitle}
            {translate.pages.welcome.subTeaser.teaserFirstSentence}
          </p>
          <p className={styles.homesubtitle}>
            {translate.pages.welcome.subTeaser.teaserSecondSubtitle}
            {translate.pages.welcome.subTeaser.teaserSecondSentence}
          </p>
          <p className={styles.homesubtitle}>
            {translate.pages.welcome.subTeaser.teaserThirthSubtitle}
            {translate.pages.welcome.subTeaser.teaserThirthSentence}
          </p>
          <p className={styles.homesubtitle}>
            {translate.pages.welcome.subTeaser.teaserFourthSubtitle}
            {translate.pages.welcome.subTeaser.teaserFourthSentence}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
