import React, { createContext, useContext, useState } from "react"

import deDe from "../i18n/de.json"
import enEn from "../i18n/en.json"

const LocaleContext = createContext()

export const LocaleContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(enEn)

  const changeLanguage = (lang) => {
    switch (lang) {
      case "en":
        setLanguage(enEn)
        break
      case "de":
        setLanguage(deDe)
        break
      default:
        setLanguage(enEn)
        break
    }
  }

  return (
    <LocaleContext.Provider
      value={{ translate: language, setLanguage: changeLanguage }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

const useLocaleContext = () => useContext(LocaleContext)

export default useLocaleContext
