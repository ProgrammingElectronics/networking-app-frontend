// import { tryCatchFetch } from "./baseAPI"

  const BASE_USER_URL = 'http://localhost:8000/'


//  const login = async (userObject) => {
//    let url = BASE_USER_URL + "token-auth/"
//    let init = {
//      method: "POST",
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(userObject)
//    }
//    return await tryCatchFetch(url, init)
//  };

//  const getLoggedInUser = async (token) => {
//   let url = BASE_USER_URL + 'current_user/'
//   let init = {
//     method: "GET",
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `JWT ${token}`
//     },
//   }
//   return await tryCatchFetch(url, init)
//  };

//  const signupUser = async (userObject) => {
//   let url = BASE_USER_URL + 'core/users/'
//   let init = {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userObject)
//   }
//   return await tryCatchFetch(url, init)
//  };

const login = (userObject) => {
  return fetch('http://localhost:8000/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const getLoggedInUser = (token) => {
  return fetch('http://localhost:8000/core/current_user/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

const signupUser = (userObject) => {
  return fetch('http://localhost:8000/core/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};


const updateUser = (token, userObject, userID) => {
  
  return fetch('http://localhost:8000/core/update-users/' + userID + '/', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};


export default { login, getLoggedInUser, signupUser, updateUser }