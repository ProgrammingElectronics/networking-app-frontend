import { useContext, useEffect} from "react";
import LinkedInAPI from "../../api/LinkedInApi/LinkedInAPI";
import UserContext from "../../contexts/UserContext";

const LinkedInComp = () => {
  
    // context
    const userContext = useContext(UserContext);
    const { setUserSignup, setLinkenInSignup } = userContext;

  const lD = {
    clientId: '7795z7b1o288ud',
    redirectUrl: 'http://localhost:3000/linkedin',
    oauthUrl: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code',
    scope: 'r_liteprofile%20r_emailaddress',
    state: '897be90Arandstringfork130facts'
  };
  
  // User Auth
  const token = localStorage.getItem("auth-user");
  
  const handleGetLinkedInID = async (event) => {
    
    if (event.data.type === 'code') {
    
      const { code } = event.data;
      console.log("LinkedInComp | handleGetLinkedID | I got this code from the pop-up window", code)
    
      const linkedInID = await LinkedInAPI.getLinkedInID(code);
      console.log('LinkedInPage | handlePostMessage | linkedInID', linkedInID)
      
      setLinkenInSignup(linkedInID)

    }
  };

  const getCodeFromWindowURL = (url) => {
    const popupWindowURL = new URL(url);
    return popupWindowURL.searchParams.get("code");
  };

  useEffect(() => {
    console.log("name", window)
    if (window.opener && window.opener !== window) {
      const code = getCodeFromWindowURL(window.location.href);
      console.log("LinkedInPage | useEffect | code", code)
      window.opener.postMessage({'type': 'code', 'code': code}, '*')
      window.close();
    }
      window.addEventListener('message', handleGetLinkedInID);
  },[])
  
  const showPopup = () => {
    //const { clientId, redirectUrl, oauthUrl, scope, state } = LinkedInApi;
    const oauthUrl = `${lD.oauthUrl}&client_id=${lD.clientId}&scope=${lD.scope}&state=${lD.state}&redirect_uri=${lD.redirectUrl}`;
    const width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;
    window.open(
      oauthUrl,
      'Linkedin',
      'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
      width +
      ', height=' +
      height +
      ', top=' +
      top +
      ', left=' +
      left
    );
    
  }

  return (
    <div>
      <button onClick={showPopup}>Login to LinkedIn</button>
    </div>
    
  )
}

export default LinkedInComp