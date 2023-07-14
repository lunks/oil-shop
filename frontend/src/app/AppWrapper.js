import { BrowserRouter } from "react-router-dom"
import { LocaleContextProvider } from "../context/localeContext"
import App from "./App"

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <LocaleContextProvider>
        <App />
      </LocaleContextProvider>
    </BrowserRouter>
  )
}

export default AppWrapper
