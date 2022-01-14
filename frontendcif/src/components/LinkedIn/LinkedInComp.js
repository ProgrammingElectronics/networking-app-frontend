import LinkedInAPI from "../../api/LinkedInApi/LinkedInAPI"

import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { LinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import { useEffect, useState } from "react";

const LinkedInComp = () => {
  
  // // const { linkedInLogin } = useLinkedIn({
  // //   clientId: "7795z7b1o288ud",
  // //   redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
  // //   onSuccess: (code) => {
  // //     console.log(code);
  // //   },
  // //   onError: (error) => {
  // //     console.log(error);
  // //   },
  // // });

  const lD = {
    clientId: '7795z7b1o288ud',
    redirectUrl: 'http://localhost:3000',
    oauthUrl: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code',
    scope: 'r_liteprofile%20r_emailaddress',
    state: '897be90Arandstringfork130facts'
  };


  // const getCodeFromWindowURL = (url) => {
  //   const popupWindowURL = new URL(url);
  //   return popupWindowURL.searchParams.get("code");
  // };

  // const handlePostMessage = (event) => {
  //   if (event.data.type === 'code') {
  //     const { code } = event.data;
  //     console.log(code)
  //     //this.getUserCredentials(code); -> Handle API call to Django
  //   }
  // };

  // const [popUpWindow, setPopUpWindow] = useState(null)
  const [location, setLocation] = useState("")

  useEffect(() => {
    console.log("location", location)
  }, [location])


  // useEffect(() => {
  //   console.log("LinkedInComp | useEffect | I AM HERE")

  //   if (window.opener && window.opener !== window) {

  //     console.log("LinkedInComp | useEffect | I AM A NEW WINDOW")
  //     const code = getCodeFromWindowURL(window.location.href);  
  //     window.opener.postMessage({'type': 'code', 'code': code}, '*')
  //     window.close();
  //   }
      
  //     window.addEventListener('message', handlePostMessage);
  // },[popUpWindow])

  const showPopup = () => {
    //const { clientId, redirectUrl, oauthUrl, scope, state } = LinkedInApi;
    const oauthUrl = `${lD.oauthUrl}&client_id=${lD.clientId}&scope=${lD.scope}&state=${lD.state}&redirect_uri=${lD.redirectUrl}`;
    const width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;
    const newPopUpWindow = window.open(
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

    newPopUpWindow.onclose = (e) => {
      console.log("event", e)
      // setLocation(window)
    }

    newPopUpWindow.close()

  };

  return (
    
        <img
          onClick={showPopup}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: '180px', cursor: 'pointer' }}
        />
    
  );
}

// import React, { useState } from 'react';

// import { useLinkedIn } from 'react-linkedin-login-oauth2';
// // You can use provided image shipped by this package or using your own
// import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

// function LinkedInComp() {
//   const { linkedInLogin } = useLinkedIn({
//     clientId: '7795z7b1o288ud',
//     redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
//     onSuccess: (code) => {
//       console.log(code);
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//   });

//   return (
//     <img
//       onClick={linkedInLogin}
//       src={linkedin}
//       alt="Sign in with Linked In"
//       style={{ maxWidth: '180px', cursor: 'pointer' }}
//     />
//   );
// }

export default LinkedInComp