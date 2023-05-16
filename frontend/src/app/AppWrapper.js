import { BrowserRouter } from "react-router-dom"
import { LocaleContextProvider } from "../context/locale.context"
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
