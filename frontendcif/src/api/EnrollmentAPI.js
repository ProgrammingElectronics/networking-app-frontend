import baseAPI from "./baseAPI"
const ENROLLMENT_URL = "enrollments/"

const addEnrollment = async (token, enrollmentObj) => {
    const url = baseAPI.BASE_URL + ENROLLMENT_URL
    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `JWT ${token}`
      },
      body : JSON.stringify(enrollmentObj)
    }
    return await baseAPI.tryCatchFetch(url, data)
}

const updateEnrollment = async (token, enrollmentObj, enrollment_id) => {
    const url = baseAPI.BASE_URL + ENROLLMENT_URL + enrollment_id + '/'
    const data = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `JWT ${token}`
      },
      body : JSON.stringify(enrollmentObj)
    }
    return await baseAPI.tryCatchFetch(url, data)
}

const getAllEnrollments = async (token) => {
    const url = baseAPI.BASE_URL + ENROLLMENT_URL
  
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `JWT ${token}`
      }
    }
    return await baseAPI.tryCatchFetch(url, data)
}

const EnrollmentAPI = {
    addEnrollment,
    updateEnrollment,
    getAllEnrollments
}
  
export default EnrollmentAPI