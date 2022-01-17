import baseAPI from "../baseAPI"
const LINKEDIN_URL = "linkedin/"
const LINKEDIN_URL_SIGNUP = "linkedinSignUp/"

const requestLinkedInAuthCode = async (token, code) => {
  const url = baseAPI.BASE_URL + LINKEDIN_URL
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `JWT ${token}`
    },
    body : JSON.stringify(code)
  }
  return await baseAPI.tryCatchFetch(url, data)
}

const getLinkedInID = async (code) => {
  const url = baseAPI.BASE_URL + LINKEDIN_URL_SIGNUP
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(code)
  }
  return await baseAPI.tryCatchFetch(url, data)
}


const LinkedInAPI = {
  requestLinkedInAuthCode,
  getLinkedInID
}

export default LinkedInAPI