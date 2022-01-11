import baseAPI from "./baseAPI"
const PROFILE_URL = "profiles/"


const getAllProfiles = async (token) => {
  const url = baseAPI.BASE_URL + PROFILE_URL

  const data = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const getFilteredProfiles = async (token, filters) => {
  
  const url = baseAPI.BASE_URL + PROFILE_URL + filters

  const data = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const getProfileByID = async (token, profile_id) => {
  const url = baseAPI.BASE_URL + PROFILE_URL + profile_id + '/'
  // console.log("ProfileAPI | getProfileByID | profile_id", profile_id)

  const data = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}



const ProfileAPI = {
  getAllProfiles,
  getProfileByID,
  getFilteredProfiles
}

export default ProfileAPI