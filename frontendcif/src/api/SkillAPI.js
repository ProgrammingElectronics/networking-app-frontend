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

const addSkill = async (token, skillObj) => {
  const url = baseAPI.BASE_URL + SKILL_URL
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(skillObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const updateSkill = async (token, skillObj, skillID) => {
  const url = baseAPI.BASE_URL + SKILL_URL + skillID + '/'
  const data = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(skillObj)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const deleteSkill = async (token, skillID) => {
  const url = baseAPI.BASE_URL + SKILL_URL + skillID + '/'
  const data = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}


const skillAPI = {
  getAllSkills,
  addSkill,
  updateSkill,
  deleteSkill
}

export default skillAPI
