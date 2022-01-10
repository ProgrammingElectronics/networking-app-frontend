import baseAPI from "./baseAPI"
const INDUSTRY_URL = "industries/"


const getAllIndustries = async (token) => {
  
  const url = baseAPI.BASE_URL + INDUSTRY_URL
  const data = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}


const industryAPI = {
  getAllIndustries
}

export default industryAPI
