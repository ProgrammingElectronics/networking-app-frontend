import baseAPI from "./baseAPI"
const CONNECT_URL = "connection-requests/"

// Returns a list of all connection requests where the profile is either from_profile or to_profile
const fetchConnections = async (token) => {
  const url = baseAPI.BASE_URL + CONNECT_URL
  const data = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const createConnection = (token, connectionObj) => {
  const url = baseAPI.BASE_URL + CONNECT_URL
  const data = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(connectionObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const ConnectionRequestAPI = {
  fetchConnections,
  createConnection
}

export default ConnectionRequestAPI