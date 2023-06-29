import React, { useEffect, useState } from "react"
import axios from "axios"

const MyComponent = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const baseURL = "https://www.youngliving.com/"
    const credentials = {
      memberId: 11912556,
      password: "Flughase82",
    }

    // Configuration for the axios instance
    const apiClient = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    })

    // Function to fetch data
    const fetchData = async () => {
      try {
        // HTTP POST to get the token
        const response = await apiClient.post("api/accounts/token", credentials)

        if (response.status === 200) {
          const plainToken = new TextEncoder().encode(response.data)
          const token64 = btoa(String.fromCharCode.apply(null, plainToken))

          // Adding the token to the headers for the next request
          apiClient.defaults.headers.common["authtoken"] = token64

          // HTTP GET to get the user data
          const userResponse = await apiClient.get(
            `vo.dlv.api/downline/children/${credentials.memberId}/0`,
          )
          console.log("userResponse", userResponse)
          if (userResponse.status === 200) {
            console.log("userResponse", userResponse)
            setData(userResponse.data) // Set the fetched data in the state
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    // Call the fetchData function
    fetchData()
  }, [])

  return (
    <div>
      {/* You can render the data here */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default MyComponent
