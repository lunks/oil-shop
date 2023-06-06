import React from "react"
import useLocaleContext from "../../context/locale.context"
import styles from "./About.module.css"

const About = () => {
  const { translate } = useLocaleContext()
  return (
    <div className={styles.rootDiv}>
      <h1>{translate.pages.about.title}</h1>
      <p>{translate.pages.about.teaser}</p>
    </div>
  )
}

export default About
