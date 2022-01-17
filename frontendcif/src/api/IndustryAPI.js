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

const addIndustry = async (token, industryObj) => {
  const url = baseAPI.BASE_URL + INDUSTRY_URL
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(industryObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const updateIndustry = async (token, industryObj, industryID) => {
  const url = baseAPI.BASE_URL + INDUSTRY_URL + industryID + '/'
  const data = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(industryObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const deleteIndustry = async (token, industryID) => {
  const url = baseAPI.BASE_URL + INDUSTRY_URL + industryID + '/'
  const data = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const industryAPI = {
  getAllIndustries,
  addIndustry,
  updateIndustry,
  deleteIndustry
}

export default industryAPI
