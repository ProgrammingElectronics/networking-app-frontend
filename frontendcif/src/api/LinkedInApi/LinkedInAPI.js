import baseAPI from "../baseAPI"

const LinkData = {
  clientId: '7795z7b1o288ud',
  redirectUrl: 'http://localhost:3000&',
  oauthUrl: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&',
  scope: 'r_liteprofile%20r_emailaddress&',
  state: '897be90Arandstringfork130facts'
};


const requestLinkedInAuthCode = async () => {
  const url = LinkData.oauthUrl + LinkData.client_id + LinkData.redirect_uri + LinkData.scope + LinkData.state
  const data = {
    method: "GET",
    headers: {
      // "Content-Type": "application/json",
      // 'Authorization': `JWT ${token}`
    }
  }
  return await baseAPI.tryCatchFetch(url, data)
}



const LinkedInAPI = {
  requestLinkedInAuthCode
}

export default LinkedInAPI