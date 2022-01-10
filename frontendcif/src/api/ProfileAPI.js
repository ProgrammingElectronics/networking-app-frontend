import tryCatchFetch from '../api/baseAPI'
const BASE_URL = "http://localhost:8000/core/profile/"


const getAllProfiles = async (token) => {
  // console.log("API ----- getAllWorkflows ----->")
  const url = BASE_URL
  const data = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await tryCatchFetch(url, data)
}
const getProfileByID = async (token, profile_id) => {
  // console.log("API ----- getAllWorkflows ----->")
  const url = BASE_URL + profile_id + '/'
  const data = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await tryCatchFetch(url, data)
}


const ProfileAPI = {
  getAllProfiles,
  getProfileByID
}

export default ProfileAPI
