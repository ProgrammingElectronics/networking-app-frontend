import { tryCatchFetch, BASE_URL } from '../api/baseAPI'
const CONNECT_URL = "connection-requests/"

// Returns a list of all connection requests where the profile is either from_profile or to_profile
const getConnections = async (token) => {
  const url = BASE_URL + CONNECT_URL
  const data = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await tryCatchFetch(url, data)
}

const ConnectionRequestAPI = {
  getConnections
}

export default ConnectionRequestAPI