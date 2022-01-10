const BASE_URL = "http://localhost:8000/core/"

const tryCatchFetch = async (url, init = null) => {
  try {
    let response = await fetch(url, init)
    return await response.json()
  }
  catch (e) {
    console.error(e)
    return null
  }
}

const baseAPI = {
  tryCatchFetch,
  BASE_URL
}

export default baseAPI