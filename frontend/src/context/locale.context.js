import React, { createContext, useContext } from "react"

import deDe from "../i18n/de.json"

const LocaleContext = createContext({
  t: deDe,
})

export const LocaleContextProvider = ({children}) => {
  return <LocaleContext.Provider value={{ t: deDe }}>{children}</LocaleContext.Provider>
}

const useLocaleContext = () => useContext(LocaleContext)

export default useLocaleContext
