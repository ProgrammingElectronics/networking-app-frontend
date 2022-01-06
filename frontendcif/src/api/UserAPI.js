import { tryCatchFetch } from "./baseAPI"

  const BASE_USER_URL = 'http://localhost:8000/'


 const login = async (userObject) => {
   let url = BASE_USER_URL + "token-auth/"
   let init = {
     method: "POST",
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(userObject)
   }
   return await tryCatchFetch(url, init)
 };

 const getLoggedInUser = async (token) => {
  let url = BASE_USER_URL + 'current_user/'
  let init = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
  }
  return await tryCatchFetch(url, init)
 };

 const signupUser = async (userObject) => {
  let url = BASE_USER_URL + 'core/users/'
  let init = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }
  return await tryCatchFetch(url, init)
 };



 export default { login, getLoggedInUser, signupUser }