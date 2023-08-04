import React, { createContext, useContext, useState, useEffect } from "react"

import de from "../i18n/de.json"
import en from "../i18n/en.json"
const languages = { en, de }
const LocaleContext = createContext()

export const LocaleContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  return (
    <LocaleContext.Provider
      value={{ translate: languages[language], language, setLanguage }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

const useLocaleContext = () => useContext(LocaleContext)

export default useLocaleContext
