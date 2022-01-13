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
  const data = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const updateProfile = async (token, profileObj, profile_id) => {
  const url = baseAPI.BASE_URL + PROFILE_URL + profile_id + '/'
  const data = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(profileObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const deleteProfile = async (token, profile_id) => {
  const url = baseAPI.BASE_URL + PROFILE_URL + profile_id + '/'
  const data = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const addProfile = async (token, profileObj) => {
  const url = baseAPI.BASE_URL + PROFILE_URL
  console.log('url', url)
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify(profileObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

// const addProfile = (profileObj) => {
//   return fetch('http://localhost:8000/core/profiles/', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//       // 'Authorization': `JWT ${token}`
//     },
//     body: JSON.stringify(profileObj)
//   }).then(res=>res)
// };

const ProfileAPI = {
  getAllProfiles,
  getProfileByID,
  addProfile
  deleteProfile,
  updateProfile,
  getFilteredProfiles
}

export default ProfileAPI