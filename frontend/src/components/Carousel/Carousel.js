import React, { useState, useEffect, useRef } from "react"
import styles from "../../styles/components/Carousel.module.scss"
const Carousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const iframeRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      nextVideo()
    }, 15000)

    return () => clearInterval(timer)
  }, [currentVideoIndex])

  const nextVideo = () => {
    const newIndex = currentVideoIndex + 1
    setCurrentVideoIndex(newIndex >= videos.length ? 0 : newIndex)
  }

  const previousVideo = () => {
    const newIndex = currentVideoIndex - 1
    setCurrentVideoIndex(newIndex < 0 ? videos.length - 1 : newIndex)
  }

  const videos = [
    { id: "YHYuQFBrJVc", start: 170, end: 185 },
    { id: "yicHmCVxmNQ", start: 16, end: 31 },
  ]

  const currentVideo = videos[currentVideoIndex]
  const videoSrc = `https://www.youtube.com/embed/${currentVideo.id}?start=${currentVideo.start}&end=${currentVideo.end}&autoplay=1&loop=1&playlist=${currentVideo.id}&controls=0&modestbranding=1&mute=1`

  return (
    <div className='carousel'>
      <span
        className={`material-symbols-outlined iconCarousel`}
        onClick={previousVideo}
      >
        arrow_back_ios
      </span>
      <div
        style={{
          position: "relative",
          width: "1120px",
          height: "630px",
        }}
      >
        <iframe
          className={styles.video}
          width='1120'
          height='630'
          src={videoSrc}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
        <div className={styles.borderDiv}></div>
      </div>

      <span
        onClick={nextVideo}
        className={`material-symbols-outlined iconCarousel`}
      >
        arrow_forward_ios
      </span>
    </div>
  )
}

export default Carousel
