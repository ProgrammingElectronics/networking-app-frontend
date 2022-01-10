import { useState, useContext } from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Nav from "react-bootstrap/Nav"

// context
import UserContext from "../../contexts/UserContext";

const SignUpModalComp = () => {
  
  // context
  const userContext = useContext(UserContext);
  const { setUserSignup, setUserLogin } = userContext;

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

  return (
    <>
    {/* Signup Modal */}
      <Nav.Link onClick={handleShowSignup}>Sign Up</Nav.Link>
      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
            <Modal.Title>Sign Up to Code It Forward</Modal.Title>
        </Modal.Header>
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
