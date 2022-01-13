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

const createConnection = async (token, connectionObj) => {
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

const updateConnection = async (token, connectionObj, connectionID) => {
  const url = baseAPI.BASE_URL + CONNECT_URL + connectionID + '/'
  const data = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(connectionObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const deleteConnection = async (token, connectionID) => {
  const url = baseAPI.BASE_URL + CONNECT_URL + connectionID + '/'
  const data = {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}





// use this for button submits
// const handleCreateConnection = async () => {
//   // assign all needed variables
//   const userToken = localStorage['auth-user']
//   const to_profile_id = 1
//   const from_profile_id = 2

//   const connectionObj = {
//     "from_profile": to_profile_id,
//     "to_profile": from_profile_id
//   }

//   const data = await ConnectionRequestAPI.createConnection(userToken, connectionObj)
  
// }

const ConnectionRequestAPI = {
  fetchConnections,
  createConnection,
  deleteConnection,
  updateConnection
}

export default ConnectionRequestAPI