const BASE_URL = "http://localhost:8000/core/"

const tryCatchFetch = async (url, init=null) => {
  try {
    const response = await fetch(url, init)
    if (response.ok) {
      return await response.json()
    }
    else {
      throw Error(`Bad response ${response.status} ${response.statusText}`)
    }
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