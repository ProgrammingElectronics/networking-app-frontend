import { tryCatchFetch } from '../api/baseAPI'
const BASE_URL = "http://localhost:8000/core/profiles/"


const getAllProfiles = async (token) => {
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




const profileAPI = {
  getAllProfiles
}

export default profileAPI
