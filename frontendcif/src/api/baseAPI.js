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

export { tryCatchFetch }