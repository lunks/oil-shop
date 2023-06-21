import React from "react"
import useLocaleContext from "../../context/locale.context"
import Carousel from "../../components/Carousel/Carousel"
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider"

const Home = () => {
  const { translate } = useLocaleContext()

  return (
    <div className='homeContainer'>
      <Carousel />
      <div className='teaserText'>
        <h2 className='homeTitle'>{translate.pages.welcome.title}</h2>
        <h3 className='homeSubtitleText'>
          {translate.pages.welcome.teaserSentence}
        </h3>
        <h3 className='homeSubtitleText'>
          {translate.pages.welcome.teaserSubSentenceOne}
        </h3>
        <h3 className='homeSubtitleText'>
          {translate.pages.welcome.teaserSubSentenceTwo}
        </h3>
        <h3 className='homeSubtitleText'>
          {translate.pages.welcome.teaserSubSentenceThree}
        </h3>
        <h3 className='homeSubtitleText'>
          {translate.pages.welcome.teaserSubSentenceFour}
        </h3>
      </div>
      <div className='productSliderContainer'>
        <ProductsSlider />
      </div>
      <div>
        <div className='teaserText'>
          <div>
            <p className='homeTitle'>
              {translate.pages.welcome.subTeaser.title}
            </p>
          </div>
          <div className='teaserCards'>
            <div className='teaserSingleCard'>
              <p className='homeSubtitle'>
                {translate.pages.welcome.subTeaser.teaserFirstSubtitle}
              </p>
              <p className='homeSubtitleText'>
                {translate.pages.welcome.subTeaser.teaserFirstSentence}
              </p>
              <span className={`material-symbols-outlined $''icon}`}>
                nature_people
              </span>
            </div>
            <div className='teaserSingleCard'>
              <p className='homeSubtitle'>
                {translate.pages.welcome.subTeaser.teaserSecondSubtitle}
              </p>
              <p className='homeSubtitleText'>
                {translate.pages.welcome.subTeaser.teaserSecondSentence}
              </p>
              <span className={`material-symbols-outlined $''icon}`}>spa</span>
            </div>
            <div className='teaserSingleCard'>
              <p className='homeSubtitle'>
                {translate.pages.welcome.subTeaser.teaserThirthSubtitle}
              </p>
              <p className='homeSubtitleText'>
                {translate.pages.welcome.subTeaser.teaserThirthSentence}
              </p>
              <span className={`material-symbols-outlined $''icon}`}>send</span>
            </div>
            <div className='teaserSingleCard'>
              <p className='homeSubtitle'>
                {translate.pages.welcome.subTeaser.teaserFourthSubtitle}
              </p>
              <p className='homeSubtitleText'>
                {translate.pages.welcome.subTeaser.teaserFourthSentence}
              </p>
              <span className={`material-symbols-outlined $''icon}`}>
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
