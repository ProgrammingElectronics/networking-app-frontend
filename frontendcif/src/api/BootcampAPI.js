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

const addBootcamp = async (token, bootcampObj) => {
  const url = baseAPI.BASE_URL + BOOTCAMP_URL
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(bootcampObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const updateBootcamp = async (token, bootcampObj, bootcampID) => {
  const url = baseAPI.BASE_URL + BOOTCAMP_URL + bootcampID + '/'
  const data = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(bootcampObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const deleteBootcamp = async (token, bootcampID) => {
  const url = baseAPI.BASE_URL + BOOTCAMP_URL + bootcampID + '/'
  const data = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}


const bootcampAPI = {
  getAllBootcamps,
  addBootcamp,
  updateBootcamp,
  deleteBootcamp
}

export default bootcampAPI
