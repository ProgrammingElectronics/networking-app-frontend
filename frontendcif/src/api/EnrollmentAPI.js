import baseAPI from "./baseAPI"
const ENROLLMENT_URL = "enrollments/"

const updateEnrollment = async (token, enrollmentObj, profile_id) => {
    const url = baseAPI.BASE_URL + ENROLLMENT_URL + profile_id + '/'
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
    updateEnrollment,
    getAllEnrollments
}
  
export default EnrollmentAPI