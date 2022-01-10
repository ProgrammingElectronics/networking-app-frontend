import baseAPI from "./baseAPI"
const BASE_URL = "http://localhost:8000/core/skills/"


const getAllSkills = async (token) => {
  
  const url = BASE_URL
  const data = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}


const skillAPI = {
  getAllSkills
}

export default skillAPI
