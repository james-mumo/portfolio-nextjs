import { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons"

function UserDetails({ user }) {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`)
        const data = await response.json()
        setUserData(data)
      } catch {
        setError(true)
      }
    }

    fetchData()
    console.log = userData
  }, [user])

  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>
        {userData.name}

        <FontAwesomeIcon icon={faAmbulance} />
      </h1>
      <p>{userData.bio}</p>
      <img src={userData.avatar_url} alt={userData.name} />
    </div>
  )
}

export default UserDetails
