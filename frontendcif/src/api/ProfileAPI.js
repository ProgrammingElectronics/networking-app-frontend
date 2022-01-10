import baseAPI from "./baseAPI"
const PROFILE_URL = "profiles/"


const getAllProfiles = async (token) => {
  // console.log("API ----- getAllWorkflows ----->")
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
const getProfileByID = async (token, profile_id) => {
  const url = baseAPI.BASE_URL + PROFILE_URL + profile_id + '/'
  console.log(url)
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
  getProfileByID
}

export default ProfileAPI
