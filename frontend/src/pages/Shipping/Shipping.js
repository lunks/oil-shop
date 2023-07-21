import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import useLocaleContext from "../../context/localeContext"

const Shipping = () => {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    firstName: "",
    lastName: "",
    name: "",
    phone: "",
    street: "",
    streetNumber: "",
    city: "",
    postalCode: "",
    country: "",
  })

  const navigate = useNavigate()

  const { translate } = useLocaleContext()
  const text = translate.pages.shipping

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("maybe store in global state or localStore", formData)

    navigate("/checkout/payment", {
      state: { shippingData: formData },
    })
  }

  return (
    <div>
      <div>{text.title}</div>
      <form onSubmit={handleSubmit}>
        <input
          name='frstName'
          onChange={handleChange}
          placeholder={text.inputPlacehoders.firstName}
          required
        />
        <input
          name='lastName'
          onChange={handleChange}
          placeholder={text.inputPlacehoders.lastName}
          required
        />
        <input
          name='email'
          onChange={handleChange}
          placeholder={text.inputPlacehoders.email}
          required
        />
        <input
          name='phone'
          onChange={handleChange}
          placeholder={text.inputPlacehoders.phone}
          required
        />
        <input
          name='address'
          onChange={handleChange}
          placeholder={text.inputPlacehoders.street}
          required
        />
        <input
          name='streetNumber'
          onChange={handleChange}
          placeholder={text.inputPlacehoders.streetNumber}
          required
        />
        <input
          name='postalCode'
          onChange={handleChange}
          placeholder={text.inputPlacehoders.postalCode}
          required
        />
        <input
          name='address'
          onChange={handleChange}
          placeholder={text.inputPlacehoders.city}
          required
        />
        <input
          name='address'
          onChange={handleChange}
          placeholder={text.inputPlacehoders.country}
          required
        />
      </form>
      <button onClick={handleSubmit}>{text.submitButton}</button>
    </div>
  )
}

export default Shipping
