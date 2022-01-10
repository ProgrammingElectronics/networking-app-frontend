import baseAPI from "./baseAPI"
const SKILL_URL = "skills/"


const getAllSkills = async (token) => {
  
  const url = baseAPI.BASE_URL + SKILL_URL
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
