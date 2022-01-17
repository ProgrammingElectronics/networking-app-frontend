import { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Nav from "react-bootstrap/Nav"
import LinkedInComp from "../LinkedIn/LinkedInComp";
import LinkedInAPI from "../../api/LinkedInApi/LinkedInAPI";

// context
import UserContext from "../../contexts/UserContext";


const SignUpModalComp = () => {
  
  const lD = {
    clientId: '7795z7b1o288ud',
    redirectUrl: 'http://localhost:3000/linkedin',
    oauthUrl: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code',
    scope: 'r_liteprofile%20r_emailaddress',
    state: '897be90Arandstringfork130facts'
  };

  // context
  const userContext = useContext(UserContext);
  const { setUserSignup, setUserLogin, setLinkenInSignup } = userContext;

  // to show signup modal
  const [showSignup, setShowSignup] = useState(false);

  // to handle showing/closing signup modal
  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

  // to show login modal
  const [showLogin, setShowLogin] = useState(false);

  // to handle showing/closing login modal
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  // to handle closing the signup modal then opening the login modal
  const handleCloseSignupAndShowLogin = () => {
    handleCloseSignup()
    handleShowLogin()
  }

  const handleGetLinkedInID = async (event) => {
    
    if (event.data.type === 'code') {
    
      const { code } = event.data;
      console.log("SignupModal | handleGetLinkedID | I got this code from the pop-up window", code)
    
      const linkedInID = await LinkedInAPI.getLinkedInID(code);
      console.log('SignupModal | handlePostMessage | linkedInID', linkedInID)
      
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
    <>
    {/* Signup Modal */}
      <Nav.Link onClick={handleShowSignup}>Sign Up</Nav.Link>
      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
            <Modal.Title>Sign Up to Code It Forward</Modal.Title>
        </Modal.Header>
        <div>
         <button onClick={showPopup}>Login to LinkedIn</button>
        </div>
        <Form onSubmit={setUserSignup}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name='username' placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSignup}>Cancel</Button>
            <Button variant="primary" type="submit" onClick={handleCloseSignupAndShowLogin}>Sign Up</Button>
          </Modal.Footer>
        </Form>
      </Modal>

    {/* Login Modal */}
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
            <Modal.Title>Login to Code It Forward</Modal.Title>
        </Modal.Header>
        <Form onSubmit={setUserLogin}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name='username' placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLogin}>Cancel</Button>
            <Button variant="primary" type="submit" onClick={handleCloseLogin}>Login</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default SignUpModalComp
