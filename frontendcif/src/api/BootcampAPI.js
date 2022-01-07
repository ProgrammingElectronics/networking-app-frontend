import { tryCatchFetch } from '../api/baseAPI'
const BASE_URL = "http://localhost:8000/core/bootcamps/"


const getAllBootcamps = async (token) => {
  
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


const bootcampAPI = {
  getAllBootcamps
}

export default bootcampAPI
