import { useState, useContext } from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Nav from "react-bootstrap/Nav"

// context
import UserContext from "../../contexts/UserContext";

const LoginModalComp = () => {
  
  // context
  const userContext = useContext(UserContext);
  const { setUserLogin } = userContext;

  // to show modal
  const [showLogin, setShowLogin] = useState(false);

  // to handle showing/closing modal
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);


  return (
    <>
      <Nav.Link onClick={handleShowLogin}>Login</Nav.Link>
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

export default LoginModalComp;
