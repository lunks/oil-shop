import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useLocaleContext from "../../context/localeContext"

const Payment = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { translate } = useLocaleContext()
  const shippingData = location.state.shippingData
  const text = translate.pages.payment

  const handlePaymentMethod = (method) => {
    navigate("/checkout/summary", {
      state: { shippingData, paymentMethod: method },
    })
  }

  return (
    <div>
      <div>
        <h2>Shipping Details</h2>
        <p>
          {text.name}:{shippingData.firstName} {shippingData.lastName}
        </p>
        <p>
          {text.email}: {shippingData.email}
        </p>
        <p>
          {text.address}: {shippingData.address}
        </p>
        <p>
          {text.phone}: {shippingData.phone}
        </p>
      </div>
      <div>
        <h2>Payment Method</h2>
        <button onClick={() => handlePaymentMethod("paypal")}>Paypal</button>
        <button onClick={() => handlePaymentMethod("paypal")}>Deposit</button>
      </div>
    </div>
  )
}

export default Payment
