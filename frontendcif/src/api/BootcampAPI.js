import baseAPI from "./baseAPI"
const BOOTCAMP_URL = "bootcamps/"


const getAllBootcamps = async (token) => {
  
  const url = baseAPI.BASE_URL + BOOTCAMP_URL
  const data = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}


const bootcampAPI = {
  getAllBootcamps
}

export default bootcampAPI
