import React from "react"
import style from "./Sidebar.module.css"
import axios from "axios"
import useLocaleContext from "../../context/locale.context"

const Sidebar = ({setCategory}) => {
  const { translate } = useLocaleContext()

  function callYL() {
    const username = "your_username"
    const password = "your_password"

    axios
      .post("https://www.youngliving.com/api/accounts/token", {
        userName: username,
        email: username,
        memberId: username,
        password: password,
        rememberMe: true,
      })
      .then((response) => {
        console.log("response.data ", response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const Categories = Object.freeze({
    ALL : 'all',
    ESSENTIAL_OIL : 'essentialOil',
    DIFUSER : 'difuser',
    BODY_CARE : 'bodyCare',
    HAIR_CARE : 'hairCare',
    ROLL : 'roll',
    MASSAGE_OIL : 'massageOil',
  })

  return (
    <div>
      <ul className={style.sidebar}>
      <li onClick={() => setCategory(Categories.ALL)} className={style.sidebarItem}>{translate.sidebar.essentialOils}</li>
        <li onClick={() => setCategory(Categories.ESSENTIAL_OIL)} className={style.sidebarItem}>{translate.sidebar.essentialOils}</li>
        <li onClick={() => setCategory(Categories.DIFUSER)} className={style.sidebarItem}>{translate.sidebar.difusers}</li>
        <li onClick={() => setCategory(Categories.BODY_CARE)} className={style.sidebarItem}>{translate.sidebar.bodyCare}</li>
        <li onClick={() => setCategory(Categories.HAIR_CARE)} className={style.sidebarItem}>{translate.sidebar.hairCare}</li>
        <li onClick={() => setCategory(Categories.ROLL)} className={style.sidebarItem}>{translate.sidebar.rollOn}</li>
        <li onClick={() => setCategory(Categories.MASSAGE_OIL)} className={style.sidebarItem}>{translate.sidebar.massageOils}</li>
      </ul>
    </div>
  )
}

export default Sidebar
