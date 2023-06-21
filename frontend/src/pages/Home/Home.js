import React from "react"
import styles from "./Home.module.css"
import useLocaleContext from "../../context/locale.context"
import Carousel from "../../components/Carousel/Carousel"
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider"

const Home = () => {
  const { translate } = useLocaleContext()

  return (
    <div className={styles.homeContainer}>
      <Carousel />
      <div className={styles.teaserText}>
        <h2 className={styles.homeTitle}>{translate.pages.welcome.title}</h2>
        <h3 className={styles.homeSubtitleText}>
          {translate.pages.welcome.teaserSentence}
        </h3>
        <h3 className={styles.homeSubtitleText}>
          {translate.pages.welcome.teaserSubSentenceOne}
        </h3>
        <h3 className={styles.homeSubtitleText}>
          {translate.pages.welcome.teaserSubSentenceTwo}
        </h3>
        <h3 className={styles.homeSubtitleText}>
          {translate.pages.welcome.teaserSubSentenceThree}
        </h3>
        <h3 className={styles.homeSubtitleText}>
          {translate.pages.welcome.teaserSubSentenceFour}
        </h3>
      </div>
      <div className={styles.productSliderContainer}>
        <ProductsSlider />
      </div>
      <div>
        <div className={styles.teaserText}>
          <div>
            <p className={styles.homeTitle}>
              {translate.pages.welcome.subTeaser.title}
            </p>
          </div>
          <div className={styles.teaserCards}>
            <div className={styles.teaserSingleCard}>
              <p className={styles.homeSubtitle}>
                {translate.pages.welcome.subTeaser.teaserFirstSubtitle}
              </p>
              <p className={styles.homeSubtitleText}>
                {translate.pages.welcome.subTeaser.teaserFirstSentence}
              </p>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                nature_people
              </span>
            </div>
            <div className={styles.teaserSingleCard}>
              <p className={styles.homeSubtitle}>
                {translate.pages.welcome.subTeaser.teaserSecondSubtitle}
              </p>
              <p className={styles.homeSubtitleText}>
                {translate.pages.welcome.subTeaser.teaserSecondSentence}
              </p>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                spa
              </span>
            </div>
            <div className={styles.teaserSingleCard}>
              <p className={styles.homeSubtitle}>
                {translate.pages.welcome.subTeaser.teaserThirthSubtitle}
              </p>
              <p className={styles.homeSubtitleText}>
                {translate.pages.welcome.subTeaser.teaserThirthSentence}
              </p>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                send
              </span>
            </div>
            <div className={styles.teaserSingleCard}>
              <p className={styles.homeSubtitle}>
                {translate.pages.welcome.subTeaser.teaserFourthSubtitle}
              </p>
              <p className={styles.homeSubtitleText}>
                {translate.pages.welcome.subTeaser.teaserFourthSentence}
              </p>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                diversity_1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
